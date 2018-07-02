import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import SampleSelector from './SampleSelector';

describe('Sample selection component spec', function() {
	var div, sampleSelector, sampleSelection, imgSelection,  mockCallback;

	beforeEach(() => {
		div = document.createElement('div');
		mockCallback = jest.fn();
		ReactDOM.render(<SampleSelector
			cdn='https://foo.bar'
			SampleSelections={[{id: 123, name: 'Foobar Grotesque'}]}
			onFontChange={mockCallback}
		/>,div);
		sampleSelector = div.firstElementChild;
		sampleSelection = sampleSelector.firstElementChild;
		imgSelection = sampleSelection.firstElementChild;
	});

	afterEach(() => {
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders without errors or missing children', () => {
		expect(sampleSelector.tagName).toBe('DIV');
		expect(sampleSelector.className).toBe('SampleSelector');
	});

	it('renders with sample selection child', () => {
		expect(sampleSelection.tagName).toBe('DIV');
		expect(sampleSelection.className).toBe('SampleSelection');
	});

	it('renders with img element in selection child', () => {
		expect(imgSelection.tagName).toBe('IMG');
	});

	it('renders elements with the correct URLs', () => {
		expect(imgSelection.getAttribute('src')).toBe('https://foo.bar?id=123&idtype=familyid&text=Foobar Grotesque&transparent=true&size=20&width=170');
	});

	it('executes callback function when clicked', () => {
		TestUtils.Simulate.click(imgSelection);
		expect(mockCallback).toHaveBeenCalledWith(123);
		expect(mockCallback).toHaveBeenCalledTimes(1);
	});
	it('executes callback function when clicked two times', () => {
		TestUtils.Simulate.click(imgSelection);
		TestUtils.Simulate.click(imgSelection);
		expect(mockCallback).toHaveBeenCalledWith(123);
		expect(mockCallback).toHaveBeenCalledTimes(2);
	});
});