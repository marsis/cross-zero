import { CrossZeroPage } from './app.po';

describe('cross-zero App', function() {
  let page: CrossZeroPage;

  beforeEach(() => {
    page = new CrossZeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
