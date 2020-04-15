// chai is an assertion library
import {expect} from 'chai';

// jsdom is for accessing the DOM
import jsdom from 'jsdom';

// fs: File System
import fs from 'fs';

describe('Our first test', () => {

	it('should pass',() =>{
		expect(true).to.equal(true);
	});

});


describe('index.html', () => {

	it('should say hello', () => {
		const index = fs.readFileSync('./src/index.html','utf-8');
		jsdom.env(index, function(err, window) {
			const h1 = window.document.getElementsByTagName('h1')[0];

			expect(h1.innerHTML).to.equal('Hello World!');

			window.close();

		});
	});
})
