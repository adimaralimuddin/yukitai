import { createContext } from '$lib/app/db/trpc/context';
import { router } from '$lib/app/db/trpc/router';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

export const handle: Handle = createTRPCHandle({ router, createContext });
