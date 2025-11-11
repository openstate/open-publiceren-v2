<script lang="ts">
	import logoForumStandaardisatie from '$lib/assets/logo-forum-standaardisatie.svg';
	import logoOpenState from '$lib/assets/logo-open-state.svg';
</script>

<footer class="border-t border-stone-300 text-stone-600">
	<div class="mx-auto max-w-7xl px-6 py-12">
		<p class="mb-4">Open Publiceren is een initiatief van</p>
		<div class="flex items-start gap-8">
			<a href="https://forumstandaardisatie.nl" target="_blank" rel="noopener noreferrer">
				<img
					src={logoForumStandaardisatie}
					width={120}
					alt="Forum Standaardisatie"
					class="opacity-70 grayscale transition hover:opacity-100 hover:filter-none"
				/>
			</a>
			<a href="https://openstate.eu/nl" target="_blank" rel="noopener noreferrer">
				<img
					src={logoOpenState}
					width={200}
					alt="Open State"
					class="opacity-70 grayscale transition hover:opacity-100 hover:filter-none"
				/>
			</a>
		</div>
	</div>
</footer>
