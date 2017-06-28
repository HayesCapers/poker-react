import React, { Component } from 'react';
import Card from './Card.js'

class Flop extends Component{
	constructor(props) {
		super(props);
		this.state = {
			flopCards: []
		}	
	}

	render(){
		return(
			<div className='flop-wrapper'>
				{this.state.flopCards.map((card,index)=>{
					return <Card />
				})}
			</div>
		)
	}
}

export default Flop