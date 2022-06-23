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
[ ] give functionality to stat control panel
[ ] add fontsize modifier in control panel
 */

export default function App() {
	const [state, dispatch] = useReducer(testerReducer, init());
	const [inputValue, setInputValue] = useState('');

	// Only triggers on mobile
	function handleChange(e) {
		if (isMobile) {
			handleKey(e.target.value, state, dispatch);
			setInputValue('');
		}
	}
	// Only triggers on desktop
	useKey([], (e) => handleKey(e.key, state, dispatch));
	console.log(state);

	return (
		<main>
			<Stats stats={state.stats} />
			<Terminal terminal={state.terminal} />
			{/* textarea is used to hijack inputs from mobile*/}
			{isMobile && (
				<input
					type='textarea'
					autoCapitalize='none'
					value={inputValue}
					onChange={(e) => handleChange(e)}
					id='hidden-input'
					className='off-screen'></input>
			)}
		</main>
	);
}
