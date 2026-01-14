<script lang="ts">
	import { quiz, type Quiz, type QuizResult } from '$lib/quiz';
	import Button from '$lib/components/button.svelte';

	let history = $state<string[]>([]);

	const traversal = $derived.by(() => {
		let current: Quiz | QuizResult = quiz;
		const questions = [];
		let result: QuizResult | null = null;

		for (let i = 0; i <= history.length; i++) {
			if ('result' in current) {
				result = current;
				break;
			}

			const answer = history[i];
			questions.push({
				index: i,
				title: current.title,
				question: current.question,
				options: Object.keys(current.options),
				selected: answer
			});

			if (answer && current.options[answer]) {
				current = current.options[answer];
			} else {
				break;
			}
		}

		return { questions, result };
	});

	const visibleQuestions = $derived(traversal.questions);
	const result = $derived(traversal.result);

	$effect(() => {
		if (visibleQuestions.length === 0) return;
		const lastIndex = visibleQuestions.length - 1;
		const selector = `[data-option-id='${lastIndex}-0']`;
		const element = document.querySelector(selector) as HTMLElement;
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			element.focus();
		}
	});

	function handleOptionClick(index: number, option: string) {
		history = history.slice(0, index).concat(option);
	}

	function restart() {
		history = [];
	}
</script>

<div class="my-8 lg:my-12">
	<h1 class="mb-8 text-2xl font-medium text-stone-800 lg:text-3xl">Keuzehulp</h1>
	<div class="space-y-6">
		{#each visibleQuestions as question (question.index)}
			<div
				class="overflow-hidden rounded-lg border border-stone-300 bg-white transition-all duration-200"
				id="question-{question.index}"
			>
				<div class="p-6">
					<h2
						class="mb-4 flex items-start justify-between gap-4 text-xl font-medium text-stone-800"
					>
						{question.title}
					</h2>

					<p class="mb-6 text-lg">
						{question.question}
					</p>

					<div class="flex flex-wrap gap-3">
						{#each question.options as option, optionIndex (option)}
							<Button
								data-option-id="{question.index}-{optionIndex}"
								variant="secondary"
								size="md"
								selected={question.selected === option}
								onclick={() => handleOptionClick(question.index, option)}
							>
								{option}
							</Button>
						{/each}
					</div>
				</div>
			</div>
		{/each}

		{#if result}
			<div class="overflow-hidden rounded-lg border border-stone-300 bg-white">
				<div class="p-6">
					<h2 class="mb-4 text-2xl font-medium text-stone-800">Advies</h2>

					<p class="mb-3 text-lg">{result.result}</p>

					{#if result}
						<p class="mb-3 text-lg font-medium">
							Lees verder voor meer informatie over {#if result.fileTypes.length === 0}dit formaat{:else}deze
								formaten{/if}:
						</p>
						<div class="flex gap-3">
							{#each result.fileTypes as fileType}
								<Button href="/formaten/{fileType}" variant="secondary" size="md">
									{fileType.toUpperCase()}
								</Button>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		{/if}
	</div>

	{#if result}
		<div class="mt-6 flex gap-4">
			<Button variant="primary" size="md">Advies delen</Button>
			<Button onclick={restart} variant="secondary" size="md">Opnieuw starten</Button>
		</div>
	{/if}

	{#if import.meta.env.DEV}
		<pre class="mt-8 rounded-lg bg-stone-100 p-4 text-xs">{JSON.stringify(history, null, 2)}</pre>
	{/if}
</div>
