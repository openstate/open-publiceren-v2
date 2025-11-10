<script lang="ts">
	import '@fontsource-variable/work-sans';
	import '../app.css';

	import favicon32 from '$lib/assets/favicon-32.png';
	import favicon512 from '$lib/assets/favicon-512.png';
	import logo from '$lib/assets/logo.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="icon" type="image/png" sizes="512x512" href={favicon512} />
</svelte:head>

<a
	href="#inhoud"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-amber-300 focus:px-4 focus:py-2 focus:font-medium focus:text-amber-950"
>
	ga naar de inhoud
</a>

<div class="text-stone-800">
	<div class="border-b border-stone-300 bg-white">
		<header class="mx-auto flex max-w-7xl items-center justify-between px-6 sm:py-7 py-6 text-lg">
			<a href="/">
				<img
					src={logo}
					width={144}
					height={48}
					alt="Open Publiceren"
					fetchpriority="high"
					loading="eager"
					decoding="sync"
					class="w-32 sm:w-36"
				/>
			</a>
			<nav class="flex items-center gap-16 max-lg:hidden">
				<a href="/" class="text-stone-700 transition-colors hover:text-stone-900">
					bestandsformaten
				</a>
				<a href="/" class="text-stone-700 transition-colors hover:text-stone-900">
					beleidskaders
				</a>
				<a href="/" class="text-stone-700 transition-colors hover:text-stone-900"> over ons </a>
				<a
					href="/"
					class="rounded-lg bg-amber-300 px-5 py-2 font-medium text-amber-950 transition-colors hover:bg-amber-400"
				>
					keuzehulp
				</a>
			</nav>
		</header>
	</div>
	<main id="inhoud" class="mx-auto max-w-7xl p-6">
		{@render children?.()}
	</main>
</div>
