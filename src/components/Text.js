import { data } from '../data';
import Word from './Word';
import './Text.css';
import { useState } from 'react';
import { useKey } from 'react-use';

export default function Text() {
	const [textId, setTextId] = useState(0);
	const [cursorPosition, setCursorPosition] = useState({
		word: 0,
		letter: 0,
	});

	const text = data.text[textId].split(' ');

	const words = text.map((word, i) => (
		<Word
			key={i}
			id={i}
			text={i === text.length - 1 ? word + '\n' : word + ' '}
			letter={cursorPosition.word === i ? cursorPosition.letter : false}
		/>
	));

	function handleKeyDown({ key }) {
		setCursorPosition((prev) => {
			let word, letter;
			if (prev.letter === text[prev.word].length) {
				word = prev.word + 1;
				letter = 0;
			} else {
				word = prev.word;
				letter = prev.letter + 1;
			}
			return { word, letter };
		});
	}

	useKey([], handleKeyDown);

	return (
		<main>
			<div className='type-test-container centered bordered'>{words}</div>
		</main>
	);
}
