import Prompt from '../components/tester/Prompt';
import TestLetter from '../components/tester/TestLetter';
import { nanoid } from 'nanoid';
import { getTestLetterElements, newLetters } from './init';
import { commands } from '../data';

export function handleKey({ key }, state, dispatch) {
	if (allowedKeys.includes(key)) {
		const currentLetter = state.cursor.currentLetter;
		key = key === 'Enter' ? '\n' : key;
		currentLetter === key
			? handleCorrectKey(key, dispatch)
			: handleMistake(dispatch);
	}
}

function handleCorrectKey(key, dispatch) {
	const onNewCommand = () => {
		dispatch({ type: 'insertLine' });
	};

	const onNewLetter = () => {
		dispatch({ type: 'incrementLetter' });
	};

	key === '\n' ? onNewCommand() : onNewLetter();
}

function handleMistake(dispatch) {
	dispatch({ type: 'setMistake' });
}

export function testerReducer(state, action) {
	switch (action.type) {
		case 'incrementLetter':
			return incrementLetter(state);
		case 'insertLine':
			return insertLine(state);
		case 'setMistake':
			return setMistake(state);
		default:
			break;
	}
}

function incrementLetter(state) {
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

function insertLine(state) {
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
	const testLetters = newLetters(commands);

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

function setMistake(state) {
	return {
		...state,
		cursor: {
			...state.cursor,
			mistake: true,
		},
	};
}

const allowedKeys = [
	'~',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'+',
	'Q',
	'W',
	'E',
	'R',
	'T',
	'Y',
	'U',
	'I',
	'O',
	'P',
	'{',
	'}',
	'|',
	'A',
	'S',
	'D',
	'F',
	'G',
	'H',
	'J',
	'K',
	'L',
	':',
	'"',
	'Z',
	'X',
	'C',
	'V',
	'B',
	'N',
	'M',
	'<',
	'>',
	'?',
	'`',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'0',
	'-',
	'=',
	'q',
	'w',
	'e',
	'r',
	't',
	'y',
	'u',
	'i',
	'o',
	'p',
	'[',
	']',
	'\\',
	'a',
	's',
	'd',
	'f',
	'g',
	'h',
	'j',
	'k',
	'l',
	';',
	"'",
	'z',
	'x',
	'c',
	'v',
	'b',
	'n',
	'm',
	',',
	'.',
	'/',
	'Enter',
	' ',
];
