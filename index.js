module.exports = {
	plugins: ['babel-plugin-tsconfig-paths-module-resolver'],
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: process.version,
				},
			},
		],
		[
			'@babel/preset-typescript',
			{
				allowDeclareFields: true,
				onlyRemoveTypeImports: true,
			},
		],
	],
}
