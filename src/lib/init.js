import TestLetter from '../components/tester/TestLetter';

export function init(commands) {
	const testLetters = newLetters(commands);
	return {
		terminal: {
			testLetterElements: getTestLetterElements(testLetters),
			lines: newLines(),
		},
		stats: newStats(),
		cursor: newCursor(testLetters),
		testLetters,
	};
}

export function newLetters(commands) {
	const ran = Math.floor(Math.random() * commands.length);
	const command = commands[ran] + '\n';
	const letters = command.split('');
	return letters.map((letter, i) => ({
		letter,
		style: 'untyped',
	}));
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

function newCursor(letters) {
	return {
		char: 0,
		mistake: false,
		currentLetter: letters[0].letter,
	};
}

export function getTestLetterElements(letters) {
	return letters.map((letter, i) => {
		return <TestLetter key={i} letter={letter.letter} style={letter.style} />;
	});
}
