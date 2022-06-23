import { incrementLetter, insertLine, setMistake } from './letterlogic';
import { changeFontSize, clearLines, showCursor } from './formatting';

import { incrementScore, incrementMistakes, incrementEntries } from './stats';
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
		case 'incrementEntries':
			return incrementEntries(state);
		case 'incrementScore':
			return incrementScore(state);
		case 'incrementMistakes':
			return incrementMistakes(state);
		default:
			return { ...state };
	}
}

export function handleKey(key, state, dispatch) {
	if (allowedKeys.includes(key)) {
		dispatch({ type: 'incrementEntries' });
		const currentLetter = state.cursor.currentLetter;
		key = key === 'Enter' ? '\n' : key;
		currentLetter === key
			? handleCorrectKey(key, dispatch)
			: handleMistake(dispatch);
	}
}

function handleCorrectKey(key, dispatch) {
	const onNewCommand = () => {
		dispatch({ type: 'setUpdateStats' });
		dispatch({ type: 'insertLine' });
	};

	const onNewLetter = () => {
		dispatch({ type: 'incrementLetter' });
	};

	dispatch({ type: 'incrementScore' });
	key === '\n' ? onNewCommand() : onNewLetter();
}

function handleMistake(dispatch) {
	dispatch({ type: 'incrementMistakes' });
	dispatch({ type: 'setMistake' });
}
