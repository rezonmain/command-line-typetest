import Prompt from '../components/tester/Prompt';
import Word from '../components/tester/Word';
import { commands } from '../data';
import { newWords } from './init';

export function handleKey({ key }, state, dispatch) {
	if (allowedKeys.includes(key)) {
		const currentLetter = state.cursor.currentLetter;
		key = key === 'Enter' ? '\n' : key;
		currentLetter === key
			? handleCorrectKey(state, dispatch)
			: handleMistake(state, dispatch);
	}
}

function handleCorrectKey(state, dispatch) {
	const currentLetter = state.terminal.cursor.currentLetter;
	const onNewCommand = () => {
		dispatch({ type: 'insertLine' });
		dispatch({ type: 'newCommand' });
	};

	const onNewLetter = () => {
		dispatch({ type: 'incrementLetter' });
	};

	const onNewWord = () => {};

	currentLetter === ' '
		? onNewWord()
		: currentLetter === '\n'
		? onNewCommand()
		: onNewLetter();
}

function handleMistake(state, dispatch) {}

export function testerReducer(state, action) {
	switch (action.type) {
		case 'incrementLetter':
			return {
				// style letter accordinly
				// increment cursor position
			};
		case 'incrementWord':
			return {};
		case 'newCommand':
			return {};
		case 'insertLine':
			return {};
		case 'setMistake':
			break;
		default:
			break;
	}
}

function incrementLetter(state) {
	const char = state.cursor.char;
	const cWord = state.cursor.word;
	const mistake = state.cursor.mistake;
	const wordElements = state.words.map((word, i) => {
		<Word
			key={i}
			id={i}
			charToStyle={cWord === i ? char : false}
			mistake={mistake}
		/>;
	});
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
