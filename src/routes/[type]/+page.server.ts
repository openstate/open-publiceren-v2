import { error } from '@sveltejs/kit';
import { contentTypes, getAllContent, isContentType } from '$lib/content';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => contentTypes.map((type) => ({ type }));

export const load: PageServerLoad = async ({ params }) => {
	if (!isContentType(params.type)) {
		throw error(404, 'Not found');
	}

	const items = await getAllContent({ type: params.type, includeUnlinked: true });
	return { items, type: params.type };
};
