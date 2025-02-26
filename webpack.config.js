const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const fs = require('fs-extra')
const { getCyfsDir } =require('./tool/utils.js')


module.exports = (env, argv) => {
    console.log('当前 env mode: ', argv.mode)
    if ( argv.mode !== "production" ) {
        require('./tool/initLib.js')
    }
    if ( argv.mode === 'production' ) {
        // 先整体将src目录copy出来
        fs.copySync(path.join(__dirname, 'src'), path.join(__dirname, 'www'))
    }
    const outputPath = argv.mode === 'production'?
        path.join(__dirname, 'www', 'dist') :
        path.join(getCyfsDir(), '/services/runtime/www', 'dist')


    return {
        entry: {
            'build_did': './src/js/build_did.ts',
            'reset_did': './src/js/reset_did.ts',
            'objects': './src/js/objects.ts',
            'info': './src/js/info.ts',
            'index': './src/js/index.ts',
            'activate': './src/js/activate.ts',
            'show': './src/js/show.ts',
            'tx': './src/js/tx.ts',
            'browser': './src/js/browser.ts',
            'localstate': './src/js/localstate.ts',
            'guide': './src/js/guide.ts',
            'app_util': './src/js/app/app_util.ts',
            'app_store_list': './src/js/app/app_store_list.ts',
            'dec_app_detail': './src/js/app/dec_app_detail.ts',
            'upload_dec_app': './src/js/app/upload_dec_app.ts',
            'app_like_tip_list': './src/js/app/app_like_tip_list.ts',
            'upload_folder': './src/js/upload_folder.ts',
            'view_objectmap': './src/js/view_objectmap.ts',
            'index_iframe': './src/js/index_iframe.ts',
            'init': './src/js/init.ts',
        },
        mode: env.production ? 'production' : 'development',
        // mode: 'development',
        // devtool: 'source-map',
        output: {
            filename: "[name].js",
            path: outputPath,
        },
        devServer: {

        },
        stats: {
            errorDetails: true,
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader', options: { injectType: 'linkTag' } },
                        { loader: 'file-loader' }
                    ]
                },
                {
                    test: /\.ts?$/,
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'ts',
                        // target: 'es2019',
                        target: 'chrome80',
                        tsconfigRaw: require('./tsconfig.json')
                    }
                },
            ],
        },
        plugins: [
            // 这里filename是相对于output的path而言
            new HtmlWebpackPlugin({
                template: './src/guide.html',
                filename: '../guide.html',
                chunks: ['guide']
            }),
            new HtmlWebpackPlugin({
                template: './src/object_browser/objects.html',
                filename: '../object_browser/objects.html',
                chunks: ['objects']
            }),
            new HtmlWebpackPlugin({
                template: './src/build_did.html',
                filename: '../build_did.html',
                chunks: ['build_did']
            }),
            new HtmlWebpackPlugin({
                template: './src/reset_did.html',
                filename: '../reset_did.html',
                chunks: ['reset_did']
            }),
            new HtmlWebpackPlugin({
                template: './src/info.html',
                filename: '../info.html',
                chunks: ['info']
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: '../index.html',
                chunks: ['index']
            }),
            new HtmlWebpackPlugin({
                template: './src/activate.html',
                filename: '../activate.html',
                chunks: ['activate']
            }),
            new HtmlWebpackPlugin({
                template: './src/show.html',
                filename: '../show.html',
                chunks: ['show']
            }),
            new HtmlWebpackPlugin({
                template: './src/tx.html',
                filename: '../tx.html',
                chunks: ['tx']
            }),
            new HtmlWebpackPlugin({
                template: './src/browser.html',
                filename: '../browser.html',
                chunks: ['browser']
            }),
            new HtmlWebpackPlugin({
                template: './src/localstate.html',
                filename: '../localstate.html',
                chunks: ['localstate']
            }),
            // app应用商店
            new HtmlWebpackPlugin({
                template: './src/DecAppStore/app_store_list.html',
                filename: '../DecAppStore/app_store_list.html',
                chunks: ['app_store_list', 'app_util']
            }),
            new HtmlWebpackPlugin({
                template: './src/DecAppStore/app_detail.html',
                filename: '../DecAppStore/app_detail.html',
                chunks: ['dec_app_detail', 'app_util']
            }),
            new HtmlWebpackPlugin({
                template: './src/DecAppStore/upload_dec_app.html',
                filename: '../DecAppStore/upload_dec_app.html',
                chunks: ['upload_dec_app', 'app_util']
            }),
            new HtmlWebpackPlugin({
                template: './src/DecAppStore/app_like_tip_list.html',
                filename: '../DecAppStore/app_like_tip_list.html',
                chunks: ['app_like_tip_list', 'app_util']
            }),
            new HtmlWebpackPlugin({
                template: './src/upload_folder.html',
                filename: '../upload_folder.html',
                chunks: ['upload_folder']
            }),
            new HtmlWebpackPlugin({
                template: './src/view_objectmap.html',
                filename: '../view_objectmap.html',
                chunks: ['view_objectmap']
            }),
            new HtmlWebpackPlugin({
                template: './src/index_iframe.html',
                filename: '../index_iframe.html',
                chunks: ['index_iframe']
            }),
            new HtmlWebpackPlugin({
                template: './src/init.html',
                filename: '../init.html',
                chunks: ['init']
            }),
        ],
        externals: [
            // /cyfs_sdk/,
            function ({ context, request }, callback) {
                if (/cyfs_sdk/.test(request)) {
                    // console.log(request)
                    return callback(null, 'cyfs');
                }
                callback()
            },
            {
                jquery: 'jQuery',
            }
        ]
    }
}

