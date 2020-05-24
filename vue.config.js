module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // 'src': '@',
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                // changeOrigin: true,
                // ws: true,
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    },

}