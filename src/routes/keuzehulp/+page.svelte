<script lang="ts">
	import { quiz, results } from '$lib/quiz';
	import type { quiz as quizType } from '$lib/quiz';
	import Button from '$lib/components/button.svelte';

	type Quiz = typeof quizType;
	type QuizItem = Quiz[number];
	type State = Parameters<NonNullable<QuizItem['when']>>[0];
	type QuizId = QuizItem['id'];

	type HistoryItem = {
		questionId: QuizId;
		selectedAnswer: string;
	};

	let history = $state<HistoryItem[]>([]);

	const currentState = $derived(
		history.reduce((state, { questionId, selectedAnswer }) => {
			// @ts-expect-error - Dynamic state assignment
			state[questionId] = selectedAnswer;
			return state;
		}, {} as Partial<State>)
	);

	const visibleQuestions = $derived.by(() => {
		const answered = history
			.map((h) => quiz.find((q) => q.id === h.questionId))
			.filter((q): q is QuizItem => !!q && (!q.when || q.when(currentState)));

		const next = quiz.find(
			(q) => !history.some((h) => h.questionId === q.id) && (!q.when || q.when(currentState))
		);

		return next ? [...answered, next] : answered;
	});

	const matchingResult = $derived.by(() => {
		return results.find((result) => result.when(currentState));
	});

	$effect(() => {
		if (visibleQuestions.length === 0) return;
		const selector = "[data-option-id='" + visibleQuestions.at(-1)!.id + ".0']";
		const element = document.querySelector(selector) as HTMLElement;
		element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		element.focus();
	});

	function handleOptionClick(question: QuizItem, answer: string) {
		const index = visibleQuestions.findIndex((q) => q.id === question.id);
		history = history.slice(0, index).concat({ questionId: question.id, selectedAnswer: answer });
	}

	function getSelectedAnswer(questionId: QuizId): string | undefined {
		return history.find((h) => h.questionId === questionId)?.selectedAnswer;
	}

	function restart() {
		history = [];
	}
</script>

<div class="my-8 lg:my-12">
	<h1 class="mb-8 text-2xl font-medium text-stone-800 lg:text-3xl">Keuzehulp</h1>
	<div class="space-y-6">
		{#each visibleQuestions as question (question.id)}
			{@const selectedAnswer = getSelectedAnswer(question.id)}

			<div
				class="overflow-hidden rounded-lg border border-stone-300 bg-white transition-all duration-200"
				id="question-{question.id}"
			>
				<div class="p-6">
					<h2
						class="mb-4 flex items-start justify-between gap-4 text-xl font-medium text-stone-800"
					>
						{question.heading}
					</h2>

					<p class="mb-6 text-lg">
						{question.question}
					</p>

					<div class="flex flex-wrap gap-3">
						{#each question.options as option, i (option)}
							<Button
								data-option-id="{question.id}.{i}"
								variant="secondary"
								size="md"
								selected={selectedAnswer === option}
								onclick={() => handleOptionClick(question, option)}
							>
								{option}
							</Button>
						{/each}
					</div>
				</div>
			</div>
		{/each}

		{#if visibleQuestions.length > 0 && visibleQuestions.every((q) => getSelectedAnswer(q.id))}
			<div class="overflow-hidden rounded-lg border border-stone-300 bg-white">
				<div class="p-6">
					<h2 class="mb-4 text-2xl font-medium text-stone-800">Resultaat</h2>

					{#if matchingResult}
						<div class="mb-6">
							{#each matchingResult.results as text, textIndex (textIndex)}
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								<p class="mb-3 text-lg">{@html text}</p>
							{/each}
						</div>
					{:else}
						<p class="mb-6 text-lg">
							Op basis van je antwoorden kunnen we geen specifiek advies geven. Neem contact op voor
							persoonlijk advies.
						</p>
					{/if}

					<div class="mt-6 flex justify-start">
						<Button onclick={restart} size="md">Opnieuw starten</Button>
					</div>
				</div>
			</div>
		{/if}
	</div>

	{#if import.meta.env.DEV}
		<pre class="mt-8 rounded-lg bg-stone-100 p-4 text-xs">{JSON.stringify(
				currentState,
				null,
				2
			)}</pre>
	{/if}
</div>
