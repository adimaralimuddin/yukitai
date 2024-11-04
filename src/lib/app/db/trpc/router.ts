import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import prisma from '../prisma.server';
import type { Context } from './context';
export const t = initTRPC.context<Context>().create();

export const router = t.router({
	greeting: t.procedure.query(async () => {
		// await delay(500); // 👈 simulate an expensive operation
		// const course = await prisma.course.findFirst();
		return JSON.stringify('so what!');
	}),
	test: t.router({
		sub: t.router({
			get: t.procedure.input(z.object({ name: z.string(), age: z.number() })).mutation((x) => {
				return JSON.stringify({ input: x.input });
			})
		})
	})
});

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;
