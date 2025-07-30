for fetching data from the database, we can use the following code snippet:

1. Install mysql2 package:
```bash
npm install mysql2
```

2. Create a file named `db.ts` to handle database connections and queries:

```Typescript
import { createConnection } from 'mysql2/promise';

const connection = await createConnection({
  host: 'localhost',
  user: 'your_username',
  database: 'your_database',
  password: 'your_password',
});

const [rows] = await connection.execute('SELECT * FROM your_table');
console.log(rows);

await connection.end();
```
***********************************************************************************************************************************
craete 2 more pages 
Product
Cart

**********************************************************************************************************************************

Hooks concept
```typescript

1. beforeEach: This hook runs before each test in the file. It is typically used to set up the environment, such as navigating to a specific page or logging in.
2. afterEach: This hook runs after each test in the file. It is often used to clean up the environment, such as logging out or resetting the state.
```

************************************************************************************************************************************

Tagging tests in Playwright allows you to categorize and filter tests based on specific criteria. This is useful for running subsets of tests based on their tags.

@Sanity: This tag indicates that the test is part of a sanity check, which is a quick verification to ensure that the basic functionality of the application is working as expected.
@Regression: This tag indicates that the test is part of a regression suite, which is used to verify that previously developed and tested features still work after changes have been made to the codebase.


npm run test:sanity
```
**************************************************************************************************************************************

Allure Reporting in Playwright is a powerful feature that allows you to generate detailed and visually appealing reports for your test runs. Allure provides insights into test execution, including passed, failed, and skipped tests, along with detailed logs and screenshots.

command to install Allure:
```bash
npm install -g allure-commandline --save-dev

Command to generate Allure report:
```bash
npx allure generate ./allure-results --clean && npx allure open 
```

**********************************************************************************************************************
In Playwright with TypeScript, you can use .env files to manage environment-specific variables such as URLs, credentials, or API keys. This is helpful to avoid hardcoding sensitive information in your codebase
```typescript
npm install dotenv
```
```typescript
npm install --save-dev cross-env
```
**********************************************************************************************************************
Test data using Faker.js is a common practice in automated testing to generate realistic and random data for testing purposes. Faker.js is a library that allows you to create fake data such as names, addresses, phone numbers, and more.
```typescript
npm install faker
```
```typescript
import { faker } from '@faker-js/faker'
// Example of generating fake data
const randomName = faker.name.findName(); // Generates a random name
const randomEmail = faker.internet.email(); // Generates a random email address
const randomAddress = faker.address.streetAddress(); // Generates a random street address
```