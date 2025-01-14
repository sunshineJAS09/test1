// 定义一个删除文本的方法
function 删除文本(text, ...textsToDelete) {
    try {
        // 删除所有指定的文本
        textsToDelete.forEach(textToDelete => {
            text = text.split(textToDelete).join('');
        });

        console.log('文本删除成功');
        return text;
    } catch (err) {
        console.error(`删除文本时发生错误: ${err.message}`);
        return text; // 返回原始文本
    }
}

// 导出 删除文本 方法
module.exports = { 删除文本 };p