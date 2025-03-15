// 修改响应体中的 data.data.free_chat_number
const responseBody = $response.body;

// 解析 JSON 响应体
let jsonBody;
try {
    jsonBody = JSON.parse(responseBody);
} catch (e) {
    // 如果解析失败，则打印错误信息并返回原始响应
    console.error('Failed to parse JSON response:', e);
    $done({});
    return;
}

// 修改 data.data.free_chat_number 的值
if (jsonBody && jsonBody.data && jsonBody.data.free_chat_number !== undefined) {
    jsonBody.data.free_chat_number = 100000;
}

// 将修改后的 JSON 对象转换回字符串
const modifiedResponseBody = JSON.stringify(jsonBody);

// 完成响应修改并返回新的响应体
$done({
    body: modifiedResponseBody
});
