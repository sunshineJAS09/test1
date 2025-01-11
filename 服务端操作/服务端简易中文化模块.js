const http = require('http');

// 定义一个启动服务器的方法
function 启动服务器(port, message) {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(message + '\n');
    });

    server.listen(port, () => {
        console.log(`服务器运行在 http://localhost:${port}/`);
    });
}

// 导出 启动服务器 方法
module.exports = 启动服务器;