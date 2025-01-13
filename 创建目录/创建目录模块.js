const fs = require('fs');

// 定义一个创建目录的方法
function 创建目录(dirPath) {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) {
            console.error('创建目录时发生错误:', err.message);
        } else {
            console.log('目录创建成功:', dirPath);
        }
    });
}

// 导出 创建目录 方法
module.exports = { 创建目录 };