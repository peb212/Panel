'use strict';
var path = require("path");
module.exports = function(grunt) 
{
	require('load-grunt-tasks')(grunt); 
    grunt.loadNpmTasks("grunt-webpack");
    grunt.initConfig({
    	pkg:grunt.file.readJSON("package.json"),
		bower: {
			install: {
			  options: {
				targetDir: './lib',
				layout: 'byType',
				install: true,
				verbose: true,
				cleanTargetDir: false,
				cleanBowerDir: false,
				bowerOptions: {}
			  }
			}
		},
		babel: {
				options: {
					sourceMap: true,
					presets: ['es2015'],
				  "plugins": [
				  	"transform-runtime",
				  	"transform-es2015-classes"
				    ]
				},
				files: {
					expand: true,
				    cwd: 'com',
				    src: '**/*.js?',
				    dest:"build/"
				}
	    },
  		concat: { 
  			options: {
      			stripBanners: true,
    		},
		    dist: {  
		      src: ['./es5/utils/Utils.js','./es5/utils/Loop.js','./es5/utils/StopWatch.js'],
		      dest: 'test/utils.js'
		    }  
		},
		webpack:
		{
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
			}
		}
    }); 
	grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-webpack');
	grunt.registerTask('default',['bower','babel',"webpack","concat"]);
 }