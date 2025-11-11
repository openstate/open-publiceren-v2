import { getContent } from '$lib/content';

export async function load({ params }) {
	return await getContent({ type: 'kaders', slug: params.id });
}
