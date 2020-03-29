const generateId = require('../../src/utils/generateId');

describe('Generate ID', () => {
  it('should generate unique ID', () => {
    const id = generateId();

    expect(id).toHaveLength(8);
  });
});