import assert from 'node:assert/strict';
import test from 'node:test';
import { getServiceById } from '../src/services/services/index.js';
import { services } from '../src/services/mocks/services.js';

test('returns the correct service when provided a known id', async () => {
  const id = 'ai-public-bidding';
  const expected = services.find(service => service.id === id);
  assert.deepEqual(await getServiceById(id), expected);
});

test('returns undefined for an unknown id', async () => {
  assert.equal(await getServiceById('unknown-id'), undefined);
});
