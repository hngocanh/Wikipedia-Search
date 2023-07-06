// @ts-check
import { test, expect } from '@playwright/test';
import { searchInput, texts } from '../Data';
import { mainPage, searchResultsPage } from '../Locators'

test.describe('Search Wikipedia for pages containing specific text', () => {
  test('Reliability - Relevant results are constently returned when searching for "Software Testing" multiple times', async ({ page }) => {

    // Go to Wikipedia Main Page
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');

    // Check page title, top search bar and top search button
    await expect(page).toHaveTitle(/Wikipedia, the free encyclopedia/);
    await expect(page.locator(mainPage.TOP_SEARCH_BAR)).toBeEnabled();
    await expect(page.locator(mainPage.TOP_SEARCH_BTN)).toBeEnabled();

    // Enter 'Software Testing' into Search bar and search
    await page.locator(mainPage.TOP_SEARCH_BAR).fill(searchInput.SOFTWARE_TESTING);
    await page.getByRole('link', { name: `Search for pages containing ${searchInput.SOFTWARE_TESTING}` }).click();

    // Relevant results are shown in Search Results page
    await expect(page.getByText(`${texts.SOFTWARE_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.REGRESSION_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.UNIT_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.SMOKE_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.STRESS_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.TEST_AUTOMATION}`, { exact: true })).toBeVisible();

    // Click second Search button

    await page.locator(searchResultsPage.SECOND_SEARCH_BTN).click();

    // Relevant results are shown in Search Results page
    await expect(page.getByText(`${texts.SOFTWARE_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.REGRESSION_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.UNIT_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.SMOKE_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.STRESS_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.TEST_AUTOMATION}`, { exact: true })).toBeVisible();

    // Remove 'Software Testing' from second search bar
    await page.locator(searchResultsPage.SECOND_SEARCH_BAR).clear();

    // Enter 'Software Testing' in second search bar and hit Enter
    await page.locator(searchResultsPage.SECOND_SEARCH_BAR).fill(searchInput.SOFTWARE_TESTING);
    await page.keyboard.press('Enter');

    // Relevant results are shown in Search Results page
    await expect(page.getByText(`${texts.SOFTWARE_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.REGRESSION_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.UNIT_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.SMOKE_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.STRESS_TESTING}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`${texts.TEST_AUTOMATION}`, { exact: true })).toBeVisible();

  });

  test('If clicking on a search result that is a redirect takes the users to the correct page.', async ({ page }) => {

    // Go to Wikipedia Main Page
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');


    // Enter 'Software Testing' into Search bar and search
    await page.locator(mainPage.TOP_SEARCH_BAR).fill(searchInput.SOFTWARE_TESTING);
    await page.getByRole('link', { name: `Search for pages containing ${searchInput.SOFTWARE_TESTING}` }).click();

    // Click 'Smoke testing (software)' and user will be redirected to the correct page
    await page.getByText(`${texts.SMOKE_TESTING}`, { exact: true }).click();
    await expect(page.locator(searchResultsPage.PAGE_HEADING)).toHaveText(`${texts.SMOKE_TESTING}`);

    // Enter 'Software Testing' into Search bar and search
    await page.locator(mainPage.TOP_SEARCH_BAR).fill(searchInput.SOFTWARE_TESTING);
    await page.getByRole('link', { name: `Search for pages containing ${searchInput.SOFTWARE_TESTING}` }).click();

    // Click 'Regression Testing' and user will be redirected to the correct page
    await page.getByText(`${texts.REGRESSION_TESTING}`, { exact: true }).click();
    await expect(page.locator(searchResultsPage.PAGE_HEADING)).toHaveText(`${texts.REGRESSION_TESTING}`);

  });
});

// test('Reliability - Relevant results are constently returned when searching for "Software Testing" multiple times', async ({ page }) => {

//   // Go to Wikipedia Main Page
//   await page.goto('https://en.wikipedia.org/wiki/Main_Page');

//   // Check page title, top search bar and top search button
//   await expect(page).toHaveTitle(/Wikipedia, the free encyclopedia/);
//   await expect(page.locator(mainPage.TOP_SEARCH_BAR)).toBeEnabled();
//   await expect(page.locator(mainPage.TOP_SEARCH_BTN)).toBeEnabled();

//   // Enter 'Software Testing' into Search bar and search
//   await page.locator(mainPage.TOP_SEARCH_BAR).fill(searchInput.SOFTWARE_TESTING);
//   await page.getByRole('link', { name: `Search for pages containing ${searchInput.SOFTWARE_TESTING}` }).click();

//   // Relevant results are shown in Search Results page
//   await expect(page.getByText(`${texts.SOFTWARE_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.REGRESSION_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.UNIT_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.SMOKE_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.STRESS_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.TEST_AUTOMATION}`, { exact: true })).toBeVisible();

//   // Click second Search button

//   await page.locator(searchResultsPage.SECOND_SEARCH_BTN).click();

//   // Relevant results are shown in Search Results page
//   await expect(page.getByText(`${texts.SOFTWARE_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.REGRESSION_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.UNIT_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.SMOKE_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.STRESS_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.TEST_AUTOMATION}`, { exact: true })).toBeVisible();

//   // Remove 'Software Testing' from second search bar
//   await page.locator(searchResultsPage.SECOND_SEARCH_BAR).clear();

//   // Enter 'Software Testing' in second search bar and hit Enter
//   await page.locator(searchResultsPage.SECOND_SEARCH_BAR).fill(searchInput.SOFTWARE_TESTING);
//   await page.keyboard.press('Enter');

//   // Relevant results are shown in Search Results page
//   await expect(page.getByText(`${texts.SOFTWARE_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.REGRESSION_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.UNIT_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.SMOKE_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.STRESS_TESTING}`, { exact: true })).toBeVisible();
//   await expect(page.getByText(`${texts.TEST_AUTOMATION}`, { exact: true })).toBeVisible();

// });

// test('If clicking on a search result that is a redirect takes the users to the correct page.', async ({ page }) => {

//   // Go to Wikipedia Main Page
//   await page.goto('https://en.wikipedia.org/wiki/Main_Page');


//   // Enter 'Software Testing' into Search bar and search
//   await page.locator(mainPage.TOP_SEARCH_BAR).fill(searchInput.SOFTWARE_TESTING);
//   await page.getByRole('link', { name: `Search for pages containing ${searchInput.SOFTWARE_TESTING}` }).click();

//   // Click 'Smoke testing (software)' and user will be redirected to the correct page
//   await page.getByText(`${texts.SMOKE_TESTING}`, { exact: true }).click();
//   await expect(page.locator(searchResultsPage.PAGE_HEADING)).toHaveText(`${texts.SMOKE_TESTING}`);

//   // Enter 'Software Testing' into Search bar and search
//   await page.locator(mainPage.TOP_SEARCH_BAR).fill(searchInput.SOFTWARE_TESTING);
//   await page.getByRole('link', { name: `Search for pages containing ${searchInput.SOFTWARE_TESTING}` }).click();

//   // Click 'Regression Testing' and user will be redirected to the correct page
//   await page.getByText(`${texts.REGRESSION_TESTING}`, { exact: true }).click();
//   await expect(page.locator(searchResultsPage.PAGE_HEADING)).toHaveText(`${texts.REGRESSION_TESTING}`);

// });


