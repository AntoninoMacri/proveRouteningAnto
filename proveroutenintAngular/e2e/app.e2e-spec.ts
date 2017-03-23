import { ProveroutenintAngularPage } from './app.po';

describe('proveroutenint-angular App', () => {
  let page: ProveroutenintAngularPage;

  beforeEach(() => {
    page = new ProveroutenintAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
