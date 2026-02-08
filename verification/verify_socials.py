from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:8080")

    # Wait for the page to load
    page.wait_for_load_state("networkidle")

    # Take a screenshot of the navigation bar
    page.screenshot(path="verification/navbar.png", clip={"x": 0, "y": 0, "width": 1280, "height": 100})

    # Take a full page screenshot just in case
    page.screenshot(path="verification/full_page.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
