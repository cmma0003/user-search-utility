# user-search-utility

This repository is a [Next.js](https://nextjs.org/) project that holds all the frontend code for the new [user-search-utility](https://user-search-utility.vercel.app/) website.

## Getting started
### Prerequisites
This project is hosted in [GitHub](https://github.com/cmma0003/user-search-utility)

In order to be able to run and contribute to this project from your local machine, make sure having the following installed:

* Node.js 22
* npm 10

### Installation
1. Create folder where the project is going to be downloaded if it does not exist `mkdir -p ${HOME}/develop`.
2. Change directory to the newly created folder `cd ${HOME}/develop`.
3. Clone repository `git clone https://github.com/cmma0003/user-search-utility.git`.
4. Change directory to the newly created folder `cd user-search-utility`.
5. Run `npm install`.
6. You can now check the code with a code editor of your choice ie. [Visual Studio Code](https://code.visualstudio.com/).

Finally, to check it all went well, start the development server by running:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Repository structure
* Root folder
  * Project README.
  * Tools/frameworks config files.
* `app`
    * App router.
    * Global styles.
* `lib`
    * Types definitions.
    * Data fetching.
* `mocks`
    * Mocks for unit testing.
* `ui`
    * UI components.
    * Fonts.

## npm scripts
#### `npm run build`
Builds the web application. Output is placed on `.next` folder.

#### `npm run dev`
Starts development server on [http://localhost:3000](http://localhost:3000).

#### `npm run start`
Run the web application in production mode.

#### `npm run lint`
Runs ESLint.

#### `npm run test`
Run unit tests.

## Tech stack
- [Next.js](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
