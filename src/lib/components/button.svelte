<script lang="ts">
	import { cva, type VariantProps } from 'cva';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	const button = cva({
		base: 'inline-block font-medium transition-colors',
		variants: {
			variant: {
				primary: 'rounded-lg bg-amber-300 text-amber-950 hover:bg-amber-400',
				secondary:
					'rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100 hover:text-stone-800',
				tertiary: 'rounded text-amber-700 hover:text-amber-900'
			},
			size: { md: 'text-lg', lg: 'text-xl' }
		},
		compoundVariants: [
			{ variant: ['primary', 'secondary'], size: 'md', class: 'px-5 py-2.5' },
			{ variant: ['primary', 'secondary'], size: 'lg', class: 'px-6 py-3.5' }
		],
		defaultVariants: {
			variant: 'primary',
			size: 'lg'
		}
	});

	type Props = { href?: string; class?: string; children?: Snippet } & VariantProps<typeof button> &
		(HTMLAttributes<HTMLButtonElement> | HTMLAttributes<HTMLAnchorElement>);

	let {
		href = undefined,
		variant = 'primary',
		size = 'lg',
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const classes = $derived(button({ variant, size, className }));
</script>

{#if href}
	<a {href} class={classes} {...rest as any}>
		{@render children?.()}
	</a>
{:else}
	<button class={classes} type="button" {...rest as any}>
		{@render children?.()}
	</button>
{/if}
