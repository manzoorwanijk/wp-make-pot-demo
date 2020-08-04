module.exports = function (api) {
	api.cache(false);
	const presets = ['react-app', '@babel/preset-env'];

	const plugins = [
		[
			'@babel/plugin-proposal-class-properties',
			{
				loose: true,
			},
		],
	];
	return {
		presets,
		plugins,
		env: {
			production: {
				plugins: [
					[
						'@wordpress/babel-plugin-makepot',
						{
							output: 'src/languages/custom.js.pot',
						},
					],
				],
			},
		},
	};
};
