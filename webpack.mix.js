let mix = require('laravel-mix');
var LiveReloadPlugin = require('webpack-livereload-plugin');

mix.js("resources/js/main.js", "assets/js/script.min.js")
   .stylus("resources/stylus/main.styl", "assets/css/styles.min.css")
   .webpackConfig({
        plugins: [
            new LiveReloadPlugin()
        ]
    });