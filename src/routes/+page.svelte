<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import hero from '$lib/assets/hero.svg';
	import video from '$lib/assets/video-placeholder.png';
</script>

<header class="mt-8 flex justify-between gap-20 rounded-xl lg:mt-20 lg:mb-30">
	<div class="max-w-4xl">
		<h1 class="mt-2 mb-8 text-4xl font-medium text-stone-800 sm:text-5xl">Open Publiceren</h1>
		<p class="mb-8 text-lg text-balance lg:text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</p>
		<div class="flex gap-4 text-center max-xs:flex-col xs:items-center">
			<Button href="/">start keuzehulp</Button>
			<Button href="/" variant="secondary">lees meer</Button>
		</div>
	</div>
</header>

<div
	class="my-20 flex items-center justify-between gap-x-20 gap-y-8 rounded-xl border border-stone-300 bg-white px-10 py-8 max-lg:flex-wrap max-lg:justify-center lg:my-24"
>
	<div>
		<h2 class="mb-6 text-2xl font-medium text-stone-800 lg:text-3xl">Keuzehulp</h2>
		<p class="mb-6 text-lg text-balance lg:max-w-2xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt
			ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet
		</p>
		<Button href="/" variant="tertiary">start keuzehulp →</Button>
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

<div class="my-20 lg:my-24">
	<h2 class="mb-6 text-2xl font-medium text-stone-800 lg:text-3xl">Bestandsformaten</h2>
	<p class="mb-6 max-w-4xl text-lg text-balance">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</p>
	<div class="relative -mx-4 mb-6">
		<div class="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-scroll px-4 py-2">
			{#each { length: 10 }}
				<div
					class="w-70 shrink-0 snap-start scroll-mx-4 rounded-lg border border-stone-300 bg-white p-6"
				>
					<h3 class="mb-4 text-xl font-medium">Bestandsformaat</h3>
					<p class="">
						Korte beschrijving van het bestandsformaat. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<Button href="/" variant="tertiary" size="md" class="mt-4">lees meer →</Button>
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

	<Button href="/" size="md">bekijk alle formaten</Button>
</div>

<div class="my-20 lg:my-24">
	<h2 class="mb-6 text-2xl font-medium text-stone-800 lg:text-3xl">Beleidskaders</h2>
	<p class="mb-6 max-w-4xl text-lg text-balance">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</p>
	<div class="relative -mx-4 mb-6">
		<div class="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-scroll px-4 py-2">
			{#each { length: 10 }}
				<div
					class="w-70 shrink-0 snap-start scroll-mx-4 rounded-lg border border-stone-300 bg-white p-6"
				>
					<h3 class="mb-4 text-xl font-medium">Beleidskader</h3>
					<p class="">
						Korte beschrijving van het beleidskader. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<Button href="/" variant="tertiary" size="md" class="mt-4">lees meer →</Button>
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

	<Button href="/" size="md">bekijk alle kaders</Button>
</div>

<div class="my-24 mb-48 flex items-center justify-between gap-16 max-xl:flex-wrap">
	<div>
		<h2 class="mb-6 text-2xl font-medium text-stone-800 lg:text-3xl">Over Open Publiceren</h2>
		<p class="mb-6 max-w-4xl text-lg text-balance">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
			consectetur adipiscing elit.
		</p>
		<Button href="/" variant="secondary" size="md">lees meer</Button>
	</div>
	<img
		src={video}
		width={700}
		alt="Video over Open Publiceren"
		class="rounded-xl border border-white"
	/>
</div>
