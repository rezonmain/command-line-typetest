import { useEffect } from 'react';
import Tester from '../../tester/Tester';
import Header from '../header/Header';
import './Terminal.css';

export default function Terminal({ terminal, focus, toggleBurger }) {
	// Keep input part of terminal on view when it overflows
	useEffect(() => {
		const tester = document.getElementById('typetester');
		tester.scrollIntoView({ behavior: 'smooth' });
	}, [terminal]);

	useEffect(() => {
		const terminal = document.getElementById('terminal-container');
		terminal.focus();
	}, []);

	/*   Focus the textarea when tester container is clicked
  this brings up the mobile keyboard */
	function focusInput() {
		document.getElementById('hidden-input') &&
			document.getElementById('hidden-input').focus();
	}

	return (
		<section className='terminal-section'>
			<Header title={'/users/rez'} toggleBurger={toggleBurger} />
			<div
				id='terminal-container'
				onFocus={() => focus('focused')}
				onBlur={() => focus('blurry')}
				tabIndex={0}
				onClick={focusInput}
				className='terminal-container'
				style={{ fontSize: terminal.fontSize }}>
				<Tester
					letterElements={terminal.testLetterElements}
					lines={terminal.lines}
				/>
			</div>
		</section>
	);
}
