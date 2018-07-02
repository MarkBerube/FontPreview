import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import SampleSelection from './SampleSelection';

describe('Sample selection component spec', function() {
	var div, selectionElement, imgElement, mockCallback;

	beforeEach(() => {
		div = document.createElement('div');
		mockCallback = jest.fn();
		ReactDOM.render(<SampleSelection
			cdn='https://foo.bar'
			id={123}
			idtype='fooid'
			text='The foobar jumps over the bridge.'
			onFontChange={mockCallback}
		/>,div);
		selectionElement = div.firstElementChild;
		imgElement = selectionElement.firstElementChild;
	});

	afterEach(() => {
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders with sample div', () => {
		expect(selectionElement.tagName).toBe('DIV');
		expect(selectionElement.className).toBe('SampleSelection');
	});

	it('renders with image child element', () => {
		expect(imgElement.tagName).toBe('IMG');
	});

	it('renders with correct sample URL', () => {
		expect(imgElement.getAttribute('src')).toBe('https://foo.bar?id=123&idtype=fooid&text=The foobar jumps over the bridge.&transparent=true&size=20&width=170');
	});

	it('runs callback function when it is clicked', () => {
		TestUtils.Simulate.click(imgElement);
		expect(mockCallback).toBeCalledWith(123);
	});
});