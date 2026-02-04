import frontmatter from 'front-matter';
import { marked } from 'marked';

export const contentTypes = ['formaten', 'kaders'] as const;

export type ContentType = (typeof contentTypes)[number];

export type Attributes = { title: string; description: string };

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
	return Promise.all(
		Object.keys(glob)
			.filter((path) => path.startsWith(`/src/lib/content/${type}/`))
			.map(async (path) => {
				const markdown = await glob[path]();
				const id = path.split('/').pop()!.replace('.md', '');
				const { attributes } = frontmatter<Attributes>(markdown as string);
				return { ...attributes, id };
			})
	);
}
