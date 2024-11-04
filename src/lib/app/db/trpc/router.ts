import { initTRPC } from '@trpc/server';
import { getXataClient } from '../../../../xata';
import type { Context } from './context';
export const t = initTRPC.context<Context>().create();
const xata = getXataClient();

export const router = t.router({
	greeting: t.procedure.query(async () => {
		// await delay(500); // 👈 simulate an expensive operation
		// const course = await prisma.course.findFirst();
		return JSON.stringify('so what!');
	}),
	test: t.router({
		sub: t.router({
			get: t.procedure.query(async (x) => {
				const records = await xata.db.posts
					.select(['xata_id', 'labels', 'slug', 'text', 'title', 'views'])
					.getAll();

				console.log(records);
				return { records };
			})
		})
	})
});

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;
