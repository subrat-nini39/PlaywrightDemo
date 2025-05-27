# Playwright TypeScript Framework (Page Object Model)

This project is a basic **Playwright framework** built using **TypeScript** and the **Page Object Model (POM)** design pattern. 

---

## 📁 Project Structure
playwright-pom-ts/
│
├── pages/ # Page Object classes
│ ├── BasePage.ts
│ ├── HomePage.ts
│ └── CartPage.ts
│
├── tests/ # All test cases
│ └── HomePageTest.spec.ts
│
├── playwright.config.ts # Playwright config
├── tsconfig.json # TypeScript config
├── package.json # Project dependencies and scripts
└── README.md # Project instructions


## Getting Started

### 1. Install Dependencies

npm install
npm run install-all

### 2. Run Tests

npm test

### 3. View HTML Report

npm run report
