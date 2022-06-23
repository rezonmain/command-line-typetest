import { useEffect } from 'react';
import Tester from '../../tester/Tester';
import Header from '../header/Header';
import './Terminal.css';
export default function Terminal({ terminal }) {
	// Keep input part of terminal on view when it overflows
	useEffect(() => {
		const tester = document.getElementById('typetester');
		tester.scrollIntoView({ behavior: 'smooth' });
	});

	function focusInput() {
		document.getElementById('hidden-input').focus();
	}
	return (
		<section className='terminal-section'>
			<Header title={'/users/rez'} />
			<div onClick={focusInput} className='terminal-container'>
				<Tester
					letterElements={terminal.testLetterElements}
					lines={terminal.lines}
				/>
			</div>
		</section>
	);
}
