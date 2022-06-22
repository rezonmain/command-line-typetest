import Header from '../header/Header';
import './Stats.css';
export default function Stats(props) {
	return (
		<section className='stats-section'>
			<Header title='Stats' />
			<div className='stats-container'>
				<ul className='stats'>
					<li>
						Time: <b>{'1hr 30min'}</b>
					</li>
					<li>
						WPM: <b>{'28.3'}</b>
					</li>
					<li>
						Mistakes: <b>{'12'}</b>
					</li>
					<li>
						Accuracy: <b>{'80'}</b>
					</li>
					<li>
						Score: <b>{'234'}</b>
					</li>
				</ul>
				<hr></hr>
				<button className='button'>Clear console</button>
				<hr></hr>
				{/* prettier-ignore */}
				<pre className='ascii-logo'>
      {`            (/////,                   
              ////////////              
                 //////////////         
                       /////////////.   
                            .///////////
                                 ///////
                           /////////////
                     /////////////*     
               ,/////////////*          
              //////////,               
////*       (////.                    
////* 
   +-+-+-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+ 
   |C|O|M|M|A|N|D| |T|Y|P|E| |T|E|S|T|
   +-+-+-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+`}
			</pre>
				<hr></hr>
				<small> &copy; 2022 made by rezonmain</small>
			</div>
		</section>
	);
}
