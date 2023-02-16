import { GendergreetPipe } from './gendergreet.pipe';

describe('GendergreetPipe', () => {
  it('create an instance', () => {
    const pipe = new GendergreetPipe();
    expect(pipe).toBeTruthy();
  });
});
