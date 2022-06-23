import Prompt from './Prompt';
import './Tester.css';

export default function Tester({ letterElements, lines }) {
	return (
		<>
			<ul className='commands'>{lines}</ul>
			<div id='typetester' className='type-test-container commands'>
				<Prompt />
				{letterElements}
			</div>
		</>
	);
}
