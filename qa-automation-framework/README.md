# QA Automation Framework

This project is an intermediate-level QA automation framework built using JavaScript and Selenium WebDriver. It is designed to test the functionality of a sample e-commerce web application.

## Features

- Automated test cases for:
  - User login and registration
  - Product search functionality
  - Adding items to the cart
  - Checkout process
- Test data management using JSON files
- Detailed test reporting using Mocha Awesome
- CI/CD integration support

## Prerequisites

- Node.js installed on your system
- Chrome browser installed
- ChromeDriver (ensure it matches your Chrome version)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd qa-automation-framework
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

To execute the test cases, run the following command:
```bash
npm test
```

## Project Structure

```
qa-automation-framework/
│
├── data/                # Test data in JSON format
│   └── testData.json
│
├── tests/               # Test cases
│   └── login.test.js
│
├── utils/               # Utility functions
│
├── package.json         # Project configuration and dependencies
│
└── README.md            # Project documentation
```

## Future Enhancements

- Add more test cases for other functionalities (e.g., product search, cart, checkout).
- Integrate with CI/CD pipeline using GitHub Actions or Jenkins.
- Add support for multiple browsers.
- Implement parallel test execution.

## License

This project is licensed under the MIT License.