import React, { Component } from 'react';
import Card from './Card.js'

function Hand(){
	return(
		<div className='hand-wrapper col-sm-4 col-sm-offset-4'>
			<div className='col-sm-6'>
				<Card />
			</div>
			<div className='col-sm-6'>
				<Card />
			</div>
		</div>
	)
}

export default Hand;