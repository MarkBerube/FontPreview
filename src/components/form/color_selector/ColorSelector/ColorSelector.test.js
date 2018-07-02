import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import ColorSelector from './ColorSelector';

describe('Color selector component spec', function() {
	var div, selectorElement, selectionElement, mockCallback;

	beforeEach(() => {
		mockCallback = jest.fn();
		div = document.createElement('div');
		ReactDOM.render(<ColorSelector
			colors={['#ff0000', '#ff5400']}
			onColorChange={mockCallback}
		/>, div);
		selectorElement = div.firstElementChild;
		selectionElement = selectorElement.firstElementChild;
	});

	afterEach(() => {
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders selector without crashing or missing elements', () => {
		expect(selectorElement.tagName).toBe('DIV');
		expect(selectorElement.className).toBe('ColorSelector');
	});

	it('renders selection without crashing or missing elements', () => {
		expect(selectionElement.tagName).toBe('DIV');
		expect(selectionElement.style.backgroundColor).toBe('rgb(255, 0, 0)');
	});

	it('runs callback function when a child element is clicked', () => {
		TestUtils.Simulate.click(selectionElement);
		expect(mockCallback).toHaveBeenCalledTimes(1);
		expect(mockCallback).toBeCalledWith('#ff0000');
	});

	it('runs callback function with different child elements', () => {
		let selectionElementOne = selectorElement.firstElementChild;
		let selectionElementTwo = selectorElement.lastElementChild;
		TestUtils.Simulate.click(selectionElementOne);
		TestUtils.Simulate.click(selectionElementTwo);
		expect(mockCallback).toHaveBeenCalledTimes(2);
		expect(mockCallback).toBeCalledWith('#ff0000');
		expect(mockCallback).toBeCalledWith('#ff5400');
	});
});
