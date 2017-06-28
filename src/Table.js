import React, { Component } from 'react';
import Hand from './Hand.js';
import Community from './Community.js'

function Table(){
	return(
		<div className='container'>
			<div className='row'>
				<Hand />
			</div>
			<div className='row'>
				<Community />
			</div>
			<div className='row'>
				<Hand />
			</div>
		</div>
	)
}

export default Table;