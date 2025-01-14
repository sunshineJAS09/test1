const fs = require('fs').promises;

// 定义一个删除文件的方法
async function 删除文件(filePath) {
    try {
        await fs.unlink(filePath);
        console.log(`文件删除成功: ${filePath}`);
    } catch (err) {
        console.error(`删除文件时发生错误: ${err.message}`);
    }
}

// 导出 删除文件 方法
module.exports = { 删除文件 };