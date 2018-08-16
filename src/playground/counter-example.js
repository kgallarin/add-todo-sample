// Challenge
// Make button "-1" - Set up minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function

// const templateFive = (
// 	<div>
// 		<h1>Count : {count}</h1>
// 		<button onClick={addOne}>+1</button>
// 		<button onClick={minusOne}>-1</button>
// 		<button onClick={reset}>reset</button>
// 	</div>
// );

// ReactDOM.render(templateFive, appRoot);
// ReactDOM.render(template, appRoot);

// let count = 0;
// const addOne = () =>{
// 	count++;
// 	renderCounterApp();
// 	console.log('addOne',count);
// }
// const minusOne = () => {
// 	count--;
// 	renderCounterApp();
// 	console.log('minusOne');
// }
// const reset = () => {
// 	count = 0;
// 	renderCounterApp();
// 	console.log('reset');
// }

// let appRoot = document.getElementById('app');

// const renderCounterApp = () => {
// 	const templateFive = (
// 		<div>
// 			<h1>Count : {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={reset}>reset</button>
// 		</div>
// 	);
// 	ReactDOM.render(templateFive, appRoot);
// };

// renderCounterApp();

class Counter extends React.Component{
	constructor(props) {
		super(props);

		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);

		this.state = {
			count: 0
		}
		
	}
	componentDidMount() {
		console.log('Component Did Mount!');
		const strCtr = localStorage.getItem('ctr');
		const ctr = parseInt(strCtr, 10);

		if(!isNaN(ctr)) {
			this.setState(() => ({ count: ctr }));
		}
		// console.log(ctrInt);
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('Component Did Update');
		if(prevState.count.length !== this.state.count){
			// const json = 
			localStorage.setItem('ctr', this.state.count);
		}
	}
	componentWillUnmount() {
		console.log('Will Unmount');
	}
	handleAddOne() {
		this.setState( (prevState) => {
			return {
				count: prevState.count + 1
			}
		});
	}
	handleMinusOne() {
		this.setState( (prevState) => {
			return {
				count: prevState.count - 1
			}
		});
	}
	handleReset() {
		this.setState( () => {
			return {
				count: 0
			}
		});
		// this.setState({
		// 	count : 0
		// });
		// this.setState({
		// 	count: this.state.count + 1
		// });
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}


// Counter.defaultProps = {
// 	count: 0
// }


// set state is ASYNCHRONOUS

// Create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor

ReactDOM.render(<Counter />,document.getElementById('app'));
