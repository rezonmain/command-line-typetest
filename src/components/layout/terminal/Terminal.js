import Header from '../header/Header';
import './Terminal.css';
export default function Terminal() {
	return (
		<section className='terminal-section'>
			<Header title={'/users/rez'} />
			<div className='terminal-container'></div>
		</section>
	);
}
