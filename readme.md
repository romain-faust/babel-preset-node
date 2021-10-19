# @romain-faust/babel-preset-node

[Babel](https://babeljs.io) preset for [Node.js](https://nodejs.org).

## Installation

_With NPM:_

```bash
npm install --save-dev @romain-faust/babel-preset-node
```

_With Yarn:_

```bash
yarn add --dev @romain-faust/babel-preset-node
```

## Dependencies

-   [@babel/core](https://npmjs.org/package/@babel/core) ^7.15.8
-   [@babel/preset-env](https://npmjs.org/package/@babel/preset-env) ^7.15.8
-   [@babel/preset-typescript](https://npmjs.org/package/@babel/preset-typescript) ^7.15.0
-   [babel-plugin-tsconfig-paths-module-resolver](https://npmjs.org/package/babel-plugin-tsconfig-paths-module-resolver) ^1.0.3

## Usage

In your Babel configuration:

<!-- prettier-ignore -->
```json
{
    "presets": ["@romain-faust/node"]
}
```

## License

[MIT](license.md)
