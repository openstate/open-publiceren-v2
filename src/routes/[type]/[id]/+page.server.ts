import { error } from '@sveltejs/kit';
import { getAllContent, getContent } from '$lib/content';

const contentTypes = ['formaten', 'kaders'] as const;

type ContentType = (typeof contentTypes)[number];

const isContentType = (value: string): value is ContentType =>
	contentTypes.includes(value as ContentType);

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

	return await getContent({ type: params.type, slug: params.id });
}