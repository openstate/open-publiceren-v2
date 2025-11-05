<script lang="ts">
	import hero from '$lib/assets/hero.svg';
</script>

<header class="my-12 flex justify-between gap-20">
	<div>
		<h1 class="mt-2 mb-8 text-5xl font-medium text-stone-950">Open Publiceren</h1>
		<p class="mb-8 text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</p>
		<div class="flex items-center gap-4">
			<a
				href="/"
				class="rounded-lg bg-amber-300 px-5 py-3 text-xl font-medium text-amber-950 transition-colors hover:underline"
			>
				start keuzehulp
			</a>
			<a
				href="/"
				class="rounded-lg border border-stone-300 px-5 py-3 text-xl font-medium text-stone-600 transition-colors hover:underline"
			>
				lees meer
			</a>
		</div>
	</div>
	<img src={hero} width={500} alt="" fetchpriority="high" loading="eager" decoding="sync" />
</header>