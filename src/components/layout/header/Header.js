import './Header.css';
export default function Header(props) {
	return (
		<header className='window-header'>
			<div className='tb-cluster'>
				<span
					style={{ backgroundColor: 'var(--tb-red)' }}
					className='tb-button'></span>
				<span
					style={{ backgroundColor: 'var(--tb-yellow)' }}
					className='tb-button'></span>
				<span
					style={{ backgroundColor: 'var(--tb-green)' }}
					className='tb-button'></span>
			</div>
			<span className='header-title'>{props.title}</span>
			<span className='flex-invisible'></span>
		</header>
	);
}
