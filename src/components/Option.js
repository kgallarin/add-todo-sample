import React from 'React';

const Option = (props) => (
		<div className="option">
		<p className="option__text">{props.count}. {props.optionText}</p>
			<button 
				className="button button--link"
				onClick={props.handleDeleteOption}
				onClick={(e) => {
					props.handleDeleteOption(props.optionText);
				}}
			>
				remove
			</button>
		</div>
	);
export default Option;