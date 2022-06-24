import { useEffect, useReducer, useState } from 'react';
import { useKey } from 'react-use';
import { isDesktop, isMobile } from 'react-device-detect';
import Stats from './components/layout/stats/Stats';
import Terminal from './components/layout/terminal/Terminal';
import { handleInterval, handleKey, testerReducer } from './lib/reducer';
import { init } from './lib/init';
import './App.css';

/* TODO: 
[ ] include check to not have repeated commands
[ ] have a switch to use regular words
[ ] add a TON more commands
[ ] add stat tooltips
[X] cursor (caret)
[x] letter formatting, 
[X] stat updating
[x] stat dropdown for mobile ~~
[x] give functionality to stat control panel
[x] add fontsize modifier in control panel
 */

export default function App() {
	const [state, dispatch] = useReducer(testerReducer, init());
	const [focus, setFocus] = useState();
	const [inputValue, setInputValue] = useState('');

	// Set timer for time dependent stats
	useEffect(() => {
		const timer = setInterval(() => handleInterval(dispatch), 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	// Only triggers on mobile
	function handleChange(e) {
		if (isMobile) {
			const key = e.target.value === '\n' ? 'Enter' : e.target.value;
			handleKey(key, state, dispatch);
			setInputValue('');
		}
	}

	// Only triggers on desktop
	useKey([], (e) => {
		if (isDesktop) {
			focus && handleKey(e.key, state, dispatch);
			e.preventDefault();
		}
	});

	// Show the cursor if terminal is focused
	function handleFocus(type) {
		if (isDesktop) {
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
				<textarea
					id='hidden-input'
					enterKeyHint='enter'
					autoCapitalize='none'
					value={inputValue}
					onChange={(e) => handleChange(e)}
					className='off-screen'></textarea>
			)}
		</main>
	);
}
