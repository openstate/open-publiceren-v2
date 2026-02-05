<script lang="ts">
	import Button from '$lib/components/button.svelte';

	let { data } = $props();

	const title = $derived(data.type === 'formaten' ? 'Formaten' : 'Kaders')
</script>

<div class="my-16">
	<h1 class="mb-6 text-3xl font-semibold text-stone-800 sm:text-4xl">{title}</h1>
	<p class="mb-12 max-w-4xl text-lg text-balance">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</p>

	<div class="grid gap-6 lg:gap-8" style="grid-template-columns: repeat(2, 1fr);">
		{#each data.items as item}
			<div class="flex flex-col rounded-lg border border-stone-300 bg-white p-6">
				<h2 class="mb-4 text-xl font-medium text-stone-800">{item.title}</h2>
				<p class="mb-6 grow text-stone-700">{item.description}</p>
				<Button href="/{data.type}/{item.id}" variant="tertiary" size="md" class="mt-4">lees meer →</Button>
			</div>
		{/each}
	</div>
</div>
