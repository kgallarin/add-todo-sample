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
	}
};


const templateFour = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p> }
		<p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
		<p>{app.options.length}</p>
		<ol>
			<li>item one</li>
			<li>item two</li>
		</ol>
		<form onSubmit={onFormSubmit}>
			<input type="text" name="option"/>
			<button className="">Submit</button>
		</form>
	</div>
);

let appRoot = document.getElementById('app');
ReactDOM.render(templateFour, appRoot);


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
	}
};


// THE RENDERED
// let appRoot = document.getElementById('app');

// const renderTemplateFour = () => {
// 	const templateFour = (
// 		<div>
// 			<h1>{app.title}</h1>
// 			{app.subtitle && <p>{app.subtitle}</p> }
// 			<p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
// 			<p>{app.options.length}</p>
// 			<ol>
// 				<li>item one</li>
// 				<li>item two</li>
// 			</ol>
// 			<form onSubmit={onFormSubmit}>
// 				<input type="text" name="option"/>
// 				<button className="">Submit</button>
// 			</form>
// 		</div>
// 	);
// 	ReactDOM.render(templateFour, appRoot);
// };

// renderTemplateFour();

