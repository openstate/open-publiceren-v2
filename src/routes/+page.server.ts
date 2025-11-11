import { getAllContent } from '$lib/content';

export async function load() {
	return {
		kaders: await getAllContent({ type: 'kaders' }),
		formaten: await getAllContent({ type: 'formaten' })
	};
}
