import { EurodealzV1Page } from './app.po';

describe('eurodealz-v1 App', () => {
  let page: EurodealzV1Page;

  beforeEach(() => {
    page = new EurodealzV1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
