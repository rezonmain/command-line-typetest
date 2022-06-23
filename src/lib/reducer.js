import { incrementLetter, insertLine, setMistake } from './letterlogic';
import {
	incrementFontSize,
	decrementFontSize,
	resetFontSize,
	clearLines,
	showCursor,
} from './formatting';
import allowedKeys from './allowedkeys';

export function testerReducer(state, action) {
	switch (action.type) {
		case 'incrementLetter':
			return incrementLetter(state);
		case 'insertLine':
			return insertLine(state);
		case 'setMistake':
			return setMistake(state);
		case 'increment':
			return incrementFontSize(state);
		case 'decrement':
			return decrementFontSize(state);
		case 'reset':
			return resetFontSize(state);
		case 'clearLines':
			return clearLines(state);
		case 'focused':
			return showCursor(state, action.payload);
		case 'blurry':
			return showCursor(state, action.payload);
		default:
			break;
	}
}

export function handleKey(key, state, dispatch) {
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
