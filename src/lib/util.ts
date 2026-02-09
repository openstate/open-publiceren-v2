export function getTitleCase(str: string) {
	if (str.length <= 4) return str.toUpperCase();
	return str
		.split('-')
		.map((w, i) =>
			i === 0 ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w.toLowerCase()
		)
		.join(' ');
}
