export function incrementScore(state) {
	const entries = state.stats.entries;
	const score = state.stats.score + 1;
	// Calculate accuracy
	const accuracy = parseInt((score / entries) * 100);
	return {
		...state,
		stats: {
			...state.stats,
			score,
			accuracy,
		},
	};
}

export function incrementMistakes(state) {
	return {
		...state,
		stats: {
			...state.stats,
			mistakes: state.stats.mistakes + 1,
		},
	};
}

export function incrementEntries(state) {
	return {
		...state,
		stats: {
			...state.stats,
			entries: state.stats.entries + 1,
		},
	};
}
