# SAS Frontend Take-Home Assignment

**IMPORTANT**: you can choose any technology stack to implement this assignment. We will consider exclusively the quality of your project (technology and product-wise) to evaluate your work. We've added a project structure in this repository (a buildwith react, redux, jest, styled-components and typescript) to save you time if you want to use it. If you prefer another stack, feel free to use it.

### Artist Revisions Head to Head Screen

![Aritst Head to Head Plan Mockup Desktop](https://i.imgur.com/slPsM3d.png)

You will build a screen where the user will compare two artists and their works, and their revisions over time.
In it, the users choose (i) the two authors they want to compare,(ii) the number of recent works they'd like from each author and (iii) if they'd like to include the top work of each author.

You will also build (iv) a line graph depicting the revision counts of the artists latest works and optionally their best seller. It should show the works with their titles in order of release with a line of a different color for each author and a line showing the average of the results.

When the users change the value of any of the inputs, the graph should be updated and displayed to them.

Feel free to use the [Open Library API](https://openlibrary.org/developers/api) and/or the included Postman collection.

# Development Instructions

### Evaluation
Be aware that SAS will mainly take into consideration the following evaluation criteria:
* How clean and organized your code is;
* How good your automated tests are, i.e.: qualitative over quantitative (in case of usage of this base project, feel free to choose between jest or testing library);
* If you implemented the business rules correctly.
* How close your page is to the intent of the mockups;

#### Author inputs

The Author input component should:

- Allow only alphabetical characters
- Display the author with proper capitalization

#### Number of Works input

The number of works input component should:

- Allow only numerical(integer) positive inputs up to 1
- When clicking on the arrow buttons it should go up and down one value
- On focused, the users should be able to increase or decrease the number by typing the Up and Down arrow keys on the keyboard

#### Include Best Seller input

The include best seller input component should:

- Start checked by default

# Delivery Instructions

Be prepared to deliver either a .zip of your code or a link to your repository on the day of the interview and make sure to make it public.

# Usage

This project requires the latest LTS version of NodeJS and you may need to install the yarn as global dependency
```bash
npm install -g yarn
```

After you have cloned this repo and install the yarn, install the dependencies with:

```
yarn install
```

You can then start the application running:

```
yarn start
```

That's it. Just Access `http://localhost:3000` in your browser.

### Linting and Format

```
yarn lint
yarn format
```

### Testing

```
yarn test
```
