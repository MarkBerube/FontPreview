import React, { Component } from 'react';
import './Form.css';
import ColorSelector from './color_selector/ColorSelector/ColorSelector';
import SampleSelector from './sample_selector/SampleSelector/SampleSelector';
import PropTypes from 'prop-types';

class Form extends Component {
	render() {
		return (
			<div className="Form" id="form">
				<input type="text" id="customText" name="customText" maxLength="30" onChange={this.props.onTextChange.bind(this)}/>
				<button type="button" onClick={this.props.onRefreshClick}>Refresh Samples</button>
				<ColorSelector
					onColorChange={this.props.onColorChange}
					colors={this.props.colors} />
				<SampleSelector
					SampleSelections={this.props.families}
					onFontChange={this.props.onFontChange}
					cdn={this.props.cdn}/>
			</div>
		);
	}
}

Form.propTypes = {
	onTextChange: PropTypes.func,
	onRefreshClick: PropTypes.func,
	onColorChange: PropTypes.func,
	onFontChange: PropTypes.func,
	families: PropTypes.array,
	colors: PropTypes.array,
	cdn: PropTypes.string
};

export default Form;
