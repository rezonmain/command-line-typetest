import TestLetter from '../components/tester/TestLetter';

export function changeFontSize(state, type) {
	let fontSize = parseFloat(state.terminal.fontSize);
	switch (type) {
		case 'increment':
			fontSize += 0.1;
			break;

		case 'decrement':
			fontSize -= 0.1;
			break;
		case 'reset':
			fontSize = 1;
			break;
		default:
			break;
	}
	fontSize += 'rem';

	return {
		...state,
		terminal: {
			...state.terminal,
			fontSize,
		},
	};
}

export function clearLines(state) {
	return {
		...state,
		terminal: {
			...state.terminal,
			lines: [],
		},
	};
}

export function showCursor(state, show) {
	const char = state.cursor.char;
	const testLetters = state.testLetters.map((letter, i) => {
		let style;
		if (i === char) {
			style = show ? 'untyped cursor' : 'untyped';
		} else {
			style = letter.style;
		}
		return {
			letter: letter.letter,
			style,
		};
	});

	const el = testLetters.map((letter, i) => {
		return <TestLetter key={i} letter={letter.letter} style={letter.style} />;
	});

	return {
		...state,
		terminal: {
			...state.terminal,
			testLetterElements: el,
		},
		testLetters,
	};
}
