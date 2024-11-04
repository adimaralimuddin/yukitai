import { json } from '@sveltejs/kit';
import { getXataClient, XataClient } from '../../../xata';

export const GET = async () => {
	const xata = getXataClient();
	// const xata = new XataClient({
	// 	apiKey: process.env.XATA_API_KEY,
	// 	branch: process.env.XATA_BRANCH,
	// 	databaseURL: process.env.XATA_DATABASE
	// });
	const records = await xata.db.posts
		.select(['xata_id', 'labels', 'slug', 'text', 'title', 'views'])
		.getAll();

	console.log(records);

	return json(records);
};
