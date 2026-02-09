import frontmatter from 'front-matter';
import { marked } from 'marked';
import type { Quiz, QuizResult } from './quiz';

export const contentTypes = ['formaten', 'kaders', 'over-ons'] as const;

export type ContentType = (typeof contentTypes)[number];

export type Attributes = {
	title: string;
	description: string;
	sorting_score?: number;
	link?: boolean;
};

export const isContentType = (value: string): value is ContentType =>
	contentTypes.includes(value as ContentType);

export const glob = import.meta.glob('$lib/content/**/*.md', { query: '?raw', import: 'default' });

export async function getContent({ type, id }: { type: ContentType; id: string }) {
	const path = `/src/lib/content/${type}/${id}.md`;
	const markdown = await glob[path]();
	const { attributes, body } = frontmatter<Attributes>(markdown as string);
	return { attributes, body: await marked.parse(body) };
}

export async function getAllContent({
	type,
	includeUnlinked
}: {
	type: ContentType;
	includeUnlinked?: boolean;
}) {
	const items = await Promise.all(
		Object.keys(glob)
			.filter((path) => path.startsWith(`/src/lib/content/${type}/`))
			.map(async (path) => {
				const markdown = await glob[path]();
				const id = path.split('/').pop()!.replace('.md', '');
				const { attributes } = frontmatter<Attributes>(markdown as string);
				if (!includeUnlinked && attributes.link === false) return null;
				return { ...attributes, id };
			})
	);

	return items
		.filter((item): item is NonNullable<(typeof items)[number]> => Boolean(item))
		.sort((a, b) => (b.sorting_score ?? 0) - (a.sorting_score ?? 0));
}

/** Checks whether all `fileTypes` in a given `quiz` have corresponding explanation pages. */
export function checkQuizContent(quiz: Quiz) {
	const collect = (node: Quiz | QuizResult, acc: Set<string>) => {
		if ('fileTypes' in node) node.fileTypes.forEach((fileType) => acc.add(fileType));
		else Object.values(node.options).forEach((child) => collect(child, acc));
	};

	const available = new Set(
		Object.keys(glob)
			.map((filePath) => filePath.split('/').pop())
			.filter((fileName): fileName is string => Boolean(fileName))
			.map((fileName) => fileName.replace(/\.md$/, ''))
	);

	const fileTypes = new Set<string>();
	collect(quiz, fileTypes);

	const missing = [...fileTypes].filter((fileType) => !available.has(fileType));
	if (missing.length > 0) {
		throw new Error(
			`Missing format markdown files for: ${missing.sort().join(', ')}. ` +
				`Add corresponding .md files in /src/lib/content/formaten/.`
		);
	} else {
		console.log('Check successful: All file types in the quiz have corresponding markdown files.');
	}
}
