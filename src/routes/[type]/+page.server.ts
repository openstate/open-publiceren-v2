import { error } from '@sveltejs/kit';
import { getAllContent, isContentType } from '$lib/content';

export async function load({ params }) {
	if (!isContentType(params.type)) {
		throw error(404, 'Not found');
	}

	const items = await getAllContent({ type: params.type });
	return { items, type: params.type };
}
