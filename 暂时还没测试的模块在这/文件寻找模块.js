const fs = require('fs').promises;
const path = require('path');

// 定义一个寻找文件的方法
async function 寻找文件(dirPath, filter = '') {
    try {
        const files = await fs.readdir(dirPath, { withFileTypes: true });
        const filePaths = [];

        for (const file of files) {
            const filePath = path.join(dirPath, file.name);
            if (file.isDirectory()) {
                const nestedFiles = await 寻找文件(filePath, filter);
                filePaths.push(...nestedFiles);
            } else if (file.name.includes(filter)) {
                filePaths.push(filePath);
            }
        }

        if (filePaths.length > 0) {
            console.log('找到的文件路径:', filePaths);
        } else {
            console.log('没有找到符合条件的文件。');
        }
    } catch (err) {
        console.error(`查找文件时发生错误: ${err.message}`);
    }
}

// 导出 寻找文件 方法
module.exports = { 寻找文件 };