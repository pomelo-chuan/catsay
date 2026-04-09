const test = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const pkg = require('../package.json');

const catsay = require('../dist/catsay.cjs');

test('allows empty eye and mouth via nullish fallback', () => {
  const output = catsay.say({ text: 'x', E: '', M: '' });
  assert.ok(output.includes('|. |______________'), 'empty eye should be preserved');
  assert.ok(output.includes('>\\ <'), 'empty mouth should be preserved');
  assert.ok(!output.includes('@.@'), 'default eye should not override empty input');
});

test('keeps mouse option as backward-compatible alias for mouth', () => {
  const output = catsay.say({ text: 'x', mouse: 'U' });
  assert.ok(output.includes('>\\U <'));
});

test('supports mochi cat style', () => {
  const output = catsay.say({ text: 'x', cat: 'mochi', E: 'o', M: 'w' });
  assert.ok(output.includes('=( o.o )='));
  assert.ok(output.includes('(  w  )'));
});

test('wraps multiline text using maxWidth', () => {
  const output = catsay.say({ text: '123456789012345\nabc', maxWidth: 6, padding: 1 });
  assert.ok(output.includes('┌────────┐'));
  assert.ok(output.includes('│ 123456 │'));
  assert.ok(output.includes('│ 789012 │'));
  assert.ok(output.includes('│ 345    │'));
  assert.ok(output.includes('│ abc    │'));
});

test('supports CLI max width option', () => {
  const cliPath = path.resolve(__dirname, '..', pkg.bin.catsay);
  const output = execFileSync('node', [cliPath, '-W', '6', '1234567890'], { encoding: 'utf8' });
  assert.ok(output.includes('┌──────────┐'));
});
