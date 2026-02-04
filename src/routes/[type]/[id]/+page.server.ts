import { error } from '@sveltejs/kit';
import { getAllContent, getContent, isContentType, contentTypes } from '$lib/content';

export const entries = async () => {
	const [formaten, kaders] = await Promise.all(
		contentTypes.map((type) => getAllContent({ type }))
	);

	return [
		...formaten.map(({ id }) => ({ type: 'formaten', id })),
		...kaders.map(({ id }) => ({ type: 'kaders', id }))
	];
};

export async function load({ params }) {
	if (!isContentType(params.type)) {
		throw error(404, 'Not found');
	}

	return await getContent(params);
}