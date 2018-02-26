// entry point -> output

const path = require('path');
// console.log(path.join(__dirname, 'public'));
/* we are not goint to use string concatication because different os can manipulate it in a 
different way */

const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    // console.log('env', env);
    return {
        'entry': './src/app.js',
        // 'entry': './src/playground/hoc.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'), // absolute path 
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_module/
            }, {
                test: /\.s?css$/,
                // use: ['style-loader', 'css-loader', 'sass-loader']
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },

                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }]
                })
            }]
        },
        plugins: [CSSExtract],
        // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist'
        }
    }
}
/*
module.exports = {
    'entry': './src/app.js',
    // 'entry': './src/playground/hoc.js',
    output: {
        path: path.join(__dirname, 'public'), // absolute path 
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_module/
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
*/



