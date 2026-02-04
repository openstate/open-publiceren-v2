<script lang="ts">
	import '@fontsource-variable/work-sans';
	import '../app.css';

	import favicon32 from '$lib/assets/favicon-32.png';
	import favicon512 from '$lib/assets/favicon-512.png';
	import NavBar from '$lib/components/nav-bar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="icon" type="image/png" sizes="512x512" href={favicon512} />
</svelte:head>

<div>
	<NavBar />

	<main id="inhoud" class="bg-stone-50">
		<div class="mx-auto max-w-7xl p-6">
			<Breadcrumbs />

			<div id="content">
				{@render children?.()}
			</div>
		</div>
	</main>

	<Footer />
</div>
