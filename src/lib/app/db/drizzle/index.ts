import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
// if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
const client = postgres(env.DATABASE_URL);
export const db = drizzle(client);

// =================================
// // Make sure to install the 'postgres' package
// import { drizzle } from 'drizzle-orm/postgres-js';
// import postgres from 'postgres';

// const queryClient = postgres(process.env.DATABASE_URL);
// const db = drizzle({ client: queryClient });

// const result = await db.execute('select 1');
