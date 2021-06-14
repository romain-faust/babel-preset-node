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

-   [@babel/core](https://npmjs.org/package/@babel/core) ^7.14.5
-   [@babel/preset-env](https://npmjs.org/package/@babel/preset-env) ^7.14.5
-   [@babel/preset-typescript](https://npmjs.org/package/@babel/preset-typescript) ^7.14.5
-   [babel-plugin-module-resolver](https://npmjs.org/package/babel-plugin-module-resolver) ^4.1.0

## Usage

In your Babel configuration:

```json
{
	"presets": [
		[
			"@romain-faust/babel-preset-node",
			{
				"aliases": {
					"#": "./sources"
				}
			}
		]
	]
}
```

## Configuration

| Name          | Type   | Default           | Description                                                                                                                               |
| ------------- | ------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| aliases       | object |                   | A [`babel-plugin-module-resolver` alias configuration](https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md#alias) |
| targetVersion | string | `process.version` | The Node.js version to target                                                                                                             |

⚠️ When you use the `aliases` option with TypeScript, do not forget to also configure the `paths` attribute of your `tsconfig.json`.

## License

[MIT](./license.md)
