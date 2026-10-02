import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const handlers = new Map();
const appended = [];
const window = { addEventListener: (name, callback, options) => {
  assert.equal(options.once, true);
  handlers.set(name, callback);
} };
const document = { createElement: () => ({}), head: { append: script => appended.push(script) } };
runInNewContext(readFileSync(new URL('../src/scripts/main.js', import.meta.url), 'utf8'), { window, document });
assert.equal(appended.length, 0, 'Analytics waits for engagement');
assert.equal(window.dataLayer[1][1], 'G-R077NKJ12M');
assert.equal(handlers.size, 3);
for (const callback of handlers.values()) callback();
assert.equal(appended.length, 1, 'Multiple engagement events load analytics only once');
assert.equal(appended[0].async, true);
assert.equal(appended[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-R077NKJ12M');
console.log('Analytics check passed');
