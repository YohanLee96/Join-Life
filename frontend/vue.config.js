var path = require("path") 

module.exports = { 
  outputDir : path.resolve(__dirname, "../backend/public/"), 
  devServer: { 
    proxy: { // proxyTable 설정 
      '/api': { 
        target: 'http://localhost:8081/api', 
        changeOrigin: true , 
        pathRewrite:{ "^/api" : '' } 
      } 
    },
    overlay: false 
  } 
}

