"""
TestShop — login sahifasi uchun birinchi Playwright testi.

Ishga tushirish:
    pytest                      # headless (brauzer ko'rinmaydi, tez)
    pytest --headed             # brauzer ochilib, harakatni ko'rasiz
    pytest --headed --slowmo 800   # sekinlashtirib, dars uchun eng qulay
"""

from playwright.sync_api import Page, expect

URL = "https://www.qa-academy.uz/testshop/login"


def test_muvaffaqiyatli_login(page: Page):
    # 1. Sahifani ochamiz
    page.goto(URL)

    # 2. Maydonlarni to'ldiramiz
    page.fill("#username", "student@qa-academy.uz")
    page.fill("#password", "Parol123")

    # 3. "Kirish" tugmasini bosamiz
    page.click("button[type='submit']")

    # 4. Tekshiramiz: muvaffaqiyat xabari chiqdimi?
    expect(page.locator("#successMsg")).to_be_visible()
    expect(page.locator("#successMsg")).to_contain_text("Muvaffaqiyatli kirildi")
