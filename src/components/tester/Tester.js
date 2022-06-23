import Prompt from './Prompt';
import './Tester.css';
export default function Tester({ wordElements, lines }) {
	return (
		<>
			<ul className='commands'>{lines}</ul>
			<div id='typetester' className='type-test-container'>
				<Prompt />
				{wordElements}
			</div>
		</>
	);
}
