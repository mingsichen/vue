module.exports = {
    // 开发环境配置
    devServer: {
        proxy: {
            '/api': {
                /* 目标 */
                target: 'http://39.97.33.178',
                changeOrigin: true
            }
        }
    }
}