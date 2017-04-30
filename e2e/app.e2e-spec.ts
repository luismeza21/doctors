import { DoctorsPage } from './app.po';

describe('doctors App', () => {
  let page: DoctorsPage;

  beforeEach(() => {
    page = new DoctorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
