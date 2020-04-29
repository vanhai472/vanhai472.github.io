const path = require("path");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

module.exports = withSass(
	withCss({
		distDir: "../.dist",
		// useFileSystemPublicRoutes: true,
		webpack: (config, { dev, defaultLoaders }) => {
			config.module.rules.push({
				test: /\.+(js)$/,
				loader: defaultLoaders.babel,
				include: path.resolve(__dirname, "../src"),
			});

			config.plugins.push(
				new FilterWarningsPlugin({
					exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
				})
			);

			return config;
		},
	})
);
