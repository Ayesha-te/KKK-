import { test, expect } from '@playwright/test';

test.describe('Kunjwal City Website', () => {
  test('should display the homepage with all main sections', async ({ page }) => {
    await page.goto('/');

    // Check if the page loads correctly
    await expect(page).toHaveTitle(/Kunjwal City/);

    // Test Navigation
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('text=Kunjwal City')).toBeVisible();
    await expect(page.locator('text=جہاں دل بس جائے!')).toBeVisible();

    // Test Hero Section
    await expect(page.locator('h1:has-text("Kunjwal City")')).toBeVisible();
    await expect(page.locator('text=Premium residential plots ')).toBeVisible();
    await expect(page.locator('text=DISCOVER KUNJWAL CITY')).toBeVisible();

    // Test Stats Section
    await expect(page.locator('text=500+')).toBeVisible();
    await expect(page.locator('text=Happy Families')).toBeVisible();
    await expect(page.locator('text=4.9/5')).toBeVisible();
    await expect(page.locator('text=Customer Rating')).toBeVisible();
    await expect(page.locator('text=40+')).toBeVisible();
    await expect(page.locator('text=Years Legacy')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');

    // Test navigation menu items
    const navItems = ['Home', 'About', 'Plots', 'Amenities', 'Contact'];
    
    for (const item of navItems) {
      await expect(page.locator(`nav a:has-text("${item}")`)).toBeVisible();
    }

    // Test main CTA button
    await expect(page.locator('text=Book Your Plot Today')).toBeVisible();
  });

  test('should display About section with key features', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to about section
    await page.locator('text=Where Modern Living Meets').scrollIntoViewIfNeeded();

    // Check About section content
    await expect(page.locator('text=Where Modern Living Meets Strategic Investment')).toBeVisible();
    await expect(page.locator('text=Prime Connectivity')).toBeVisible();
    await expect(page.locator('text=Investment Security')).toBeVisible();
    await expect(page.locator('text=Modern Infrastructure')).toBeVisible();
    await expect(page.locator('text=Growth Potential')).toBeVisible();
    
    // Check the testimonial quote
    await expect(page.locator('text="Every aspect of Kunjwal City has been meticulously planned"')).toBeVisible();
  });

  test('should display countdown timer section', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to countdown section
    await page.locator('text=Pre-Launch Investment Opportunity').scrollIntoViewIfNeeded();

    // Check countdown section
    await expect(page.locator('text=Pre-Launch Investment Opportunity')).toBeVisible();
    await expect(page.locator('text=Secure Tomorrow\'s Prices Today')).toBeVisible();
    await expect(page.locator('text=Only 47 plots left at pre-launch prices!')).toBeVisible();
    
    // Check countdown elements exist
    await expect(page.locator('text=days')).toBeVisible();
    await expect(page.locator('text=hours')).toBeVisible();
    await expect(page.locator('text=minutes')).toBeVisible();
    await expect(page.locator('text=seconds')).toBeVisible();
  });

  test('should display pricing section with all plot sizes', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to pricing section
    await page.locator('text=Choose Your Perfect Plot Size').scrollIntoViewIfNeeded();

    // Check pricing section
    await expect(page.locator('text=Choose Your Perfect Plot Size')).toBeVisible();
    
    // Check all three plot types
    await expect(page.locator('text=3 Marla')).toBeVisible();
    await expect(page.locator('text=Starter Homes Collection')).toBeVisible();
    await expect(page.locator('text=PKR 23.3L')).toBeVisible();
    
    await expect(page.locator('text=5 Marla')).toBeVisible();
    await expect(page.locator('text=Family Residences Collection')).toBeVisible();
    await expect(page.locator('text=PKR 38.8L')).toBeVisible();
    
    await expect(page.locator('text=7 Marla')).toBeVisible();
    await expect(page.locator('text=Executive Homes Collection')).toBeVisible();
    await expect(page.locator('text=PKR 54.3L')).toBeVisible();

    // Check savings badges
    await expect(page.locator('text=Save PKR 3L')).toBeVisible();
    await expect(page.locator('text=Save PKR 4L')).toBeVisible();
    await expect(page.locator('text=Save PKR 6L')).toBeVisible();
  });

  test('should display map section with available blocks', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to map section
    await page.locator('text=Choose Your Perfect Block & Size').scrollIntoViewIfNeeded();

    // Check map section
    await expect(page.locator('text=Choose Your Perfect Block & Size')).toBeVisible();
    await expect(page.locator('text=Available Blocks')).toBeVisible();
    
    // Check all blocks
    await expect(page.locator('text=Block A')).toBeVisible();
    await expect(page.locator('text=Block B')).toBeVisible();
    await expect(page.locator('text=Block C')).toBeVisible();
    
    // Check stats
    await expect(page.locator('text=3').first()).toBeVisible(); // Blocks count
    await expect(page.locator('text=73')).toBeVisible(); // Total plots
    await expect(page.locator('text=Sizes Available')).toBeVisible();
  });

  test('should display amenities section with all features', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to amenities section
    await page.locator('text=World-Class Amenities').scrollIntoViewIfNeeded();

    // Check amenities section
    await expect(page.locator('text=World-Class Amenities')).toBeVisible();
    await expect(page.locator('text=Premium Facilities for Modern Family Living')).toBeVisible();
    
    // Check key amenities
    await expect(page.locator('text=24/7 Security')).toBeVisible();
    await expect(page.locator('text=Uninterrupted Power')).toBeVisible();
    await expect(page.locator('text=High-Speed Internet')).toBeVisible();
    await expect(page.locator('text=Wide Roads')).toBeVisible();
    await expect(page.locator('text=Green Spaces')).toBeVisible();
    await expect(page.locator('text=Community Center')).toBeVisible();
    await expect(page.locator('text=Commercial Area')).toBeVisible();
    await expect(page.locator('text=Educational Hub')).toBeVisible();

    // Check premium feature badges
    await expect(page.locator('text=Premium Feature')).toBeVisible();
    
    // Check development progress
    await expect(page.locator('text=Development Progress')).toBeVisible();
    await expect(page.locator('text=Infrastructure development')).toBeVisible();
    await expect(page.locator('text=100% Completed')).toBeVisible();
  });

  test('should display customer stories section', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to customer stories section
    await page.locator('text=Customer Stories').scrollIntoViewIfNeeded();

    // Check customer stories section
    await expect(page.locator('text=Customer Stories')).toBeVisible();
    await expect(page.locator('text=What Our Family Members Say About Us')).toBeVisible();
    
    // Check testimonial
    await expect(page.locator('text=Kunjwal City exceeded all our expectations')).toBeVisible();
    await expect(page.locator('text=Ahmed & Fatima Khan')).toBeVisible();
    await expect(page.locator('text=Lahore • Invested 2023')).toBeVisible();
    
    // Check stats
    await expect(page.locator('text=500+').nth(1)).toBeVisible(); // Second occurrence in customer stories
    await expect(page.locator('text=100%')).toBeVisible();
    await expect(page.locator('text=Transparent Dealing')).toBeVisible();
  });

  test('should display contact section with form', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to contact section
    await page.locator('text=Get In Touch').scrollIntoViewIfNeeded();

    // Check contact section
    await expect(page.locator('text=Get In Touch')).toBeVisible();
    await expect(page.locator('text=Ready to Secure Your Family\'s Future?')).toBeVisible();
    
    // Check office hours
    await expect(page.locator('text=Office Hours')).toBeVisible();
    await expect(page.locator('text=Mon - Sat: 9AM - 6PM')).toBeVisible();
    
    // Check form elements
    await expect(page.locator('text=Send Us A Message')).toBeVisible();
    await expect(page.locator('input[placeholder="Your first name"]')).toBeVisible();
    await expect(page.locator('input[placeholder="Your last name"]')).toBeVisible();
    await expect(page.locator('input[placeholder="your.email@example.com"]')).toBeVisible();
    await expect(page.locator('input[placeholder="+92 300 000 0000"]')).toBeVisible();
    
    // Check response time indicators
    await expect(page.locator('text=2 Hours')).toBeVisible();
    await expect(page.locator('text=Response Time')).toBeVisible();
  });

  test('should display footer with all information', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();

    // Check footer content
    await expect(page.locator('footer text=Kunjwal City')).toBeVisible();
    await expect(page.locator('footer text=جہاں دل بس جائے!')).toBeVisible();
    
    // Check pricing in footer
    await expect(page.locator('footer text=Plot Pricing')).toBeVisible();
    await expect(page.locator('footer text=3 Marla PKR 23.25 Lakh')).toBeVisible();
    await expect(page.locator('footer text=5 Marla PKR 38.75 Lakh')).toBeVisible();
    await expect(page.locator('footer text=7 Marla PKR 54.25 Lakh')).toBeVisible();
    
    // Check contact information
    await expect(page.locator('footer text=Contact Information')).toBeVisible();
    await expect(page.locator('footer text=Head Office')).toBeVisible();
    await expect(page.locator('footer text=13-km, Sargodha Road')).toBeVisible();
    await expect(page.locator('footer text=Gujrat, Punjab')).toBeVisible();
    
    // Check copyright
    await expect(page.locator('footer text=© 2024 Kunjwal City. All rights reserved. | A project by AYS Developers')).toBeVisible();
  });

  test('should have responsive design on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check that mobile navigation hamburger exists
    await expect(page.locator('button[aria-label="Toggle menu"]')).toBeVisible();
    
    // Check that main content is still visible on mobile
    await expect(page.locator('h1:has-text("Kunjwal City")')).toBeVisible();
    await expect(page.locator('text=جہاں دل بس جائے!')).toBeVisible();
  });

  test('should handle mobile navigation menu', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Click mobile menu button
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    // Check that mobile menu items are visible
    await expect(page.locator('text=Home').nth(1)).toBeVisible(); // Second occurrence in mobile menu
    await expect(page.locator('text=About').nth(1)).toBeVisible();
    await expect(page.locator('text=Plots').nth(1)).toBeVisible();
    await expect(page.locator('text=Amenities').nth(1)).toBeVisible();
    await expect(page.locator('text=Contact').nth(1)).toBeVisible();
  });

  test('should verify WhatsApp button functionality', async ({ page }) => {
    await page.goto('/');
    
    // Check if WhatsApp button is present (it should be fixed positioned)
    await expect(page.locator('[class*="whatsapp"]').or(page.locator('text=WhatsApp')).or(page.locator('[href*="whatsapp"]'))).toBeVisible();
  });
});