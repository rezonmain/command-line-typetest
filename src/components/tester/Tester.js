import { useState } from 'react';
import Prompt from './Prompt';
import './Tester.css';
import Word from './Word';
export default function Tester(props) {
	const [words, setWords] = useState(newWords(props.commands));
	const [lines, setLines] = useState(newLines());
	const [cursor, setCursor] = useState({
		word: 0,
		letter: 0,
	});

	function newWords(cmds) {
		const ran = Math.floor(Math.random() * cmds.length);
		return cmds[ran].split(' ');
	}

	function newLines() {
		const date = new Date(Date.now());

		const initialText = [
			`Last login: ${date}.`,
			'Welcome to Command Type Test, where you test your typing chops with terminal commands.',
		];
		const li = initialText.map((command, i) => {
			return <li key={i}>{command}</li>;
		});
		return li;
	}

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
