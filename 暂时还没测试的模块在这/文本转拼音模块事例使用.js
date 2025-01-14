const n = require('./文本转拼音.js');

// 原始文本
const text = "这是一个示例文本，包含中文字符。";

// 调用文本转拼音方法
const pinyinText = n.文本转拼音(text);

// 输出转换后的拼音
console.log('转换后的拼音:', pinyinText);