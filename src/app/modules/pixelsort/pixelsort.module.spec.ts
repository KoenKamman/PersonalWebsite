import { PixelsortModule } from './pixelsort.module';

describe('PixelsortModule', () => {
  let pixelsortModule: PixelsortModule;

  beforeEach(() => {
    pixelsortModule = new PixelsortModule();
  });

  it('should create an instance', () => {
    expect(pixelsortModule).toBeTruthy();
  });
});
