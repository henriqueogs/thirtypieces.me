from pathlib import Path
from playwright.sync_api import sync_playwright
import json
import re
import os
base = os.environ.get('SEO_TEST_URL', 'http://127.0.0.1:8892')

root = Path(__file__).resolve().parents[1]
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, channel='msedge')
    for route, lang in [('/', 'pt-BR'), ('/en/', 'en')]:
        context = browser.new_context(locale='en-US', viewport={'width':390,'height':844}, reduced_motion='reduce')
        page = context.new_page()
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        assert page.goto(base + route).status == 200
        page.wait_for_load_state('networkidle')
        assert page.locator('html').get_attribute('lang') == lang
        assert page.locator('link[rel=canonical]').get_attribute('href') == 'https://thirtypieces.me' + route
        assert len(json.loads(page.locator('script[type="application/ld+json"]').text_content())) > 5
        assert page.locator('h1').count() == 1
        assert page.locator('footer.about-work').count() == 1
        assert page.locator('main#story').count() == 1
        page.locator('.card').first.focus()
        page.keyboard.press('Enter')
        assert page.locator('#overlay').is_visible()
        page.keyboard.press('Escape')
        assert not page.locator('#overlay').is_visible()
        assert not errors, errors
        page.goto(base + route)
        page.wait_for_load_state('networkidle')
        page.screenshot(path=str(root / ('seo-' + lang + '-mobile.png')))
        context.close()
        context = browser.new_context(java_script_enabled=False)
        page = context.new_page()
        page.goto(base + route)
        assert page.locator('.bootcover').evaluate('(el) => getComputedStyle(el).display') == 'none'
        assert page.locator('.deposition').first.is_visible()
        assert page.locator('.deposition').count() == 5
        context.close()
        print('PASS', route, 'metadata, language, keyboard dialog, no-JS reading')
    page = browser.new_page(viewport={'width':1440,'height':900})
    page.goto(base + '/')
    page.wait_for_load_state('networkidle')
    page.screenshot(path=str(root / 'seo-desktop.png'))
    page.locator('.langsel a[href="/en/"]').click()
    page.wait_for_load_state('networkidle')
    assert page.locator('html').get_attribute('lang') == 'en'
    browser.close()
print('PASS language navigation')

