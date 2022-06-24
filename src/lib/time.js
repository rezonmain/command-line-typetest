function deltaSeconds(t1, t2) {
	return (t1 - t2) / 1000;
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
