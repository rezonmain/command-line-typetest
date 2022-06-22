import { useReducer } from 'react';
import { useKey } from 'react-use';
import Stats from './components/layout/stats/Stats';
import Terminal from './components/layout/terminal/Terminal';
import { handleKey, testerReducer } from './lib/reducer';
import { init } from './lib/init';
import { commands } from './data';
import './App.css';

function App() {
	const [state, dispatch] = useReducer(testerReducer, init(commands));
	useKey([], (e) => handleKey(e, dispatch));

	console.log(state);

	return (
		<main>
			<Stats stats={state.stats} />
			<Terminal terminal={state.terminal} />
		</main>
	);
}

export default App;
