import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

describe('Root element component spec', function() {
	var div, rootElement, sampleElement, formElement;
	beforeEach(() => {
		div = document.createElement('div');
		ReactDOM.render(<Root />, div);
		rootElement = div.firstElementChild;
		sampleElement = rootElement.children[0];
		formElement = rootElement.children[1];
	});

	afterEach(() => {
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders Root div element', () => {
		expect(rootElement.tagName).toBe('DIV');
		expect(rootElement.className).toBe('Root');
	});

	it('renders font sample element', () => {
		expect(sampleElement.tagName).toBe('DIV');
		expect(sampleElement.className).toBe('Sample');
	});

	it('renders form element', () => {
		expect(formElement.tagName).toBe('DIV');
		expect(formElement.className).toBe('Form');
	});
});