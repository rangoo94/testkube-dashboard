import type {Page} from '@playwright/test';

export class TestSourceGeneralSettingsPage {
  public readonly page: Page;

  public constructor(page: Page) {
    this.page = page;
  }

  public async deleteTestSource(testSourceName: string): Promise<void> {
    await this.page.click('//button/span[text()="Delete"]'); // TODO: data-test
    await this.page.locator(`xpath=//div[@role="dialog"]//input`).fill(testSourceName); // TODO: data-test
    await this.page.click('xpath=//div[@role="dialog"]//button[.//span[text()="Delete"] and not(@disabled)]'); // TODO: data-test
  }

  public async updateRepoUri(uri: string): Promise<void> {
    await this.page.locator(`//input[@id="general-settings-name-url_uri"]`).fill(uri);
    await this.page.click('xpath=//form[@id="general-settings-name-url"]//button[@type="submit" and not(@disabled)]');
  }
}
