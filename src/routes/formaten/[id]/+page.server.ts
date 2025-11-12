import { getAllContent, getContent } from '$lib/content';

export const entries = () => getAllContent({ type: 'formaten' });

export async function load({ params }) {
	return await getContent({ type: 'formaten', slug: params.id });
}
