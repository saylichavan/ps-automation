# ps-automation: Automate [The internetApp](https://the-internet.herokuapp.com/login).

## Run application

Clone the repository

``` bash
git clone https://github.com/saylichavan/ps-automation.git
```

Install dependencies

``` bash
npm install
```

Run test

``` bash
npm test
```

Folder Structure

    ├── ...
    │
    ├── lib                         # Helper methods
    │   ├── basePage.js             # Generic functionality for tests
    │   └── login.js                # Login page testing functionality
    │
    ├── test                        # Test suite
    │   └── login.test.js           # Testing on login page
    │
    ├── utils                       # Utility files for testing
    │   ├── fakeData.js             # Generating random keyword for searching
    │   └── locator.js              # HTML and CSS identifier for elements to test
    ├── ...

## License

MIT
