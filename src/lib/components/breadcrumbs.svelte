<script lang="ts">
	import { page } from '$app/state';
	import Button from './button.svelte';

	function getTitleCase(str: string) {
		if (str.length <= 4) return str.toUpperCase();
		return str
			.split('-')
			.map((w, i) =>
				i === 0 ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w.toLowerCase()
			)
			.join(' ');
	}

	const path = $derived(page.url.pathname.split('/').filter(Boolean));

	const segments = $derived(
		path.map((segment, index) => {
			const isLast = index === path.length - 1;
			return {
				segment,
				path: '/' + path.slice(0, index + 1).join('/'),
				label:
					isLast && page.data?.attributes?.title
						? page.data.attributes.title
						: getTitleCase(segment),
				isLast
			};
		})
	);
</script>

{#if page.url.pathname !== '/'}
	<nav aria-label="Breadcrumb" class="my-4">
		<ol class="flex flex-wrap items-center gap-2">
			<li>
				<Button href="/" variant="tertiary" size="sm">Home</Button>
				{#if segments.length > 0}
					<span class="text-stone-400">&gt;</span>
				{/if}
			</li>
			{#each segments as { path, label, isLast }, index}
				<li>
					<Button
						href={path}
						variant="tertiary"
						size="sm"
						aria-current={isLast ? 'page' : undefined}
					>
						{label}
					</Button>
					{#if index < segments.length - 1}
						<span class="text-stone-400">&gt;</span>
					{/if}
				</li>
			{/each}
		</ol>
	</nav>
{/if}
