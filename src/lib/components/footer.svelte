<script lang="ts">
	import logoForumStandaardisatie from '$lib/assets/logo-forum-standaardisatie.svg';
	import logoOpenState from '$lib/assets/logo-open-state.svg';
</script>

<footer class="border-t border-stone-300 text-stone-600">
	<div class="mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-12 px-6 py-12">
		<div>
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
		<div >
			<p class="mb-1 font-medium text-stone-800">Contact</p>
			<a href="mailto:info@forumstandaardisatie.nl" class="underline hover:text-stone-900">
				info@forumstandaardisatie.nl
			</a>
		</div>
	</div>
</footer>
