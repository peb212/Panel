var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var path = require("path");
module.exports = {
	entry:{
		engine:"./es6/Enter.jsx"
	},
	output:{
		path:"./pack/",
		filename:"[name].js"
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:[
					"style","css"
				],
				exclude:[
					"/node_modules/"
				]
			},
			{
				test:/.jsx?$/,
				loaders:["babel?presets[]=es2015&plugins[]=transform-runtime&plugins[]=transform-es2015-classes"],
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"es6")
			},
			{
				test:/.js$/,
				loaders:["babel?presets[]=es2015&plugins[]=transform-runtime&plugins[]=transform-es2015-classes"],
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"es6")
			}
		]
	},
	devServer:{
		// proxy: {
		//   '/build*': {
		// 	target: 'http://www.test.com',
		// 	secure: false
		//   }
		// }
	},
	resolve:{
		extensions:['','.js',".css",'.jsx']
	},
	plugins:[
		new CommonsChunkPlugin("engine","engine.js"),
		new htmlWebpackPlugin({
			title:"测试",
			template:"./templates/index.html",
			chunks:['engine']
		})
	]

}