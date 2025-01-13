const { 压缩文件, 解压文件 } = require('./zip操作');

// 压缩文件
压缩文件('./sourceFolder', './output.zip');

// 解压文件
解压文件('./output.zip', './targetFolder');