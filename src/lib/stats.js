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
		lastAt: Date.now(),
	};
}

export function addSeconds(state) {
	// Increment timer if user has typed someting in the last second
	const delta = deltaSeconds(Date.now(), state.lastAt);
	const time = state.stats.time;
	const newTime = delta <= 1 ? time + 1 : time;

	// Calculate wpm
	const score = state.stats.score;
	const wpm = parseInt(score / 5 / (time / 60));

	return {
		...state,
		stats: {
			...state.stats,
			time: newTime,
			wpm,
		},
	};
}

// Difference in seconds of a timestamp
function deltaSeconds(t1, t2) {
	return (t1 - t2) / 1000;
}
