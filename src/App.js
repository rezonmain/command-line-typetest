import { useReducer, useState } from 'react';
import { useKey } from 'react-use';
import { isMobile } from 'react-device-detect';
import Stats from './components/layout/stats/Stats';
import Terminal from './components/layout/terminal/Terminal';
import { handleKey, testerReducer } from './lib/reducer';
import { init } from './lib/init';
import './App.css';

/* TODO: 
[X] cursor
[x] letter formatting, 
[ ] stat updating
[ ] stat dropdown for mobile
[ ] add actual commands and not lorem ipsum
[x] give functionality to stat control panel
[x] add fontsize modifier in control panel
 */

export default function App() {
	const [state, dispatch] = useReducer(testerReducer, init());
	const [focus, setFocus] = useState();
	const [inputValue, setInputValue] = useState('');

	// Only triggers on mobile
	function handleChange(e) {
		if (isMobile) {
			e.preventDefault();
			handleKey(e.target.value, state, dispatch);
			setInputValue('');
		}
	}

	// Only triggers on desktop
	useKey([], (e) => focus && handleKey(e.key, state, dispatch));

	// Show the cursor if terminal is focused
	function handleFocus(type) {
		if (!isMobile) {
			const show = type === 'focused' ? true : false;
			dispatch({ type, payload: show });
			// Set focus flag to accept input
			setFocus(show);
		}
	}

	function clearConsole() {
		dispatch({ type: 'clearLines' });
	}

	function changeFontSize(payload) {
		dispatch({ type: 'changeFontSize', payload });
	}

	return (
		<main>
			<Stats
				stats={state.stats}
				fontChange={changeFontSize}
				clearConsole={clearConsole}
			/>
			<Terminal terminal={state.terminal} focus={handleFocus} />

			{/* textarea is used to hijack inputs from mobile*/}
			{isMobile && (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleKey('Enter', state, dispatch);
					}}>
					<input
						enterkeyhint='enter'
						type='textarea'
						autoCapitalize='none'
						value={inputValue}
						onChange={(e) => handleChange(e)}
						id='hidden-input'
						className='off-screen'></input>
				</form>
			)}
		</main>
	);
}
