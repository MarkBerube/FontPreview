import React from 'react';
import ReactDOM from 'react-dom';
import Sample from './Sample';

describe('Sample component spec', function() {
	var div, sampleElement, imgElement;

	beforeEach(() => {
		div = document.createElement('div');
		ReactDOM.render(<Sample cdn='https://foo.bar'
			id={123}
			idtype='bar'
			text='sampletext_test'
			color='000'
		/>, div);
		sampleElement = div.firstElementChild;
		imgElement = sampleElement.firstElementChild;
	});

	afterEach(() => {
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders div without crashing', () => {
		expect(sampleElement.tagName).toBe('DIV');
		expect(sampleElement.className).toBe('Sample');
	});

	it('renders image element without crashing', () => {
		expect(imgElement.tagName).toBe('IMG');
	});

	it('render image with proper URL from props', () => {
		expect(imgElement.getAttribute('src'))
			.toBe('https://foo.bar?id=123&idtype=bar&text=sampletext_test&fg=000&transparent=true&behaviour=resize');
	});
});