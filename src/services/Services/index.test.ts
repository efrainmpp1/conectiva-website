import { describe, it, expect } from 'vitest';
import { getServiceById } from './index';
import { services } from '../mocks/services';

describe('getServiceById', () => {
  it('returns the correct service when provided a known id', () => {
    const id = 'ai-public-bidding';
    const expected = services.find(service => service.id === id);
    expect(getServiceById(id)).toEqual(expected);
  });

  it('returns undefined for an unknown id', () => {
    expect(getServiceById('unknown-id')).toBeUndefined();
  });
});
