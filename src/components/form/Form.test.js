import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Form from './Form';

describe('Form component spec', function() {
	var div, textMock, refreshMock, colorMock, fontMock,
		formElement, textElement, buttonElement, colorElement, sampleElement;

	beforeEach(() => {
		div = document.createElement('div');
		textMock = jest.fn();
		refreshMock = jest.fn();
		colorMock = jest.fn();
		fontMock = jest.fn();
		ReactDOM.render(<Form
			onTextChange={textMock}
			onRefreshClick={refreshMock}
			onColorChange={colorMock}
			onFontChange={fontMock}
			colors={['#ff0000', '#ff5400']}
			families={[
				{id: 1, name: 'FooBar Grotesque'},
				{id: 2, name: 'BarFoo Bold'}
			]}
			cdn='https://foo.bar'
		/>, div);
		formElement = div.firstElementChild;
		textElement = formElement.children[0];
		buttonElement = formElement.children[1];
		colorElement = formElement.children[2];
		sampleElement = formElement.children[3];
	});

	afterEach(() => {
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders form element without warnings', () => {
		expect(formElement.tagName).toBe('DIV');
		expect(formElement.className).toBe('Form');
	});

	it('renders custom text element without warnings', () => {
		expect(textElement.tagName).toBe('INPUT');
		expect(textElement.name).toBe('customText');
	});

	it('renders button element without warnings', () => {
		expect(buttonElement.tagName).toBe('BUTTON');
	});

	it('renders color selector element without warnings', () => {
		expect(colorElement.tagName).toBe('DIV');
		expect(colorElement.className).toBe('ColorSelector');
	});

	it('renders sample selector element without warnings', () => {
		expect(sampleElement.tagName).toBe('DIV');
		expect(sampleElement.className).toBe('SampleSelector');
	});

	it('handles custom text change callback', () => {
		TestUtils.Simulate.change(textElement);
		TestUtils.Simulate.change(textElement, {key: 'a', keyCode: 65, which: 65});
		expect(textMock).toHaveBeenCalled();
	});

	it('handles refresh button callback', () => {
		TestUtils.Simulate.click(buttonElement);
		expect(refreshMock).toHaveBeenCalled();
	});

	it('handles color change callback', () => {
		TestUtils.Simulate.click(colorElement.firstElementChild);
		expect(colorMock).toHaveBeenCalledWith('#ff0000');
	});

	it('handles second color change callback', () => {
		TestUtils.Simulate.click(colorElement.lastElementChild);
		expect(colorMock).toHaveBeenCalledWith('#ff5400');
	});

	it('handles font change callback', () => {
		const selectionElement = sampleElement.firstElementChild.firstElementChild;
		TestUtils.Simulate.click(selectionElement);
		expect(fontMock).toHaveBeenCalledWith(1);
	});

	it('handles font change callback on last element', () => {
		const selectionElement = sampleElement.lastElementChild.firstElementChild;
		TestUtils.Simulate.click(selectionElement);
		expect(fontMock).toHaveBeenCalledWith(2);
	});
});