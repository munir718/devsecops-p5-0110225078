const test = require('node:test');
const assert = require('node:assert');
const { formatData } = require('../utils/helper');

test('formatData should convert items to uppercase', () => {
  const input = ['apple', 'banana'];
  const result = formatData(input);
  assert.deepStrictEqual(result, ['APPLE', 'BANANA']);
});

test('formatData should handle non-array input safely', () => {
  const result = formatData('not-an-array');
  assert.deepStrictEqual(result, []);
});