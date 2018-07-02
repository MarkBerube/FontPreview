import React, { Component } from 'react';
import SampleSelection from '../SampleSelection/SampleSelection';
import PropTypes from 'prop-types';
import './SampleSelector.css';

class SampleSelector extends Component {

	buildSampleSelection(sampleData) {    
		return (
			<SampleSelection
				key={sampleData.id}
				cdn={this.props.cdn}
				id={sampleData.id}
				idtype="familyid"
				text={sampleData.name}
				onFontChange={this.props.onFontChange}/>
		);
	}

	render() {
		let selectionHTML = this.props.SampleSelections
			.map((sampleData) => this.buildSampleSelection(sampleData)); 

		return (<div className="SampleSelector" id="sample_selector">
			{ selectionHTML }
		</div>
		);
	}
}

SampleSelector.propTypes = {
	cdn: PropTypes.string,
	onFontChange: PropTypes.func,
	SampleSelections: PropTypes.array
};

export default SampleSelector;