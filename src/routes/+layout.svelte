<script lang="ts">
	import '@fontsource-variable/work-sans';
	import '../app.css';

	import favicon32 from '$lib/assets/favicon-32.png';
	import favicon512 from '$lib/assets/favicon-512.png';
	import NavBar from '$lib/components/nav-bar.svelte';
	import logoForumStandaardisatie from '$lib/assets/logo-forum-standaardisatie.svg';
	import logoOpenState from '$lib/assets/logo-open-state.svg';

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
			{@render children?.()}
		</div>
	</main>

	<footer class="border-t border-stone-300 text-stone-600">
		<div class="mx-auto max-w-7xl px-6 py-12">
			<p class="mb-4">Open Publiceren is een initiatief van</p>
			<div class="flex items-start gap-8">
				<a href="https://forumstandaardisatie.nl" target="_blank" rel="noopener noreferrer">
					<img
						src={logoForumStandaardisatie}
						width={120}
						alt="Forum Standaardisatie"
						class="opacity-70 grayscale hover:opacity-100 hover:filter-none transition"
					/>
				</a>
				<a href="https://openstate.eu/nl" target="_blank" rel="noopener noreferrer">
					<img
						src={logoOpenState}
						width={200}
						alt="Open State"
						class="opacity-70 grayscale hover:opacity-100 hover:filter-none transition"
					/>
				</a>
			</div>
		</div>
	</footer>
</div>
