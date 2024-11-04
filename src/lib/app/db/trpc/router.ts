import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { getXataClient, XataClient } from '../../../../xata';
import prisma from '../prisma.server';
import type { Context } from './context';
export const t = initTRPC.context<Context>().create();

// Generated with CLI
// import { getXataClient } from "./xata";

const xata = new XataClient({
	apiKey: process.env.XATA_API_KEY,
	branch: process.env.XATA_BRANCH
});

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
				return JSON.stringify(records);
			})
		})
	})
});

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;
