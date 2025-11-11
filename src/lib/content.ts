import frontmatter from 'front-matter';
import { marked } from 'marked';

type ContentType = 'kaders' | 'formaten';

export type Attributes = { title: string; description: string };

const glob = import.meta.glob('$lib/content/**/*.md', { query: '?raw', import: 'default' });

export async function getContent({ type, slug }: { type: ContentType; slug: string }) {
	const path = `/src/lib/content/${type}/${slug}.md`;
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
