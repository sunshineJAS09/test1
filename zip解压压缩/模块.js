const AdmZip = require('adm-zip');
const fs = require('fs');

// 定义一个压缩文件的方法
function 压缩文件(sourcePath, zipPath) {
    const zip = new AdmZip();
    zip.addLocalFolder(sourcePath, '');
    zip.writeZip(zipPath);
    console.log(`文件已压缩到 ${zipPath}`);
}

// 定义一个解压文件的方法
function 解压文件(zipPath, targetPath) {
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(targetPath, true);
    console.log(`文件已解压到 ${targetPath}`);
}

// 导出 压缩文件 和 解压文件 方法
module.exports = { 压缩文件, 解压文件 };