import frontmatter from 'front-matter';
import { marked } from 'marked';

export const contentTypes = ['formaten', 'kaders'] as const;

export type ContentType = (typeof contentTypes)[number];

export type Attributes = { title: string; description: string; sorting_score?: number };

export const isContentType = (value: string): value is ContentType =>
	contentTypes.includes(value as ContentType);

const glob = import.meta.glob('$lib/content/**/*.md', { query: '?raw', import: 'default' });
console.log(glob)

export async function getContent({ type, id }: { type: ContentType; id: string }) {
	const path = `/src/lib/content/${type}/${id}.md`;
	const markdown = await glob[path]();
	const { attributes, body } = frontmatter<Attributes>(markdown as string);
	return { attributes, body: await marked.parse(body) };
}

export async function getAllContent({ type }: { type: ContentType }) {
	const items = await Promise.all(
		Object.keys(glob)
			.filter((path) => path.startsWith(`/src/lib/content/${type}/`))
			.map(async (path) => {
				const markdown = await glob[path]();
				const id = path.split('/').pop()!.replace('.md', '');
				const { attributes } = frontmatter<Attributes>(markdown as string);
				return { ...attributes, id };
			})
	);

	// Sort by sorting_score in descending order (higher score = earlier)
	return items.sort((a, b) => (b.sorting_score ?? 0) - (a.sorting_score ?? 0));
}
