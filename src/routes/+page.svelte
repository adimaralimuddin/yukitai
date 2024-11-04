<script lang="ts">
	import { page } from '$app/stores';
	import { trpc } from '$lib/app/db/trpc/client';

	let greeting = 'press the button to load data';
	let loading = false;

	const loadData = async () => {
		loading = true;
		greeting = await trpc($page).greeting.query();

		loading = false;
	};
	let subs = {};
</script>

<h6>Loading data in<br /><code>+page.svelte</code></h6>
<h1 class="h1 font-bold text-red-400">Tailwind added</h1>
<button
	class="rounded-xl bg-green-500 p-4"
	on:click={async () => {
		subs = await trpc($page).test.sub.get.query();
		console.log(subs);
	}}>sub</button
>
<a
	href="#load"
	role="button"
	class="secondary"
	aria-busy={loading}
	on:click|preventDefault={loadData}>Load</a
>
<p>{greeting}</p>
