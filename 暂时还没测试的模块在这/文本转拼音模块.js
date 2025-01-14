const pinyin = require('pinyin');

// 定义一个文本转拼音的方法
function 文本转拼音(text, style = 'normal') {
    try {
        // 转换文本为拼音
        const result = pinyin(text, { style: pinyin.STYLE_NORMAL }).flat().join('');
        return result;
    } catch (err) {
        console.error(`文本转拼音时发生错误: ${err.message}`);
        return text; // 返回原始文本
    }
}

// 导出 文本转拼音 方法
module.exports = { 文本转拼音 };