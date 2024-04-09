# Apply Digital - Cypress
Showcasing my automation skills using Cypress for Apply Digital enterprise.

# Executing Tests

Open Cypress project
``npx cypress open``

Open Cypress in headless mode
``npx cypress run``

## Folder Structure
```
├── e2e
│   └── cart.cy.js
│   └── contact-us.cy.js
│   └── user.cy.js
├── fixtures
│   └── example.pdf
│   └── urls.js
│   └── user.js
├── support
│   ├── checkout
│   │   └── commands.js
│   │   └── data.js

```
- e2e: files to executing tests.
- fixtures: 
    - ``urls.js`` groups the routes for project
    - ``user.js`` is a global user data.  
- support: All logic of tests
    -  Each folder inside represents a page on the website (this is relative, depending on the project it may make more sense in another way, grouping by sections, for example)
    -  ``commands.js`` is the logic file of test.
    -  ``data.js`` is the data used in tests.

## Patterns
This project uses the Page Objects pattern.

Variables follow the camelCase pattern: ``calculateTotalAmount``

Preference for using attributes aimed at QA: ``data-qa="signup-name"``

### Buttons and Links
I always prefer to locate elements by text because if an element changes, it won't break the test code.

Example:

``<button type="button" class="btn btn-default cart">
    <i class="fa fa-shopping-cart"></i>Add to cart
</button>``

Version without text
- ``cy.get('button').find('[class=fa fa-shopping-cart]').click();``

Version with text
- ``cy.get('button').contains('Add to cart').click();``

In addition to being more readable, this also reduces maintenance in the test code since these elements can change easily.

## Random Data
The faker.js library is available for generating random data for tests. Using dynamic data tests different possibilities and ensures that the test is more realistic. For example, I can ensure that the created user logs in correctly.

How-to-use:
- Import: ``import { faker } from '@faker-js/faker';``
- Use the library, for example: ``faker.person.firstName();``

## Generic Functions
Usually, when functions are very generic, we can create customized functions for use throughout the project, such as the ``clickInMenuOption()`` function that allows clicking on a menu item.

The path project is: ``cypress/support/commands.js``

Usage Example: ``cy.clickInMenuOption()``
