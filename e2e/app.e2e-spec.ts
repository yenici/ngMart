import { NgMartPage } from './app.po';

describe('ng-mart App', () => {
  let page: NgMartPage;

  beforeEach(() => {
    page = new NgMartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
