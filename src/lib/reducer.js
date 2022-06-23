import { incrementLetter, insertLine, setMistake } from './letterlogic';
import { changeFontSize, clearLines, showCursor } from './formatting';

import { incrementScore, incrementMistake } from './stats';
import allowedKeys from './allowedkeys';

export function testerReducer(state, action) {
	switch (action.type) {
		case 'incrementLetter':
			return incrementLetter(state);
		case 'insertLine':
			return insertLine(state);
		case 'setMistake':
			return setMistake(state);
		case 'changeFontSize':
			return changeFontSize(state, action.payload);
		case 'clearLines':
			return clearLines(state);
		case 'focused':
			return showCursor(state, action.payload);
		case 'blurry':
			return showCursor(state, action.payload);
		case 'incrementScore':
			return incrementScore(state);
		case 'incrementMistake':
			return incrementMistake(state);
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
