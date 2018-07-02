import React, { Component } from 'react';
import Form from '../form/Form';
import Sample from '../sample/Sample';
import './Root.css';

class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiURL: 'https://apicdn.myfonts.net/v1/fontsample',
			panagrams: [
				'Nymphs blitz quick vex dwarf jog.',
				'DJs flock by when MTV ax quiz prog.',
				'Big fjords vex quick waltz nymph.',
				'Bawds jog, flick quartz, vex nymph.',
				'Waltz job vexed quick frog nymphs.',
				'Junk MTV quiz graced by fox whelps.',
				'Bawds jog, flick quartz, vex nymphs.',
				'Waltz, bad nymph, for quick jigs vex!',
				'Waltz, nymph, for quick jigs vex Bud!',
				'Fox nymphs grab quick-jived waltz.',
			],
			families: [
				{ id: 99840, name: 'Brandon Grotesque'},
				{ id: 191556, name: 'Walbaum'},
				{ id: 191439, name: 'Recoleta'},
				{ id: 6402, name: 'FF Cocon'},
				{ id: 187869, name: 'Palomino'},
				{ id: 191459, name: 'Tobi Pro'},
			],
			colors: [
				'#ff0000',
				'#ff5400',
				'#ffcc00',
				'#6aff00',
				'#00ffdd',
				'#004cff',
				'#9800ff',
				'#ff00d4'
			],
			customText: null,
			color: null,
			id: 99840,
		};
	}

	getRandomPanagram() {
		return this.state.panagrams[Math.floor(Math.random() * this.state.panagrams.length)];
	}

	buildSample(id) {
		const text = this.state.customText ? this.state.customText : this.getRandomPanagram();
		const color = this.state.color ? this.state.color : '000';

		return (
			<Sample
				cdn={this.state.apiURL}
				id={id}
				idtype="familyid"
				text={text}
				color={color}/>
		);
	}

	buildForm() {
		return (
			<Form
				onRefreshClick={() => this.handleRefreshClick()}
				onTextChange={(el) => this.handleCustomText(el)}
				onColorChange={(color) => this.handleColorChange(color)}
				onFontChange={(id) => this.handleFontChange(id)}
				families = {this.state.families}
				colors = {this.state.colors}
				cdn = {this.state.apiURL}
			/>
		);
	}

	handleCustomText(el) {
		this.setState({
			customText: el.target.value,
		});
	}

	handleRefreshClick() {
		this.setState({});
	}

	handleColorChange(color) {
		this.setState({
			color: color.substr(1),
		});
	}

	handleFontChange(newID) {
		this.setState({
			id: newID,
		});
	}

	render() {
		return (
			<div className="Root" id="root">
				{this.buildSample(this.state.id)}
				{this.buildForm()}
			</div>
		);
	}
}

export default Root;
