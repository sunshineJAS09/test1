const fs = require('fs').promises;
async function 读取文件(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
    } catch (err) {
        console.error(`读取文件时出错: ${err.message}`);
    }
}
module.exports = { 读取文件 };