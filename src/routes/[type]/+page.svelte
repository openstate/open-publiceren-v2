<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import Credits from '$lib/components/credits.svelte';
	import { getTitleCase } from '$lib/util';

	let { data } = $props();
</script>

<div class="my-16">
	<h1 class="mb-6 text-3xl font-semibold text-stone-800 sm:text-4xl">{getTitleCase(data.type)}</h1>

	<div class="mb-12 max-w-4xl space-y-4 text-lg text-balance">
		{#if data.type === 'formaten'}
			<p>
				Welke bestandsformaten kan ik gebruiken bij het open publiceren? En welk bestandsformaat
				past het beste bij mijn soort informatie? Bekijk het overzicht van bestandsformaten.
			</p>
		{:else if data.type === 'kaders'}
			<p>
				Aan welke wet- en regelgeving moet ik voldoen bij het open publiceren van
				overheidsinformatie en -data? Bekijk het overzicht van juridische kaders.
			</p>
		{:else if data.type === 'over-ons'}
			<p>
				Open Publiceren is een praktische keuzehulp bij het kiezen van het juiste bestandsformaat.
				Open Publiceren volgt huidige wet- en regelgeving.
			</p>
			<p>
				<Credits />
			</p>
		{/if}
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:gap-8">
		{#each data.items as item}
			<div class="flex flex-col rounded-lg border border-stone-300 bg-white p-6">
				<h2 class="mb-4 text-xl font-medium text-stone-800">{item.title}</h2>
				<p class="mb-6 grow text-stone-700">{item.description}</p>
				{#if item.link !== false}
					<Button href="/{data.type}/{item.id}" variant="tertiary" size="md" class="mt-4">
						lees meer ➞
					</Button>
				{/if}
			</div>
		{/each}
	</div>
</div>
