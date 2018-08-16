import React from 'react';
import Option from './Option'

const Options = (props) => (
	<div className="widget">
		<div className="widget-header">
			<h3 className="widget-header__title">Your Options</h3>
			<button className="button button--link" onClick={props.handleDeleteOptions}>
				Remove All
			</button>
		</div>
		{props.options.length === 0 && <p className="widget__message">Add an option to get started</p>}
		{
			// props.options.map( (opts) => <Option key={opts} optionText={opts} handleDeleteOption={props.handleDeleteOption} />)
			props.options.map( (opts, index) => (
				<Option key={opts} 
				count={index + 1}
				optionText={opts}
				handleDeleteOption={props.handleDeleteOption} />
			))
		}
	</div>
);

export default Options;