import React, { Component } from 'react';
import ColorSelection from '../ColorSelection/ColorSelection';
import './ColorSelector.css';
import PropTypes from 'prop-types';

class ColorSelectionGrid extends Component {
	buildColorSelection(color) {
		return(
			<ColorSelection
				key={color}
				color={color}
				onColorChange={this.props.onColorChange}/>
		);
	}

	render() {
		let color_selections = this.props.colors
			.map((color) => this.buildColorSelection(color));

		return (<div className="ColorSelector" id="color_selector">
			{color_selections}
		</div>
		);
	}
}

ColorSelectionGrid.propTypes = {
	onColorChange: PropTypes.func,
	colors: PropTypes.array
};

export default ColorSelectionGrid;