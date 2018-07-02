import React from 'react';
import './Sample.css';
import PropTypes from 'prop-types';

function Sample(props) {
	const srcUrl = `${props.cdn}?id=${props.id}&idtype=${props.idtype}&text=${props.text}&fg=${props.color}&transparent=true&behaviour=resize`;
	return (
		<div className="Sample" id="sample">
			<img src={srcUrl} alt={props.text} />
		</div>
	);
}

Sample.propTypes = {
	cdn: PropTypes.string,
	id: PropTypes.number,
	idtype: PropTypes.string,
	text: PropTypes.string,
	color: PropTypes.string
};

export default Sample;