import React from 'react';
import PropTypes from 'prop-types';

function SampleSelection(props) {
	const srcUrl = `${props.cdn}?id=${props.id}&idtype=${props.idtype}&text=${props.text}&transparent=true&size=20&width=170`;
	return (
		<div className="SampleSelection" id="sample_selection">
			<img src={srcUrl} alt={props.text} onClick={()=>props.onFontChange(props.id)}/>
		</div>
	);
}

SampleSelection.propTypes = {
	cdn: PropTypes.string,
	id: PropTypes.number,
	idtype: PropTypes.string,
	text: PropTypes.string,
	onFontChange: PropTypes.func
};

export default SampleSelection;