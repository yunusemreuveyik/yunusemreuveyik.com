# Accessibility Testing Guide

This guide covers how to test accessibility features, including Windows theme changes and High Contrast Mode.

## 🪟 Windows Theme Testing

### Testing Dark/Light Mode

Your site uses `next-themes` with `enableSystem` which automatically detects Windows theme preferences.

#### Method 1: Change Windows Theme (Recommended)

1. **Open Windows Settings**
   - Press `Win + I` or click Start → Settings

2. **Navigate to Personalization**
   - Go to: **Personalization** → **Colors**
   - Or search for "Colors" in Settings

3. **Change Color Mode**
   - Under "Choose your mode", select:
     - **Light** - Tests light mode
     - **Dark** - Tests dark mode

4. **Test Your Website**
   - Refresh your website (`localhost:3000`)
   - The site should automatically switch to match Windows theme
   - Verify all components render correctly:
     - Text is readable
     - Contrast is sufficient
     - Images/logos are visible
     - Interactive elements are clear

#### Method 2: Manual Theme Toggle

1. **Use the Theme Toggle Button**
   - Click the moon/sun icon in the header
   - This manually overrides system preference
   - Test both light and dark modes

2. **Verify System Detection**
   - Set theme to "system" (if available)
   - Change Windows theme → website should update automatically

### What to Test in Dark/Light Mode

- ✅ **Text Readability**: All text should be clearly readable
- ✅ **Contrast Ratios**: Text should meet WCAG AA (4.5:1) minimum
- ✅ **Images**: Logos and images should be visible in both modes
- ✅ **Interactive Elements**: Buttons, links, and inputs should be clearly visible
- ✅ **Focus Indicators**: Focus rings should be visible in both modes
- ✅ **Gradients**: Gradient text should work in both themes
- ✅ **Borders**: Card borders and dividers should be visible

---

## 🎨 Windows High Contrast Mode Testing

High Contrast Mode is a Windows accessibility feature that increases contrast for users with vision impairments.

### Enabling High Contrast Mode

#### Method 1: Windows Settings

1. **Open Windows Settings**
   - Press `Win + I`

2. **Navigate to Accessibility**
   - Go to: **Accessibility** → **Contrast themes**
   - Or search for "High contrast"

3. **Enable High Contrast**
   - Toggle **"Contrast themes"** to **On**
   - Select a theme:
     - **Aquatic** (blue)
     - **Desert** (tan)
     - **Dusk** (purple)
     - **Night sky** (dark)
   - Click **Apply**

4. **Test Your Website**
   - Refresh your website
   - Windows will override CSS colors with high contrast colors
   - Verify:
     - All content is still readable
     - Interactive elements are distinguishable
     - No content disappears

#### Method 2: Keyboard Shortcut

1. **Press `Left Alt + Left Shift + Print Screen`**
   - This toggles High Contrast Mode instantly
   - Press again to disable

### What to Test in High Contrast Mode

- ✅ **Text Visibility**: All text should be readable (Windows overrides colors)
- ✅ **Interactive Elements**: Buttons and links should be clearly visible
- ✅ **Focus Indicators**: Focus rings should still work (may be overridden)
- ✅ **Images**: Images should still be visible (may be inverted)
- ✅ **Layout**: Page layout should not break
- ✅ **Functionality**: All features should still work

### CSS Media Query Support

Your site should respect Windows High Contrast Mode using the `prefers-contrast` media query:

```css
@media (prefers-contrast: high) {
  /* High contrast styles */
  /* Increase border widths */
  /* Ensure sufficient contrast */
}
```

**Note**: Currently, your site relies on Windows' automatic color overrides. Consider adding explicit high contrast styles for better control.

---

## ⌨️ Keyboard Navigation Testing

### Basic Keyboard Testing

1. **Tab Navigation**
   - Press `Tab` to move forward through interactive elements
   - Press `Shift + Tab` to move backward
   - Verify focus indicators are visible

2. **Enter/Space**
   - Press `Enter` or `Space` to activate buttons/links
   - Test all interactive elements

3. **Escape Key**
   - Press `Escape` to close:
     - Mobile menu
     - Locale switcher dropdown
   - Verify focus returns appropriately

4. **Arrow Keys** (if applicable)
   - Test in dropdowns and menus
   - Currently, locale switcher doesn't support arrow keys (can be improved)

### Keyboard Testing Checklist

- [ ] All interactive elements are reachable via Tab
- [ ] Focus order is logical (top to bottom, left to right)
- [ ] Focus indicators are clearly visible
- [ ] Skip to main content link appears on first Tab
- [ ] Mobile menu can be opened/closed with keyboard
- [ ] Escape key closes modals/dropdowns
- [ ] No keyboard traps (can navigate away from all elements)

---

## 🗣️ Screen Reader Testing

### Windows Screen Readers

#### NVDA (Free, Recommended)

1. **Download NVDA**
   - Visit: https://www.nvaccess.org/download/
   - Install and run

2. **Test Your Website**
   - Navigate with arrow keys
   - Use NVDA commands:
     - `H` - Next heading
     - `K` - Next link
     - `B` - Next button
     - `L` - Next list

3. **Verify**
   - All content is announced
   - ARIA labels are read correctly
   - Navigation is logical
   - Interactive elements are identified

#### Windows Narrator (Built-in)

1. **Enable Narrator**
   - Press `Win + Ctrl + Enter`
   - Or: Settings → Accessibility → Narrator

2. **Navigate**
   - Use arrow keys or Narrator commands
   - Test all pages and components

### Screen Reader Checklist

- [ ] Page title is announced
- [ ] Headings are properly structured (h1, h2, etc.)
- [ ] Links have descriptive text
- [ ] Buttons have accessible names (aria-label or text)
- [ ] Form inputs have labels
- [ ] ARIA landmarks are announced (header, nav, main)
- [ ] Skip link is announced first
- [ ] Mobile menu state is announced (expanded/collapsed)

---

## 🎯 Color Contrast Testing

### Online Tools

1. **WebAIM Contrast Checker**
   - Visit: https://webaim.org/resources/contrastchecker/
   - Enter foreground and background colors
   - Verify WCAG AA (4.5:1) or AAA (7:1) compliance

2. **Chrome DevTools**
   - Open DevTools (`F12`)
   - Inspect element
   - Check "Computed" tab for color values
   - Use contrast checker tool

3. **axe DevTools** (Browser Extension)
   - Install from Chrome Web Store
   - Run automated contrast checks

### Manual Testing

1. **Test Text Colors**
   - Light mode: Dark text on light background
   - Dark mode: Light text on dark background
   - Verify all text combinations meet 4.5:1 ratio

2. **Test Interactive Elements**
   - Buttons, links, inputs
   - Focus states
   - Hover states

---

## 🔍 Automated Testing Tools

### Browser Extensions

1. **axe DevTools**
   - Chrome/Firefox extension
   - Automated accessibility scanning
   - Install: https://www.deque.com/axe/devtools/

2. **WAVE** (Web Accessibility Evaluation Tool)
   - Chrome/Firefox extension
   - Visual accessibility feedback
   - Install: https://wave.webaim.org/extension/

3. **Lighthouse** (Built into Chrome)
   - Open DevTools (`F12`)
   - Go to "Lighthouse" tab
   - Run "Accessibility" audit
   - Score should be 90+ for good accessibility

### Command Line Tools

1. **pa11y**

   ```bash
   npm install -g pa11y
   pa11y http://localhost:3000
   ```

2. **axe-core CLI**
   ```bash
   npm install -g @axe-core/cli
   axe http://localhost:3000
   ```

---

## 📋 Complete Testing Checklist

### Theme & Contrast

- [ ] Light mode: All text readable, sufficient contrast
- [ ] Dark mode: All text readable, sufficient contrast
- [ ] Windows High Contrast Mode: Site remains functional
- [ ] Theme toggle works correctly
- [ ] System theme detection works

### Keyboard Navigation

- [ ] Tab through all interactive elements
- [ ] Focus indicators visible
- [ ] Skip link appears on first Tab
- [ ] Escape key closes modals
- [ ] No keyboard traps

### Screen Readers

- [ ] Tested with NVDA or Narrator
- [ ] All content announced correctly
- [ ] ARIA labels work
- [ ] Navigation is logical

### Visual Testing

- [ ] Zoom to 200%: Content remains usable
- [ ] Text resizing: No horizontal scrolling
- [ ] Focus indicators: Clearly visible
- [ ] Color contrast: Meets WCAG AA standards

### Functional Testing

- [ ] All features work with keyboard only
- [ ] All features work with screen reader
- [ ] Mobile menu accessible
- [ ] Forms accessible (if any)

---

## 🚀 Quick Test Commands

### Test Theme Changes

```bash
# 1. Start dev server
pnpm dev

# 2. Change Windows theme (Win + I → Personalization → Colors)
# 3. Refresh browser - site should update automatically
```

### Test High Contrast

```bash
# 1. Enable High Contrast (Left Alt + Left Shift + Print Screen)
# 2. Refresh browser
# 3. Verify site remains functional
```

### Run Lighthouse Audit

```bash
# 1. Open Chrome DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Select "Accessibility"
# 4. Click "Generate report"
# 5. Review accessibility score and issues
```

---

## 📚 Additional Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [NVDA Screen Reader](https://www.nvaccess.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

---

## 💡 Tips

1. **Test Early and Often**: Test accessibility during development, not just at the end
2. **Use Multiple Tools**: Combine automated tools with manual testing
3. **Test with Real Users**: If possible, test with users who rely on assistive technologies
4. **Keep It Simple**: Simple, semantic HTML is often more accessible than complex custom components
5. **Document Issues**: Keep track of accessibility issues and fixes
