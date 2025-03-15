// 重写qk-device-id为时间戳
function generateUUID() {
    // 生成 32 个随机十六进制字符，并插入分隔符和版本标识符
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0; // 随机 0-15
            const v = c === 'x' ? r : (r & 0x3 | 0x8); // 版本 4 的固定标识位
            return v.toString(16); // 转为十六进制字符
        })
        .toUpperCase(); // 转换为大写（示例中的格式）
}

// 示例用法
console.log(generateUUID()); // 输出类似 99AFA782-69CD-4F5E-9B34-9D1FA5FC5B6F
$done({
    headers: {
        ...$request.headers,
        "qk-device-id": generateUUID()
    }
});
