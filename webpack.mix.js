let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.config.fileLoaderDirs.fonts = 'assets/fonts';

mix.babelConfig({
    // To ignore ES6-* transpiling as it doesn't work with async functions.
    // Besides, it is only needed for older browsers.
    only: ["./some-fake-dir"],
});

mix.js('src/js/app.js', 'bin')
    .sass('src/sass/app.scss', 'assets/css')
    .options({
        // The font, image, and other url()s in CSS will need to be copied
        // explicitly
        processCssUrls: false
    });
