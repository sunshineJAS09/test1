const n = require('./文本删除');

// 原始文本
let text = "这是一个示例文本，包含123和2，需要删除这些数字。";

// 调用删除文本方法
text = 删除文本(text, '123', '2');

// 输出修改后的文本
console.log('修改后的文本:', text);

//文本删除成功
//修改后的文本: 这是一个示例文本，包含和，需要删除这些数字。