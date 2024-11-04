import { getXataClient, XataClient } from '../xata';

import { XATA_API_KEY, XATA_BRANCH, XATA_DATABASE } from '$env/static/private';

const xata = new XataClient({
	apiKey: XATA_API_KEY,
	branch: XATA_BRANCH,
	databaseURL: XATA_DATABASE
});

// const xata = getXataClient();
export const load = async () => {
	// const xata = getXataClient();

	const records = await xata.db.posts
		.select(['xata_id', 'labels', 'slug', 'text', 'title', 'views'])
		.getAll();

	console.log(records);
	return { records };
};
