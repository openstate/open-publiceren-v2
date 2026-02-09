<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import hero from '$lib/assets/hero.svg';
	import video from '$lib/assets/video.webm';
	import videoPlaceholder from '$lib/assets/video-placeholder.png';
	import videoCaptions from '$lib/assets/video-captions.vtt';
	import Credits from '$lib/components/credits.svelte';

	let { data } = $props();
</script>

<header class="mt-8 flex justify-between gap-20 rounded-xl lg:mt-20 lg:mb-30">
	<div class="max-w-4xl">
		<h1 class="mt-2 mb-8 text-4xl font-semibold text-stone-800 sm:text-5xl">Open Publiceren</h1>
		<p class="mb-8 text-lg text-balance lg:text-xl">
			De overheid publiceert dagelijks grote hoeveelheden informatie. Welk bestandsformaat past bij
			welk soort informatie? En wat zegt relevante wet- en regelgeving hierover? Open Publiceren is
			een praktische keuzehulp bij het kiezen van het juiste bestandsformaat.
		</p>
		<div class="flex gap-4 text-center max-xs:flex-col xs:items-center">
			<Button href="/keuzehulp">start keuzehulp</Button>
			<Button href="/over-ons" variant="secondary">lees meer</Button>
		</div>
	</div>
</header>

<div
	class="my-20 flex items-center justify-between gap-x-20 gap-y-8 rounded-xl border border-stone-300 bg-white px-10 py-8 max-lg:flex-wrap max-lg:justify-center lg:my-24"
>
	<div>
		<h2 class="mb-6 text-2xl font-medium text-stone-800 lg:text-3xl">Keuzehulp</h2>
		<p class="mb-6 text-lg text-balance lg:max-w-2xl">
			Bepaal welke bestandsformaten nodig zijn voor het open publiceren van overheidsinformatie en
			-data. Via een serie korte vragen ontvang je advies welk bestandsformaat het meest geschikt is
			om informatie of data te publiceren. Deze adviezen sluiten aan op relevante wet- en
			regelgeving. Zo wordt informatie uitwisselbaar, toegankelijk en herbruikbaar. Zowel voor mens
			als machine.
		</p>
		<Button href="/keuzehulp" variant="tertiary">start keuzehulp ➞</Button>
	</div>
	<img
		src={hero}
		width={400}
		alt=""
		fetchpriority="high"
		loading="eager"
		decoding="sync"
		class="mx-4 mt-2 max-xl:h-56"
	/>
</div>

<div class="my-20 lg:my-28">
	<h2 id="hoe-het-kan" class="mb-6 text-2xl font-medium text-stone-800 lg:text-3xl">
		Hoe kan ik Open Publiceren?
	</h2>
	<p class="mb-6 max-w-4xl text-lg text-balance">
		Welke bestandsformaten kan ik gebruiken bij het open publiceren? En welk bestandsformaat past
		het beste bij mijn soort informatie? Bekijk het overzicht van bestandsformaten.
	</p>
	<div class="relative -mx-4 mb-6">
		<div class="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-scroll px-4 py-2">
			{#each data.formaten as formaat (formaat.id)}
				<div
					class="min-h-65 w-74 shrink-0 snap-start scroll-mx-4 rounded-lg border border-stone-300 bg-white p-6"
				>
					<div class="flex h-full flex-col">
						<h3 class="mb-4 text-xl font-medium">{formaat.title}</h3>
						<p class="grow">{formaat.description}</p>
						<Button href="/formaten/{formaat.id}" variant="tertiary" size="md" class="mt-4">
							lees meer ➞
						</Button>
					</div>
				</div>
			{/each}
		</div>
		<!-- Gradient overlays -->
		<div
			class="pointer-events-none absolute top-0 left-0 h-full w-4 bg-linear-to-r from-stone-50 to-transparent"
		></div>
		<div
			class="pointer-events-none absolute top-0 right-0 h-full w-4 bg-linear-to-l from-stone-50 to-transparent"
		></div>
	</div>

	<Button href="/formaten" size="md">bekijk alle formaten</Button>
</div>

<div class="my-20 lg:my-28">
	<h2 id="waarom-het-moet" class="mb-6 text-2xl font-medium text-stone-800 lg:text-3xl">
		Waarom moet ik Open Publiceren?
	</h2>
	<p class="mb-6 max-w-4xl text-lg text-balance">
		Aan welke wet- en regelgeving moet ik voldoen bij het open publiceren van overheidsinformatie en
		-data? Bekijk het overzicht van juridische kaders.
	</p>
	<div class="relative -mx-4 mb-6">
		<div class="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-scroll px-4 py-2">
			{#each data.kaders as kader (kader.id)}
				<div
					class="w-74 shrink-0 snap-start scroll-mx-4 rounded-lg border border-stone-300 bg-white p-6"
				>
					<div class="flex h-full flex-col">
						<h3 class="mb-4 text-xl font-medium">{kader.title}</h3>
						<p class="grow">{kader.description}</p>
						<Button href="/kaders/{kader.id}" variant="tertiary" size="md" class="mt-4">
							lees meer ➞
						</Button>
					</div>
				</div>
			{/each}
		</div>
		<!-- Gradient overlays -->
		<div
			class="pointer-events-none absolute top-0 left-0 h-full w-4 bg-linear-to-r from-stone-50 to-transparent"
		></div>
		<div
			class="pointer-events-none absolute top-0 right-0 h-full w-4 bg-linear-to-l from-stone-50 to-transparent"
		></div>
	</div>

	<Button href="/kaders" size="md">bekijk alle kaders</Button>
</div>

<div class="my-20 flex items-center justify-between gap-16 max-xl:flex-wrap lg:my-28">
	<div>
		<h2 id="over-ons" class="mb-6 text-2xl font-medium text-stone-800 lg:text-3xl">
			Over Open Publiceren
		</h2>
		<p class="mb-6 max-w-4xl text-lg text-balance">
			Open Publiceren draagt bij aan een open en toegankelijke informatievoorziening van de
			overheid. <Credits />
		</p>
		<Button href="/over-ons" variant="secondary">lees meer</Button>
	</div>
	<video controls poster={videoPlaceholder} width={900} class="overflow-hidden rounded-xl">
		<source src={video} type="video/webm" />
		<track default kind="captions" src={videoCaptions} srclang="nl" label="Nederlands" />
	</video>
</div>

<style>
	video::cue {
		font-size: 18px;
		line-height: 1.2;
		color: white;
		background: black;
	}
</style>
