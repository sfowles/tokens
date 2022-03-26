# Design Tokens

Automates the generation of design tokens from my [Figma master stylesheet](https://www.figma.com/file/konYAsITsED6LMleKTCVuP/Tokens?node-id=0%3A1).

Built using:

- Figmagic
- Amazon Style Dictionary

Extracts design tokens for colors, typography (line heights, font sizes, font families, font weights), borders, breakpoints, shadows, spacing, z-index, and SVG assets. A typical use case for the generated documents is to use the extracted values as a token base in CSS systems that support external values (such as Styled Components, other CSS-in-JS libraries, CSS3, or Sass).

Design tokens are currently extracted in the following formats:

- JSON objects
- JS/TS modules
- SCSS variables
- CSS3 variables

This uses ESM imports, so make sure you have a recent Node version, preferably version 10+.

### Installation

- Clone the repo
- Step into the project root directory, and run `npm setup` to add it globally to your system
- Run `npm run tokens` to generate the tokens
- Once you have generated the tokens, uptick the version appropriately and run `npm publish` to publish to NPM.

# Including tokens

It's very easy to include design tokens in your projects using any of the following methods. The goal is to provide developers with a toolset that can be used across languages but that is always consistent. This is achieved by generating all of the tokens from a single source in Figma.

## SCSS

- Install the latest tokens package from NPM as a dev dependency `npm i @fowles/tokens --save-dev` ([https://www.npmjs.com/package/@fowles/tokens](https://www.npmjs.com/package/@fowles/tokens))
- Import the tokens into your project using `@import '~@fowles/tokens/_scss/variables';`
- Now you have access to variables such as `$white` and `$b500`

## JS/TS Modules (Recommeded for Styled Components)

- Install the latest tokens package from NPM as a dev dependency `npm i @fowles/tokens --save-dev` ([https://www.npmjs.com/package/@fowles/tokens](https://www.npmjs.com/package/@fowles/tokens))
- Import the tokens into your project using (ex: `import color from '@fowles/tokens/js/color';`)
- Now you have access to colors within the color module, such as `color.white` and `color.b500`.

## Structure

- `./_scss` will contain a SCSS variables token file
- `./css` will contain a CSS3 variables token file
- `./json` will contain JSON object token files
- `./js` will contain JS and TS module token files
