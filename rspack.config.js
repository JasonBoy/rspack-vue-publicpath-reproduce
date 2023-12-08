const { VueLoaderPlugin } = require("vue-loader");


const swcOptions = {
  jsc: {
    parser: {
      syntax: 'typescript'
    },
    target: 'es2015'
  }
}
const isProd = process.env.NODE_ENV === 'production'
/** @type {import('@rspack/cli').Configuration} */
const config = {
	context: __dirname,
	entry: {
		main: "./src/main.ts"
	},
	output: {
		clean: true,
		filename: '[name].[contenthash:8].js'
	},
	builtins: {
		html: [
			{
				template: "./index.html"
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	devtool: false,
	plugins: [new VueLoaderPlugin()],
	resolve: {
		extensions: [".vue", "..."]
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
        options: {
          experimentalInlineMatchResource: true,
          compilerOptions: {
            whitespace: 'condense'
          }
        }
			},
			{
				resourceQuery: /lang=(t|j)s/,
        loader: 'builtin:swc-loader',
        options: {
          sourceMap: !isProd,
          ...swcOptions
        },
        type: 'javascript/auto'
			},
			{
        resourceQuery: /lang=(t|j)s/,
        loader: 'builtin:swc-loader',
        options: {
          sourceMap: !isProd,
          ...swcOptions
        },
        type: 'javascript/auto'
      },
			{
        resourceQuery: /lang=less/,
        use: [
          {
            loader: 'less-loader',
            options: {
              sourceMap: !isProd,
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ],
        type: 'css'
      },
			{
        test: /\.less$/,
        loader: 'less-loader',
        options: {
          sourceMap: !isProd,
          lessOptions: {
            javascriptEnabled: true
          }
        },
        type: 'css'
      },
			{
				test: /\.css$/,
				type: "css"
			},
			{
				test: /\.svg$/,
				type: "asset/resource"
			},
			{
				test: /\.png$/,
				type: "asset/resource",
				generator: {
					publicPath: 'https://xxx.cdn.com/'
				}
			}
		]
	}
};
module.exports = config;
