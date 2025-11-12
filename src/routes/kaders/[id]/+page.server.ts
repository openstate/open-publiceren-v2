import { getAllContent, getContent } from '$lib/content';

export const entries = () => getAllContent({ type: 'kaders' });

export async function load({ params }) {
	return await getContent({ type: 'kaders', slug: params.id });
}
