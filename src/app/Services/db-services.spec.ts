import { DbServices } from './db-services';

describe('DbServices', () => {
  it('should create an instance', () => {
    expect(new DbServices()).toBeTruthy();
  });
});
