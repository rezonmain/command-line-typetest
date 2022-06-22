import Prompt from './Prompt';
import './Tester.css';
import Word from './Word';
export default function Tester({ words, lines, cursor }) {
	const wordElements = words.map((word, i) => (
		<Word
			key={i}
			id={i}
			word={word}
			currentChar={cursor.word === i ? cursor.char : false}
		/>
	));

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
