import {JSDOM} from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import chaiEnzyme from 'chai-enzyme';

const win = new JSDOM(`<!doctype html><html><body></body></html>`);
const doc = win.window.document;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    exposedProperties.push(key);
    global[key] = window[key];
  }
});

global.navigator = { userAgent: 'node.js' };

chai.use(chaiImmutable);
chai.use(chaiEnzyme(debugTest));

function debugTest(wrapper) {
  return wrapper.html()
}
