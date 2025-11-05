<script lang="ts">
	import '@fontsource-variable/work-sans';
	import '../app.css';

	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="text-stone-800">
	<div class="border-b border-stone-300">
		<header class="mx-auto flex max-w-7xl items-center justify-between px-4 pt-8 pb-7 text-lg">
			<a href="/">
				<img
					src={logo}
					width={150}
					height={50}
					alt="Open Publiceren"
					fetchpriority="high"
					loading="eager"
					decoding="sync"
				/>
			</a>
			<nav class="flex items-center gap-16">
				<a href="/" class="text-stone-800 transition-colors hover:underline"> bestandsformaten </a>
				<a href="/" class="text-stone-800 transition-colors hover:underline"> beleidskaders </a>
				<a href="/" class="text-stone-800 transition-colors hover:underline"> over ons </a>
				<a
					href="/"
					class="rounded-lg bg-amber-300 px-5 py-2 font-medium text-amber-950 transition-colors hover:underline"
				>
					keuzehulp
				</a>
			</nav>
		</header>
	</div>
	<main class="mx-auto max-w-7xl p-4">
		{@render children?.()}
	</main>
</div>
