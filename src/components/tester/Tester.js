import Prompt from './Prompt';
import './Tester.css';
import Word from './Word';
export default function Tester({ words, lines, cursor }) {
	const wordElements = words.map((word, i) => (
		<Word
			key={i}
			id={i}
			text={i === words.length - 1 ? word + '\n' : word + ' '}
			letter={cursor.word === i ? cursor.letter : false}
		/>
	));

	return (
		<>
			<ul className='commands'>{lines}</ul>
			<div className='type-test-container'>
				<Prompt />
				{wordElements}
			</div>
		</>
	);
}
