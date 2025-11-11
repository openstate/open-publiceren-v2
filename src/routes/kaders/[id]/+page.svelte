<script lang="ts">
	let { data } = $props();
</script>

<header class="my-8 flex justify-between gap-20 rounded-xl lg:my-12">
	<div class="max-w-4xl">
		<h1 class="mt-2 mb-8 text-3xl font-semibold text-stone-800 sm:text-4xl">
			{data.attributes.title}
		</h1>
		<p class="mb-8 text-lg text-balance lg:text-xl">
			{data.attributes.description}
		</p>
	</div>
</header>
