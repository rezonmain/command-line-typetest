import Word from '../components/tester/Word';
export function init(commands) {
	const words = newWords(commands);
	const cursor = newCursor(words);
	return {
		terminal: {
			wordElements: getWordElements(words, cursor),
			lines: newLines(),
		},
		stats: newStats(),
		cursor,
		words,
	};
}

export function newWords(commands) {
	const ran = Math.floor(Math.random() * commands.length);
	const command = commands[ran].split(' ');
	const words = command.map((word, i) =>
		i === command.length - 1 ? word + '\n' : word + ' '
	);
	return words;
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
	return {
		word: 0,
		char: 0,
		mistake: false,
		currentLetter: words[0].split('')[0],
	};
}

function getWordElements(words) {
	const wordElements = words.map((word, i) => {
		<Word key={i} id={i} word={word} />;
	});

	return wordElements;
}
