import Prompt from '../components/tester/Prompt';
import { commands } from '../data';
import { newWords } from './init';
export function handleKey({ key }, state, dispatch) {
	if (allowedKeys.includes(key)) {
		const currentLetter = state.terminal.cursor.currentLetter;
		key = key === 'Enter' ? '\n' : key;
		if (currentLetter === key) {
			handleCorrectKey(state, dispatch);
		} else {
			handleMistake(state, dispatch);
		}
	}
}

function handleCorrectKey(state, dispatch) {
	const currentLetter = state.terminal.cursor.currentLetter;
	const onNewCommand = () => {
		dispatch({ type: 'insertLine' });
		dispatch({ type: 'newCommand' });
	};

	currentLetter === ' '
		? dispatch({ type: 'incrementWord' })
		: currentLetter === '\n'
		? onNewCommand()
		: dispatch({ type: 'incrementLetter' });
}

function handleMistake(state, dispatch) {}

export function testerReducer(state, action) {
	let word, char, currentLetter;
	switch (action.type) {
		case 'incrementLetter':
			word = state.terminal.cursor.word;
			char = state.terminal.cursor.char + 1;
			currentLetter = state.terminal.words[word].split('')[char];
			return {
				stats: { ...state.stats },
				terminal: {
					...state.terminal,
					cursor: {
						...state.terminal.cursor,
						char,
						currentLetter,
					},
				},
			};
		case 'incrementWord':
			char = 0;
			word = state.terminal.cursor.word + 1;
			currentLetter = state.terminal.words[word].split('')[char];
			return {
				stats: { ...state.stats },
				terminal: {
					...state.terminal,
					cursor: {
						...state.terminal.cursor,
						char,
						word,
						currentLetter,
					},
				},
			};
			break;
		case 'newCommand':
			const words = newWords(commands);
			return {
				stats: { ...state.stats },
				terminal: {
					...state.terminal,
					words,
					cursor: {
						word: 0,
						char: 0,
						currentLetter: words[0].split('')[0],
					},
				},
			};
		case 'insertLine':
			const li = (
				<li>
					<Prompt />
					{state.terminal.words.map((word) => (
						<span>{word}</span>
					))}
				</li>
			);
			const lines = state.terminal.lines;
			lines.push(li);
			return {
				...state,
				terminal: {
					...state.terminal,
					lines,
				},
			};

			break;
		case 'setMistake':
			break;
		default:
			break;
	}
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
