import React from 'react';
import './ColorSelection.css';
import PropTypes from 'prop-types';

function ColorSelection(props) {
	return (
		<div className="ColorSelection" style={{backgroundColor: props.color}} onClick={() => props.onColorChange(props.color)}></div>
	);
}

ColorSelection.propTypes = {
	color: PropTypes.string,
	onColorChange: PropTypes.func
};
  
export default ColorSelection;