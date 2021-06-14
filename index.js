module.exports = function (api, options = {}) {
	const { aliases, targetVersion = process.version } = options

	const plugins = []

	if (aliases) {
		plugins.push([
			'babel-plugin-module-resolver',
			{
				alias: aliases,
			},
		])
	}

	return {
		plugins,
		presets: [
			[
				'@babel/preset-env',
				{
					targets: {
						node: targetVersion,
					},
				},
			],
			'@babel/preset-typescript',
		],
	}
}
