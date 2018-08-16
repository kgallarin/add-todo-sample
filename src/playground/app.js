class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePickOption = this.handlePickOption.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);

		this.state = {
			options: []
		}
	}
	componentDidMount() {
		try{
			console.log('CDM');
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if(options){
				this.setState(() => ({ options }));
			}
		}catch(e){

		}
		
	}
	componentDidUpdate(prevProps, prevState){
		if(prevState.options.length !== this.state.options.length){
			console.log('saving data . . .');
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}
	componentWillUnmount() {
		console.log('component will unmount');
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
			console.log('What ',this.state.options.indexOf(option));
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

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
			<p>This is from header</p>
		</div>
	);
}

Header.defaultProps = {
	title: 'Indecision App'
};

// IndecisionApp.defaultProps = {
// 	options: []
// };

const Action = (props) => {
	return (
		<div>
			<button 
				onClick={props.handlePickOption}
				disabled={!props.hasOptions}>
				What should I do?
			</button>
		</div>
	);
}

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>
				Remove All
			</button>
			{props.options.length === 0 && <p>Add an option to get started</p>}
			{
				// props.options.map( (opts) => <Option key={opts} optionText={opts} />)

				props.options.map( (opts) => (
					<Option key={opts} 
					optionText={opts}
					handleDeleteOption={props.handleDeleteOption} />
				))
			}
		</div>
	);
}

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button 
				onClick={props.handleDeleteOption}
				onClick={(e) => {
					props.handleDeleteOption(props.optionText);
				}}
			>
				remove
			</button>
		</div>
	);
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
		
		if(!err){
			e.target.elements.inputOpt.value = '';
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

ReactDOM.render(<IndecisionApp options={['options one', 'options two']}/>, document.getElementById('app'));