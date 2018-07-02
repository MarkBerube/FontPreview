import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import ColorSelection from './ColorSelection';

describe('Color selection component spec', function() {
	var div, selectionElement, mockCallback;

	beforeEach(() => {
		mockCallback = jest.fn();
		div = document.createElement('div');
		ReactDOM.render(<ColorSelection
			color={'#ff0000'}
			onColorChange={mockCallback}
		/>, div);
		selectionElement = div.firstElementChild;
	});

	afterEach(() => {
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders with background color provided as prop', () => {
		expect(selectionElement.tagName).toBe('DIV');
		expect(selectionElement.className).toBe('ColorSelection');
	});

	it('runs callback function when the element is clicked', () => {
		TestUtils.Simulate.click(selectionElement);
		expect(mockCallback).toBeCalledWith('#ff0000');
	});
});