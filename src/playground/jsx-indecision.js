console.log('appjs is running');

// JSX - Javascript XML

// let template = (
// 	<div>
// 		<h1>Indecision App</h1>
// 		<p>Indecision App</p>
// 		<ol>
// 			<li>Hello 1</li>
// 			<li>Hello 2</li>
// 		</ol>
// 	</div>
// );


// var userName = 'Kevin';
// var userAge = 26;
// var userLocation = 'Taytay Rizal';
// var templateTwo = (
// 	<div>
// 		<h1>{userName}</h1>
// 		<p>Age: {userAge}</p>
// 		<p>Location: {userLocation}</p>
// 	</div>
// );

// we can use like JSON . .

// const user = {
// 	name: 'Kevin',
// 	age: 26,
// 	location: 'Philippines'
// }
// function getLocation(location){
// 	if(location){
// 		return <p>Location: {location}</p>;
// 	}
// }
// const templateThree = (
// 	<div>
// 		<h1>{user.name ? user.name : 'Anonymous'}</h1>
// 		{user.age >= 18 && <p>{user.age}</p>}
// 		{getLocation(user.location)}
// 	</div>
// );

const app = {
	title: 'Indecision App',
	subtitle: 'Subtitle',
	options: [],
}
const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if(option){
		app.options.push(option);
		e.target.elements.value = '';
		renderTemplateFour();

		console.log(app.options);
	}
};

const removeAll = (e) => {
	// e.preventDefault();
	app.options = [];
	
	console.log(app.options);
	renderTemplateFour();
};

let appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];
const onMakeDecision = () => {
	const randNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randNum];
	alert(option);
	console.log(randNum);
}
const renderTemplateFour = () => {
	const templateFour = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p> }
			<p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
			{/* <p>{app.options.length}</p> */}
			<button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={removeAll} className="">Remove all</button>
			{
				// numbers.map((number) => {
				// 	return <p key={number}>Number: {number}</p>;
				// })
			}
			{/* Challenge  map over app.options getting back an array of list (key and text)*/}
			<ol>
				{
					app.options.map((option) => <li key={option}>{option}</li>)
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button className="">Submit</button>
			</form>
		</div>
	);
	ReactDOM.render(templateFour, appRoot);
};

renderTemplateFour();
