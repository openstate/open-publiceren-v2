import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import { CORS_ORIGIN } from '$env/static/private';
import { contentTypes, getAllContent } from '$lib/content';

export const GET: RequestHandler = async () => {
	const content = await Promise.all(
		contentTypes.map(async (type) => {
			const items = await getAllContent({ type });
			return items.map((item) => [type, item.id]);
		})
	).then((arrays) => arrays.flat());

	return await sitemap.response({
		origin: CORS_ORIGIN,
		paramValues: {
			'/[type]': contentTypes as unknown as string[],
			'/[type]/[id]': content
		}
	});
};
