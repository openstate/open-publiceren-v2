<script lang="ts">
	import { cva, type VariantProps } from 'cva';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	const button = cva({
		base: 'inline-block font-medium transition-colors cursor-pointer',
		variants: {
			variant: {
				primary: 'rounded-lg bg-amber-300 text-amber-950 hover:bg-amber-400',
				secondary: 'rounded-lg border ',
				tertiary: 'rounded text-amber-700 hover:text-amber-900'
			},
			size: { md: 'text-lg', lg: 'text-xl' },
			selected: {
				true: '',
				false: ''
			}
		},
		compoundVariants: [
			{ variant: ['primary', 'secondary'], size: 'md', class: 'px-5 py-2.5' },
			{ variant: ['primary', 'secondary'], size: 'lg', class: 'px-6 py-3.5' },
			{
				variant: 'secondary',
				selected: false,
				class: 'bg-white border-stone-300 text-stone-600 hover:bg-stone-100 hover:text-stone-800'
			},
			{
				variant: 'secondary',
				selected: true,
				class: 'bg-stone-800 text-white border-stone-800 hover:bg-stone-900 hover:border-stone-900'
			}
		],
		defaultVariants: {
			variant: 'primary',
			size: 'lg',
			selected: false
		}
	});

	type Props = {
		href?: string;
		class?: string;
		children?: Snippet;
		selected?: boolean;
	} & VariantProps<typeof button> &
		(HTMLAttributes<HTMLButtonElement> | HTMLAttributes<HTMLAnchorElement>);

	let {
		href = undefined,
		variant = 'primary',
		size = 'lg',
		selected = false,
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const classes = $derived(button({ variant, size, selected, className }));

	// eslint-disable-next-line @typescript-eslint/no-explicit-any --- otherwise overly complex type error
	const getRestProps = () => rest as any;
</script>

{#if href}
	<a {href} class={classes} {...getRestProps()}>
		{@render children?.()}
	</a>
{:else}
	<button class={classes} type="button" {...getRestProps()}>
		{@render children?.()}
	</button>
{/if}
