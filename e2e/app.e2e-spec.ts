import { CodePointPage } from './app.po';

describe('code-point App', () => {
  let page: CodePointPage;

  beforeEach(() => {
    page = new CodePointPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
