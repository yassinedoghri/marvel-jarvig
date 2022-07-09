<div align="center"><img width="150px" alt="Marvel JARVIG logo: the letter J in the center of a dynamic background in the style of a comics." src="https://raw.githubusercontent.com/yassinedoghri/marvel-jarvig/main/src/containers/icon-jarvig.svg" /></div>

<h1 align="center">Marvel JARVIG</h1>

<div align="center">

  **Marvel JARVIG (Just A Rather Very Interesting Game) is a game that lets you find and discover Marvel Comics characters based on their name, image and description!**

[![deploy-badge]][deploy]&nbsp;[![test-suite-badge]][test-suite]&nbsp;[![maintainability-badge]][maintainability]&nbsp;[![test-coverage-badge]][test-coverage]&nbsp;[![license-badge]][license]&nbsp;[![stars-badge]][stars]

</div>

---

For that, **the player answers a set of questions** regarding the **Marvel Universe** to determine if he truly knows every character.

Moreover, **the game is fully customizable**: the player can choose the level of complexity by tweaking some parameters (Newbie, Intermediate, Master, or Custom).

## React + Redux + Styled-Components

Marvel JARVIG was built using [React](https://reactjs.org/), it calls the [Marvel Comics API](https://developer.marvel.com/) to fetch Marvel Characters data. The app then generates questions using that data and displays them to the player.

The architecture of the project follows [Redux](https://redux.js.org) to manage the state of the app.

The User Interface is built using [styled-components](https://github.com/styled-components/styled-components).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setting up the development environment

1. Install [Node.js](https://nodejs.org/en/) & [yarn](https://yarnpkg.com/lang/en/docs/install)

2. Install the project dependencies using yarn:

    ```bash
    yarn
    ```

3. :warning: Create a config file using the sample file `src/config/index.js.dist`.

> Remove the .dist extension and replace the Marvel API public and private keys with your own.
> You can get the those keys on the [Marvel developer portal](https://developer.marvel.com)

## Run the game

```bash
yarn start
```

:heavy_check_mark: You're all set! You can now view Marvel JARVIG on [http://localhost:3000](http://localhost:3000).

## Code structure

```bash
.
├── public/             # static public files
│  └── index.html
├── src/                # source files
│  ├── actions/         # redux action creators files
│  │  ├── __tests__/    # test directory (should be in every folder)
│  │  ...
│  ├── components/      # UI styled-components
│  ├── config/          # config files
│  ├── constants/       # constants (eg. actionType names, routes)
│  ├── containers/      # game containers
│  │  ├── HomeScreen/
│  │  ├── PlayScreen/
│  │  ├── ResultScreen/
│  │  ├── App.js        # higher-order component
│  │  ...
│  ├── reducers/        # redux reducers
│  ├── utils/           # utility files (eg. helpers.js, style utils, etc.)
│  ├── index.js         # main entry point for react app
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
yarn test
```

You will be able to visualise tests and update snapshots. [Read more about tests](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

## Build for production

Build the app for production to the `build` folder:

```bash
yarn build
```

## Contributing

Love Marvel JARVIG and would like to help? Check out the [contribution guidelines for this project](./CONTRIBUTING.md), everything should be there!

## Versioning

Marvel JARVIG is maintained under [the Semantic Versioning guidelines](http://semver.org/).

## Creator

This project was created for learning purposes, using best practices and experimenting on latest web technologies.

### Yassine Doghri

- [https://yassinedoghri.com](https://yassinedoghri.com)
- [https://twitter.com/yassinedoghri](https://twitter.com/yassinedoghri)
- [https://github.com/yassinedoghri](https://github.com/yassinedoghri)

## Copyright and licence

Code and documentation copyright 2018, Yassine Doghri. Code released under the MIT License.

[deploy]: https://github.com/yassinedoghri/marvel-jarvig/actions/workflows/deploy.yml
[deploy-badge]:
  https://img.shields.io/github/workflow/status/yassinedoghri/marvel-jarvig/marvel-jarvig-deploy/main?label=deploy
[test-suite]: https://github.com/yassinedoghri/marvel-jarvig/actions/workflows/test.yml
[test-suite-badge]:
  https://img.shields.io/github/workflow/status/yassinedoghri/marvel-jarvig/marvel-jarvig-test-suite/main?label=test%20suite
[maintainability]: https://codeclimate.com/github/yassinedoghri/marvel-jarvig/maintainability
[maintainability-badge]:
  https://api.codeclimate.com/v1/badges/ead146f32706746e5e79/maintainability
[test-coverage]: https://codeclimate.com/github/yassinedoghri/marvel-jarvig/test_coverage
[test-coverage-badge]:
  https://api.codeclimate.com/v1/badges/ead146f32706746e5e79/test_coverage
[license]: https://opensource.org/licenses/MIT
[license-badge]:
  https://img.shields.io/badge/License-MIT-blue.svg
[stars]: https://github.com/yassinedoghri/marvel-jarvig/stargazers
[stars-badge]:
  https://img.shields.io/github/stars/yassinedoghri/marvel-jarvig?style=social
