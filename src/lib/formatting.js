import TestLetter from '../components/tester/TestLetter';
export function incrementFontSize(state) {
	let fontSize = parseFloat(state.terminal.fontSize);
	fontSize += 0.1;
	fontSize += 'rem';

	return {
		...state,
		terminal: {
			...state.terminal,
			fontSize,
		},
	};
}

export function decrementFontSize(state) {
	let fontSize = parseFloat(state.terminal.fontSize);
	fontSize -= 0.1;
	fontSize += 'rem';

	return {
		...state,
		terminal: {
			...state.terminal,
			fontSize,
		},
	};
}

export function resetFontSize(state) {
	return {
		...state,
		terminal: {
			...state.terminal,
			fontSize: '1rem',
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
