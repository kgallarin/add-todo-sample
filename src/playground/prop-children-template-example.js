// Sample class property
	// class OldSyntax {
	// 	constructor(){
	// 		this.name = 'Mike';
	// 		this.getGreeting = this.getGreeting.bind(this);
	// 	}
	// 	getGreeting(){
	// 		return `Hi my name is ${this.name}.`;
	// 	}
	// }

	// const oldSyntax = new OldSyntax();

	// console.log(oldSyntax);

	// class NewSyntax{
	// 	name = 'Jen';
	// 	getGreeting = () => {
	// 		return `Hi my name is ${this.name}`
	// 	};
		
	// }

	// const newSyntax = new NewSyntax();
	// console.log(newSyntax.getGreeting());

	// Indecision app DOM
		// <IndecisionApp options={['options one', 'options two']}/>

        import React from 'react';
        import ReactDOM from 'react-dom';
        
        import IndecisionApp from './components/IndecisionApp.js';
        
        
        
        const Layout = (props) => {
            return (
                <div>
                    <p>header</p>
                    {props.children}
                    <p>footer</p>
                </div>
            );
        }
        
        
        
        // ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));
        ReactDOM.render(
            <Layout> 
                <div>
                    <h1>Page Title</h1>
                    <p>This is my page</p>
                </div>
            </Layout>
            ,document.getElementById('app')
        );
        