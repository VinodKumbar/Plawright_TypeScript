Locators -> Identify the elements in the page and perform actions on them.
DOM -> Document Object Model, a tree structure representing the page's HTML. 
DOM is the API interface provided by the browser to interact with the page.
Playwright provides built-in locators to simplify element selection and interaction.

Quick Guide
These are the recommended built-in locators.

1. page.getByRole() to locate by explicit and implicit accessibility attributes.
2. page.getByText() to locate by text content.
3. page.getByLabel() to locate a form control by associated label's text.
4. page.getByPlaceholder() to locate an input by placeholder.
5. page.getByAltText() to locate an element, usually image, by its text alternative.
6. page.getByTitle() to locate an element by its title attribute.
7. page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

CSS Selectors
Playwright also supports CSS selectors for locating elements, 

CSS -> Cascading Style Sheets, used for styling HTML elements.

2 types of CSS selectors:
1. Absolute CSS Selectors: Full path from the root element to the target element.
2. Relative CSS Selectors: Path relative to the current element, more flexible and maintainable

We use relative CSS selectors for better maintainability.

tag with id   ->  tag#id   or id
tag with class -> tag.class or .class
tag with any other attribute -> tag[attribute=value] or [attribute=value]
tag with class and attribute -> tag.class[attribute=value] or .class[attribute=value]
tag with class and id -> tag.class#id or .class#id

Note : tag is optional, if not specified, it will select all elements with the class or id.

