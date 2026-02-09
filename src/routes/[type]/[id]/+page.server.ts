import { error } from '@sveltejs/kit';
import { getAllContent, getContent, isContentType, contentTypes } from '$lib/content';
import type { PageServerLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return Promise.all(
		contentTypes.map(async (type) => {
			const items = await getAllContent({ type });
			return items.map((item) => ({ type, id: item.id }));
		})
	).then((arrays) => arrays.flat());
};

export const load: PageServerLoad = async ({ params }) => {
	if (isContentType(params.type)) {
		const content = await getContent({ type: params.type, id: params.id });
		if (content && content.attributes.link !== false) return content;
	}

	throw error(404, 'Not found');
};
