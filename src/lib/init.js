export function init(commands) {
	const words = newWords(commands);
	return {
		terminal: {
			words,
			lines: newLines(),
			cursor: newCursor(words),
		},
		stats: newStats(),
	};
}

function newWords(commands) {
	const ran = Math.floor(Math.random() * commands.length);
	return commands[ran].split(' ');
}

function newLines() {
	const date = new Date(Date.now());

	const initialText = [
		`Last login: ${date}.`,
		'Welcome to Command Type Test, where you test your typing chops with terminal commands.',
	];
	const li = initialText.map((command, i) => {
		return <li key={i}>{command}</li>;
	});
	return li;
}

function newStats() {
	return {
		time: 0,
		wpm: 0,
		mistakes: 0,
		accuracy: 0,
		score: 0,
	};
}

function newCursor(words) {
	const currentLetter = words[0].split('')[0];
	return {
		word: 0,
		letter: 0,
		currentLetter,
	};
}
