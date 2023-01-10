import React from 'react'
import './Footer.css'


function Footer(){
	return(
		<div className='footer'>
			<p>© {new Date().getFullYear()} Airbnb clone! No rights reserved </p>
        
		</div>
	)
}

export default Footer