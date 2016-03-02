module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        files: [
            './app/build/bundle.js',
            './node_modules/angular-mocks/angular-mocks.js',
            {
                pattern: 'spec.config.js',
                watched: false
            }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'spec.config.js': ['webpack']
        },
        webpack: {
            resolve: {
                extensions: ['', '.js']
            },
            module: {
                loaders: [
                    {
                        test: /\.js/,
                        exclude: /node_modules/,
                        loader: 'babel'
                    }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};