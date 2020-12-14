import { CoolNamePipe } from './cool-name.pipe';

describe('CoolNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CoolNamePipe();
    expect(pipe).toBeTruthy();
  });
});
