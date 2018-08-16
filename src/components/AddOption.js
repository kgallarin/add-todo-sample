// constructor earlier
	// constructor(props) {
	// 	super(props);

	// 	this.handleAddOption = this.handleAddOption.bind(this);
	// 	// this.state = {
	// 	// 	err: undefined
	// 	// }
	// }

// long term set state
	// this.setState( () => {
	// 	return {err}
	// 	console.log($r);
	// });

import React from 'react';

export default class AddOption extends React.Component {
	state = {
		err: undefined
	}
	handleAddOption = (e) => {
		e.preventDefault();
		
		const opt = e.target.elements.inputOpt.value.trim();
		const err = this.props.handleAddOption(opt);

		

		this.setState(() => ({err}));
		
		if(!err){
			e.target.elements.inputOpt.value = '';
		}
	};
	render(){
		return (
			<div>
				{this.state.err && <p className="add-option-error">{this.state.err}</p>}
				<form onSubmit={this.handleAddOption} className="add-option">
					<input type="text" name="inputOpt" className="add-option__input" />
					<button className="button">Add Option</button>
				</form>
			</div>
		);
	}
}