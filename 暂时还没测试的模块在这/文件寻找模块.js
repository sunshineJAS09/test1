const fs = require('fs').promises;
const path = require('path');

// 定义一个查找文件的方法
async function 查找文件(dirPath) {
    try {
        const files = await fs.readdir(dirPath, { withFileTypes: true });
        const filePaths = [];

        for (const file of files) {
            const filePath = path.join(dirPath, file.name);
            if (file.isDirectory()) {
                const nestedFiles = await 查找文件(filePath);
                filePaths.push(...nestedFiles);
            } else {
                filePaths.push(filePath);
            }
        }

        return filePaths;
    } catch (err) {
        console.error(`查找文件时发生错误: ${err.message}`);
        return [];
    }
}

// 导出 查找文件 方法
module.exports = { 查找文件 };