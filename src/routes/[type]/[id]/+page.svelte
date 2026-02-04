<script lang="ts">
	let { data } = $props();
</script>

<article class="my-16">
	<h1 class="mb-8 text-3xl font-semibold text-stone-800 sm:text-4xl">
		{data.attributes.title}
	</h1>

	<div class="prose prose-neutral max-w-[80ch]">
		{@html data.body}
	</div>
</article>