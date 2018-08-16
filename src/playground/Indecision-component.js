// data binding
// const obj = {
// 	name: 'Kevin',
// 	getName() {	
// 		return this.name;
// 	}
// }
// console.log(obj.getName());

// const getName = obj.getName.bind({name: 'what'});

// console.log(getName());

// MAKE IT WORK!!

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePickOption = this.handlePickOption.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);

		this.state = {
			options: props.options
		}
	}
	handleDeleteOptions() {
		this.setState(() => ({ options:[] }));
	}
	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			})
		}));
	
	}
	handlePickOption() {
		const randNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randNum];
		// this.setState( (prevState) => {
		// 	return {
		// 		option: prevState
		// 	}
		// })
		this.setState((prevState) => ({ option:prevState }));
		alert(option);
	}
	handleAddOption(option) {
		console.log(option);
		if(!option){
			return 'Enter valid value to add item';
		}else if(this.state.options.indexOf(option) > -1){
			return 'This already exists'
		}

		this.setState( (prevState) => ({ options: prevState.options.concat(option)}));
		// this.setState( (prevState) => {
		// 	return {
		// 		options: prevState.options.concat(option)
		// 	}
		// });
	}
	render () {
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div className="parent-container">
				<Header subtitle={subtitle} />
				<Action 
					hasOptions={this.state.options.length > 0} 
					handlePickOption={this.handlePickOption}/>
				<Options 
					options = {this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
					/>
				<AddOption 
					handleAddOption={this.handleAddOption}/>
			</div>
		);
	}
}

class Header extends React.Component{
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
				<p>This is from header</p>
			</div>
		);
	}
}

Header.defaultProps = {
	title: 'Indecision App'
};
class Action extends React.Component{
	render() {
		return (
			<div>
				<button 
					onClick={this.props.handlePickOption}
					disabled={!this.props.hasOptions}>
					What should I do?
				</button>
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: []
};


class Options extends React.Component{
	render() {
		return (
			<div>
				<button onClick={this.props.handleDeleteOptions}>Remove All</button>
				{
					// this.props.options.map((opts) => <p key={opts}>{opts}</p>)
					this.props.options.map((opts) => <Option key={opts} optionText={opts} />)
				}
			</div>
		);
	}
}


class Option extends React.Component {
	render(){
		return (
			<div>
				{this.props.optionText}
			</div>
		);
	}
}


class AddOption extends React.Component {
	constructor(props) {
		super(props);

		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			err: undefined
		}
	}
	handleAddOption(e) {
		e.preventDefault();
		
		const opt = e.target.elements.inputOpt.value.trim();
		const err = this.props.handleAddOption(opt);

		// this.setState( () => {
		// 	return {err}
		// 	console.log($r);
		// });

		this.setState(() => ({err}));
		
		if (opt){
			e.target.elements.value = '';
		}
	}
	render(){
		return (
			<div>
				{this.state.err && <p>{this.state.err}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="inputOpt" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

// doesnt use react.component that makes it faster
// const User = (props) => {
// 	return (
// 		<div>
// 			<p>Name: {props.name}</p>
// 			<p>Age: {props.age}</p>
// 		</div>
// 	)
// }
ReactDOM.render(<IndecisionApp options={['options one', 'options two']}/>, document.getElementById('app'));