import { Kafeen.Github.IoPage } from './app.po';

describe('kafeen.github.io App', () => {
  let page: Kafeen.Github.IoPage;

  beforeEach(() => {
    page = new Kafeen.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
