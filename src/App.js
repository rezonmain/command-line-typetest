import { useReducer, useEffect, useState } from 'react';
import { useKey } from 'react-use';
import Stats from './components/layout/stats/Stats';
import Terminal from './components/layout/terminal/Terminal';
import { handleKey, testerReducer } from './lib/reducer';
import { init } from './lib/init';
import { commands } from './data';
import './App.css';
import { isMobile } from 'react-device-detect';

/* TODO: 
[X] cursor
[x] words formatting, 
[ ] stat updating
[ ] give functionality to stat control panel
[ ] add fontsize modifier in control panel
 */

function App() {
	const [state, dispatch] = useReducer(testerReducer, init(commands));
	const [inputValue, setInputValue] = useState();

	// Only triggers on mobile
	function handleChange(e) {
		if (isMobile) {
			handleKey(e.target.value, state, dispatch);
			setInputValue('');
		}
	}

	// This only triggers on desktop
	useKey([], (e) => handleKey(e.key, state, dispatch));
	console.log(state);

	return (
		<main>
			<Stats stats={state.stats} />
			<Terminal terminal={state.terminal} />
			{/* textarea is used because it changes on return keydown */}
			{isMobile && (
				<textarea
					autoCapitalize='none'
					value={inputValue}
					onChange={(e) => handleChange(e)}
					autoFocus={true}
					id='hidden-input'
					className='off-screen'></textarea>
			)}
		</main>
	);
}

export default App;
