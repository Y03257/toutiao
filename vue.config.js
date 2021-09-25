module.exports = {
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    publicPath: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://toutiao-app.itheima.net/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api/': ''
                }
            },
        }
    }
}