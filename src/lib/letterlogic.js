import Prompt from '../components/tester/Prompt';
import TestLetter from '../components/tester/TestLetter';
import { nanoid } from 'nanoid';
import { getTestLetterElements, newLetters } from './init';

export function incrementLetter(state) {
	let char = state.cursor.char;
	const mistake = state.cursor.mistake;
	const style = mistake ? 'mistake' : 'typed';

	// Update TestLetter style
	const testLetters = state.testLetters;
	testLetters[char].style = style;

	// Update cursor char && current letter
	char = state.cursor.char + 1;
	const currentLetter = state.testLetters[char].letter;

	// Get updated elements
	const el = testLetters.map((letter, i) => {
		return (
			<TestLetter
				key={i}
				letter={letter.letter}
				style={char === i ? letter.style + ' cursor' : letter.style}
			/>
		);
	});

	return {
		...state,
		terminal: {
			...state.terminal,
			testLetterElements: el,
		},
		testLetters,
		cursor: {
			mistake: false,
			char,
			currentLetter,
		},
	};
}

export function insertLine(state) {
	// Get current elements to add to history
	const newLine = state.terminal.testLetterElements;
	// Remove the last new line char
	newLine.pop();

	// Append the prompt
	newLine.unshift(<Prompt key={nanoid()} />);
	const lines = state.terminal.lines;

	// Wrap in li and add to lines elements array
	lines.push(
		<li className={'faded'} key={lines.length}>
			{newLine}
		</li>
	);

	// Get a new command
	const testLetters = newLetters();

	// Reset cursor
	const cursor = {
		char: 0,
		mistake: false,
		currentLetter: testLetters[0].letter,
	};

	// Get new TestLetter elements
	const testLetterElements = getTestLetterElements(testLetters);

	return {
		...state,
		terminal: {
			testLetterElements,
			lines,
		},
		cursor,
		testLetters,
	};
}

export function setMistake(state) {
	return {
		...state,
		cursor: {
			...state.cursor,
			mistake: true,
		},
	};
}
