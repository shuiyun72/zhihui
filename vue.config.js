const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/pro/' : '/'
const port = process.env.port || process.env.npm_config_port || 8080;

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,  // 打包时不生成.map文件
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/hrm/api': {
                // target: 'http://localhost:3000/', // Dev环境
                //  target: 'http://192.168.1.238:10751/', // Test环境
                // target: 'http://192.168.1.215:10751/', // Rls环境
                target: 'http://localhost:8080', // 正式环境
                changeOrigin: true, // 跨域
                autoRewrite: true,
                cookieDomainRewrite: true,
                pathRewrite: {
                    '^/hrm/api/': '/'                 // 所有以 '/hrm/api/' 开头的api都替换为'/'
                }
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@config", resolve("config"))
            .set("@assets", resolve("src/assets"))
            .set("@views", resolve("src/views"))
            .set("@components", resolve("src/views/components"))
            .set("@utils", resolve('src/utils'))
            .set("@api", resolve("src/api"))
            .set("@const", resolve("src/common/const.js"))
            .set("@styles", resolve("src/styles"));
            
    }
}