<script lang="ts">
	import { page } from '$app/state';
	import { PUBLIC_IS_WIP } from '$env/static/public';
	import logo from '$lib/assets/logo.svg';
	import Button from './button.svelte';

	const items = [
		{ href: '/formaten', label: 'hoe open publiceren', type: 'link' },
		{ href: '/kaders', label: 'waarom open publiceren', type: 'link' },
		{ href: '/#over-ons', label: 'over ons', type: 'link' },
		{ href: '/keuzehulp', label: 'keuzehulp', type: 'cta' }
	] satisfies Array<{ href: string; label: string; type: 'link' | 'cta' }>;
</script>

<a
	href="#content"
	class="absolute top-4 left-4 z-200 rounded-lg bg-amber-300 px-5 py-2.5 text-lg font-medium text-amber-950 not-focus-within:sr-only"
>
	ga naar de inhoud
</a>

{#if PUBLIC_IS_WIP === '1'}
	<div class="border-y border-stone-300 bg-amber-200 py-2 text-center text-balance text-amber-900">
		<strong class="font-semibold">Let op:</strong>
		Deze website is een testversie. Sommige functionaliteiten of teksten kunnen onvolledig of onjuist
		zijn.
	</div>
{/if}

<div class="relative z-100 border-b border-stone-300">
	<header class="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-lg sm:py-7">
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

		<!-- Desktop Navigation -->
		<nav class="flex items-center gap-16 max-lg:hidden">
			{#each items as item}
				{#if item.type === 'link'}
					<a href={item.href} class="rounded text-stone-700 transition-colors hover:text-stone-950">
						{item.label}
					</a>
				{:else}
					<Button href={item.href} variant="primary" size="md">
						{item.label}
					</Button>
				{/if}
			{/each}
		</nav>

		<!-- Mobile Menu -->
		<div class="lg:hidden">
			{#key page.url.pathname}
				<input type="checkbox" id="mobile-menu" class="peer/menu absolute -left-9999" />
			{/key}

			<label
				for="mobile-menu"
				class="relative z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg"
				aria-label="Toggle menu"
			>
				<span class="block h-0.5 w-6 bg-stone-800 transition-all duration-300"></span>
				<span class="block h-0.5 w-6 bg-stone-800 transition-all duration-300"></span>
				<span class="block h-0.5 w-6 bg-stone-800 transition-all duration-300"></span>
			</label>

			<!-- Backdrop -->
			<label
				for="mobile-menu"
				class="pointer-events-none fixed inset-0 top-50 z-40 hidden cursor-pointer bg-stone-900/20 peer-checked/menu:pointer-events-auto peer-checked/menu:block"
			></label>

			<!-- Menu Panel -->
			<nav
				class="absolute top-full right-0 left-0 z-40 mt-px hidden border-b border-stone-300 bg-white peer-checked/menu:block"
			>
				<div class="flex flex-col gap-2 p-6">
					{#each items as item}
						{#if item.type === 'link'}
							<a
								href={item.href}
								class="rounded-lg px-4 py-3 text-lg text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-950"
							>
								{item.label}
							</a>
						{:else}
							<Button href={item.href} variant="primary" size="md" class="mt-4 w-full text-center">
								{item.label}
							</Button>
						{/if}
					{/each}
				</div>
			</nav>
		</div>
	</header>
</div>

<style>
	#mobile-menu:focus-visible + label {
		outline-width: 2px;
	}

	:global(body):has(#mobile-menu:checked) {
		overflow: hidden;
	}
</style>
