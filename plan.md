# Jakat Static Website - Plan

## Project Overview
Static website for "Jakat" - a Zakat calculator for Muslims to calculate their Zakat obligation. UK-based with nisab values as of 09/10/2026:
- **Silver Nisab**: 612.36g = £896.93
- **Gold Nisab**: 87.48g = £8,885.68

## Technology Stack
- **Tailwind CSS** (v4) via CLI - no build step required, using `@tailwindcss/cli`
- **Vanilla JavaScript** - calculator logic, form handling
- **HTML5** - semantic structure
- **Pure static** - no server, no database
- **GitHub Pages / Netlify** for deployment

## Key Features

### Core Calculator Form
- **Assets** (must have been in possession over lunar year):
  - Value of Gold (grams × price/g) - in £
  - Value of Silver (grams × price/g) - in £
  - Cash: In hand and in bank accounts - in £
  - Deposited for some future purpose (e.g. Hajj) - in £
  - Given out in loans - in £
  - Business investments, shares, saving certificates, pensions - in £
  - Trade Goods/Stock value - in £

- **Liabilities**:
  - Borrowed money, goods bought on credit - in £
  - Wages due to employees - in £
  - Taxes, rent, utility bills due immediately - in £

- **Calculations**:
  - Total Assets
  - Total Liabilities
  - Net Worth = Total Assets - Total Liabilities
  - Nisab Threshold comparison (Gold vs Silver, lower applied = Silver)
  - Zakat Payable = 2.5% of Net Worth if Net Worth ≥ Nisab
  - Reset button

### Nisab Display
- Current silver nisab: 612.36g = £896.93
- Current gold nisab: 87.48g = £8,885.68
- Toggle between gold/silver nisab standards
- "Lower threshold applies" note (silver nisab is more commonly used)

### Educational Sections
- How Zakat is calculated (2.5%)
- What is Nisab and significance
- What assets are zakatable
- What can be deducted (liabilities)
- When Zakat is due (lunar year/hawl)
- Split payment options
- 8 eligible recipient categories (Quran 9:60)

### UI/UX Requirements
- **UK-focused** - pounds (£) throughout
- **Classy, clean design** - Islamic aesthetic without being overly decorative
- **Mobile-responsive** - works on all devices
- **Form validation** - inputs must be valid numbers
- **Real-time calculation** - updates as user types
- **Accessible** - semantic HTML, keyboard navigable

## Page Structure

### 1. Home/Zakat Calculator Page (Primary)
- Hero section with prominent nisab values
- Calculation form with all input fields
- Results summary section:
  - Total Assets: £0.00
  - Total Liabilities: £0.00
  - Net Worth: £0.00
  - Nisab Status: "Above Nisab" / "Below Nisab" with visual indicator
  - Zakat Payable: £0.00 (2.5%)
- "How to Calculate Zakat" accordion/collapsible
- Split payment option info

### 2. About Zakat Page
- What is Zakat (5th pillar)
- Nisab explanation and history
- Zakat rate (2.5%)
- Zakatable assets vs non-zakatable
- Who is eligible (8 categories)
- Frequently asked questions

### 3. Nisab Values Page
- Current gold nisab: 87.48g = £8,885.68
- Current silver nisab: 612.36g = £896.93
- How nisab is calculated (weight × current market price)
- Gold vs silver nisab comparison
- Scholarly differences

### 4. Donate/Contact Page
- Donate Zakat CTA
- Split payment explanation
- Muslim Aid partnership info
- Contact form

## Design Specification

### Color Palette (Classy Islamic Aesthetic)
- **Primary**: Islamic Green `#059669` (trust, growth)
- **Accent**: Islamic Gold `#d4af37` (nisab values, highlights)
- **Dark**: `#1e293b` (headings, contrast)
- **Light**: `#f8fafc` (backgrounds, forms)
- **White**: `#ffffff` (cards, sections)

### Typography
- Headings: Bold, readable size
- Body: Default system font, 16px base
- Numbers: Clear display for currency values

### Components
- Form inputs with icons
- Calculation result cards
- Toggle switches for nisab selection
- Accordion sections
- Buttons (primary: green, secondary: outline)
- Navigational elements

### Responsive Breakpoints
- Mobile: <640px - stacked form, full-width elements
- Tablet: 640-1024px - adjusted layout
- Desktop: >1024px - full form layout, side sections

## Content Plan

### Form Field Labels (UK Based, £ currency)
- "Value of Gold 0 £"
- "Value of Silver 0 £"
- "Cash: In hand and in bank accounts 0 £"
- "Deposited for some future purpose, e.g. Hajj 0 £"
- "Given out in loans 0 £"
- "Business investments, shares, saving certificates, pensions funded by money in one's possession 0 £"
- "Value of Stock 0 £" (Trade Goods)
- "Borrowed money, goods bought on credit 0 £"
- "Wages due to employees 0 £"
- "Taxes, rent, utility bills due immediately 0 £"

### Key Messages
- "Zakat is calculated at 2.5% of your total savings and assets that have been in your possession for one lunar year"
- "Nisab is the minimum amount of wealth a Muslim must own before becoming liable to pay Zakat"
- "Silver – the value of 612.36g of silver = £896.93 (lower threshold, more people qualify)"
- "Gold – the value of 87.48g of gold = £8,885.68"
- "If your total wealth reaches or exceeds the nisab threshold, Zakat becomes due"
- "Zakat is one of the Five Pillars of Islam"

### Calculations Logic
```
1. Enter all assets values
2. Enter all liability values
3. Total Assets = sum of all asset inputs
4. Total Liabilities = sum of all liability inputs
5. Net Worth = Total Assets - Total Liabilities
6. Calculate Nisab:
   - Gold Nisab = 87.48g × current gold price per gram
   - Silver Nisab = 612.36g × current silver price per gram
   - Applied Nisab = lower of gold or silver (silver = £896.93)
7. If Net Worth ≥ Applied Nisab:
   - Zakat Payable = 2.5% × Net Worth
   - Show "Zakat is obligatory"
   - Else:
   - Show "Zakat not yet obligatory"
   - Zakat Payable = £0.00
```

## Technical Implementation

### Tailwind CSS Setup
- Configuration via `tailwind.config.js`
- Base styles, components, utilities
- Custom color palette for Islamic theme
- No JavaScript framework - vanilla JS only

### JavaScript Logic (calculator.js)
- Form input event listeners
- Real-time calculation on input change
- Nisab threshold comparison
- 2.5% Zakat calculation
- Reset function
- Input validation (non-negative numbers, parse floats)

### HTML Structure
- Semantic HTML5 with proper heading hierarchy
- Form with label elements associated with inputs
- Accessible color contrast
- ARIA labels where needed

### Deployment
- GitHub Pages repository
- Or Netlify drop folder
- No build artifacts committed (generated CSS)
- Custom domain optional

## Phase Timeline

### Phase 1: Project Setup (Day 1)
- Initialize npm project
- Install Tailwind CSS v4 CLI
- Create tailwind.config.js
- Set up directory structure (src/)

### Phase 2: Core Layout & Forms (Day 2-3)
- Create index.html with calculator form
- Style all form fields with Tailwind
- Implement nisab display section
- Add educational content sections

### Phase 3: Calculator Logic (Day 4-5)
- Write calculator.js with all formulas
- Implement real-time calculation
- Add nisab comparison logic
- Implement reset functionality
- Add input validation

### Phase 4: Polish & responsiveness (Day 6)
- Make design mobile-responsive
- Add hover effects and micro-interactions
- Test all calculation scenarios
- Fix accessibility issues
- Cross-browser testing

### Phase 5: Deployment (Day 7)
- Deploy to GitHub Pages/Netlify
- Final testing
- Documentation

## Religious Accuracy Checks
- Nisab values verified: Silver 612.36g = £896.93, Gold 87.48g = £8,885.68 (as of 09/10/2026)
- 2.5% Zakat rate standard
- Silver nisab applied as lower threshold (more common scholarly opinion)
- Liabilities properly deducted from assets
- Correct calculation of net worth
- All amounts in GBP (UK-focused)

## Success Criteria
- [ ] Calculator accurately computes total assets, liabilities, net worth
- [ ] Nisab threshold (£896.93 silver) correctly compared against net worth
- [ ] Zakat payable correctly calculated as 2.5% when above nisab
- [ ] Reset function clears all fields
- [ ] Mobile-responsive on phone and tablet
- [ ] Clean, classy Islamic aesthetic
- [ ] All UK currency (£)
- [ ] No errors in console
- [ ] Accessible (keyboard navigable, color contrast)