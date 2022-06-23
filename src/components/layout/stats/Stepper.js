import './Stepper.css';
export default function Stepper(props) {
	return (
		<div className='stepper-container'>
			<div
				onClick={() => props.fontChange('decrement')}
				className='stepper-minus stepper-symbol'>
				<span className='centered'></span>
			</div>
			<div className='stepper-divider'>
				<span className='centered'></span>
			</div>
			<div
				onClick={() => props.fontChange('increment')}
				className='stepper-plus stepper-symbol'>
				<span id='one' className='centered'></span>
				<span id='two' className='centered'></span>
			</div>
		</div>
	);
}
