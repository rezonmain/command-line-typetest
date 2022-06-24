import { useEffect, useReducer, useState, useRef } from 'react';
import { useKey } from 'react-use';
import { isMobile } from 'react-device-detect';
import Stats from './components/layout/stats/Stats';
import Terminal from './components/layout/terminal/Terminal';
import { handleInterval, handleKey, testerReducer } from './lib/reducer';
import { init } from './lib/init';
import './App.css';

/* TODO: 
[X] cursor
[x] letter formatting, 
[X] stat updating
[ ] add stat tooltips
[x] stat dropdown for mobile ~~
[ ] add actual commands and not lorem ipsum
[x] give functionality to stat control panel
[x] add fontsize modifier in control panel
 */

export default function App() {
	const [state, dispatch] = useReducer(testerReducer, init());
	const [focus, setFocus] = useState();
	const [inputValue, setInputValue] = useState('');
	const burger = useRef(false);

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
			handleKey(e.target.value, state, dispatch);
			e.preventDefault();
			setInputValue('');
		}
	}

	// Only triggers on desktop
	useKey([], (e) => {
		focus && handleKey(e.key, state, dispatch);
		e.preventDefault();
	});

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

	function toggleBurger() {
		burger.current = !burger.current;
		const menu = document.getElementById('burger-menu');
		const classname = burger.current
			? ' burger-menu-show'
			: ' burger-menu-hide';
		menu.className += classname;
	}

	return (
		<main>
			<Stats
				stats={state.stats}
				fontChange={changeFontSize}
				clearConsole={clearConsole}
			/>
			<Terminal
				terminal={state.terminal}
				focus={handleFocus}
				toggleBurger={toggleBurger}
			/>

			{/* textarea is used to hijack inputs from mobile*/}
			{isMobile && (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleKey('Enter', state, dispatch);
					}}>
					<input
						enterKeyHint='enter'
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
