# Marvel J.A.R.V.I.G.

**Marvel J.A.R.V.I.G.** (Just A Rather Very Interesting Game) is a game that lets you find and discover
Marvel Comics characters based on their name, image and description!

For that, **the player answers a set of questions** regarding the **Marvel Universe** to determine if he trully knows every character. 

Moreover, **the game is fully customizable**: the player can choose the level of complexity by tweaking some parameters (Newbie, Intermediate, Master, or Custom).

### *React + Redux + Styled-Components*

JARVIG was built using [React](https://reactjs.org/), it calls the [Marvel Comics API](https://developer.marvel.com/) to fetch Marvel Characters data. The app then generates questions using that data and displays them to the player.

The architecture of the project follows [Redux](https://redux.js.org) to manage the state of the app.

The User Interface is built using [styled-components](https://github.com/styled-components/styled-components).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of contents

* [Setting up the development environment](#setting-up-the-development-environment)
* [Run the game](#run-the-game)
* [Code structure](#code-structure)
* [Testing](#testing)
* [Build for production](#build-for-production)
* [Contributing](#contributing)
* [Versioning](#versioning)
* [Creator](#creator)
* [Copyright and licence](#copyright-and-licence)

## Setting up the development environment

1. Install [Node.js and npm](https://nodejs.org/en/)

2. Install project's dependencies using npm or yarn:

```bash
$ npm install
# or
$ yarn install
```

3.   :warning: Create a config file using the sample file `src/config/index.js.dist`.
> Remove the .dist extension and replace the Marvel API public and private keys with your own.

## Run the game

```bash
$ npm start
# or
$ yarn start
```

:heavy_check_mark: You're all set! You can now view Marvel JARVIG on [http://localhost:3000](http://localhost:3000).

## Code structure

```
.
├── public/             # static public files
│  └── index.html
├── src/                # source files
│  ├── actions/         # redux action creators files
│  │  ├── __tests__/    # test directory (should be in every folder)
│  │  ...
│  ├── components/      # UI styled-components
│  ├── config/          # config files
│  ├── constants/       # constants (eg. actionType names)
│  ├── containers/      # game containers
│  │  ├── HomeScreen/
│  │  ├── PlayScreen/
│  │  ├── ResultScreen/
│  │  ├── App.js        # higher-order component
│  │  ...
│  ├── reducers/        # redux reducers
│  ├── helpers.js       # helper file for common functions
│  ├── index.js         # main entry point for react app
│  ├── media.js         # definition of responsive breaking points
│  ├── testHelpers.js   # helper file for testing
│  └── theme.js         # theme file (colors, font size, ...)
├── .env
├── .eslintrc.js        # eslint config file
├── .gitignore          # control file for git
├── gitlab.ci           # config file for gitlab ci
└── package.json        # meta data and list of project dependencies
```

## Testing

This project uses [Jest](https://facebook.github.io/jest/) to test units of code and react components.

Test files have a `.test.js` suffix or `.js` suffix in `__tests__` folder.

**Run tests in interactive mode:**

```bash
$ npm test
# or
$ yarn test
```
You will be able to visualise tests and update snapshots. [Read more about tests](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

## Build for production

Build the app for production to the `build` folder:

```bash
$ npm run build
# or
$ yarn build
```

## Contributing

> TODO

## Versioning

Marvel JARVIG is maintained under [the Semantic Versioning guidelines](http://semver.org/).

## Creator

This project was created for learning purposes, using best practices and experimenting on latest web technologies.

**Yassine Doghri**

* [https://yassine.doghri.fr](https://yassine.doghri.fr)
* [https://twitter.com/yassinedoghri](https://twitter.com/yassinedoghri)
* [https://github.com/yassinedoghri](https://github.com/yassinedoghri)

## Copyright and licence

Code and documentation copyright 2018, Yassine Doghri. Code released under the MIT License.
