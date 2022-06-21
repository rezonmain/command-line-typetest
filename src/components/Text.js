import Word from './Word';
import './Text.css';
import { useState } from 'react';
import { useKey } from 'react-use';

export default function Text(props) {
	const [current, setCurrent] = useState(0);
	const [cursorPosition, setCursorPosition] = useState({
		word: 0,
		letter: 0,
	});

	const phrase = props.commands[current].split(' ');

	const words = phrase.map((word, i) => (
		<Word
			key={i}
			id={i}
			text={i === phrase.length - 1 ? word + '\n' : word + ' '}
			letter={cursorPosition.word === i ? cursorPosition.letter : false}
		/>
	));

	function handleKeyDown({ key }) {
		// Reached end of phrase
		if (
			cursorPosition.word === phrase.length - 1 &&
			cursorPosition.letter === phrase[cursorPosition.word].length
		) {
			setCurrent((prev) => prev + 1);
			setCursorPosition({ word: 0, letter: 0 });
		} else {
			setCursorPosition((prev) => {
				let word, letter;
				// Reached end of word
				if (prev.letter === phrase[prev.word].length) {
					word = prev.word + 1;
					letter = 0;
				} else {
					word = prev.word;
					letter = prev.letter + 1;
				}
				return { word, letter };
			});
		}
	}

	useKey([], handleKeyDown);

	return (
		<main>
			<div className='type-test-container centered bordered'>
				{words || null}
			</div>
		</main>
	);
}
