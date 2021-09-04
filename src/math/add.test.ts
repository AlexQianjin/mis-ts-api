import { add } from './add';

describe('test add function', () => {
  it('should pass', () => {
    expect(add(1, 2)).toBe(3);
  });
});
