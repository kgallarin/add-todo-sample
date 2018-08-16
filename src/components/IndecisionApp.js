// constructor earlier
	// constructor(props) {
	// 	super(props);

	// 	this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
	// 	this.handlePickOption = this.handlePickOption.bind(this);
	// 	this.handleAddOption = this.handleAddOption.bind(this);
	// 	this.handleDeleteOption = this.handleDeleteOption.bind(this);

	// 	this.state = {
	// 		options: []
	// 	}
	// }

// long term set state

	// this.setState( (prevState) => {
	// 	return {
	// 		option: prevState
	// 	}
	// })

	// this.setState( (prevState) => {
	// 	return {
	// 		options: prevState.options.concat(option)
	// 	}
	// });

	// class instance earlier

		// eg.

		// handleDeleteOptions() {
		// 	this.setState(() => ({ options:[] }));
		// }

import React from 'react';
// Components
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	}
	handleDeleteOptions = () => {
		this.setState(() => ({ options:[] }));
	};
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			})
		}));
		
	};
	handlePickOption = () => {
		const randNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randNum];
		// this.setState((prevState) => ({ option:prevState }));
		this.setState(() => ({ selectedOption: option }));
		// alert(option);
	};
	handleCloseModal = () => {
		this.setState(() => ({
			selectedOption: undefined
		}));
	}
	handleAddOption = (option) => {
		console.log(option);
		if(!option){
			return 'Enter valid value to add item';
		}else if(this.state.options.indexOf(option) > -1){
			console.log('What ',this.state.options.indexOf(option));
			return 'This already exists'
		}

		this.setState( (prevState) => ({ options: prevState.options.concat(option)}));
	};
	componentDidMount() {
		try{
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if(options){
				this.setState(() => ({ options }));
			}
		}catch(e){

		}
		
	}
	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length !== this.state.options.length){
			// console.log('saving data . . .');
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}
	componentWillUnmount() {
		console.log('component will unmount');
	}
	render () {
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div className="">
				<Header subtitle={subtitle} />
				<div className="container">
					<Action 
						hasOptions={this.state.options.length > 0} 
						handlePickOption={this.handlePickOption}/>
					<div className="widget">
						<Options 
							options = {this.state.options}
							handleDeleteOptions={this.handleDeleteOptions}
							handleDeleteOption={this.handleDeleteOption}
							/>
						<AddOption 
							handleAddOption={this.handleAddOption}/>
						<OptionModal 
							selectedOption={this.state.selectedOption}
							handleCloseModal={this.handleCloseModal}
						/>
					</div>
				</div>
			</div>
		);
	}
}