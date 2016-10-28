import { LajugWebsitePage } from './app.po';

describe('lajug App', function() {
  let page: LajugWebsitePage;

  beforeEach(() => {
    page = new LajugWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
