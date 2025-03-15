// 修改响应体中的 data.data.vip_status, data.data.vip_exp, 和 data.data.free_chat_number
const responseBody = $response.body;

// 解析 JSON 响应体
let jsonBody;
try {
    jsonBody = JSON.parse(responseBody);
} catch (e) {
    // 如果解析失败，则不进行修改
    console.error('Failed to parse JSON response:', e);
    $done({});
    return;
}

// 修改数据
if (jsonBody && jsonBody.data && jsonBody.data.vip_status !== undefined) {
    jsonBody.data.vip_status = 1;
    jsonBody.data.vip_exp = '2026-01-01 01:01:01';
    jsonBody.data.free_chat_number = 100000;
}

// 将修改后的 JSON 对象转换回字符串
const modifiedResponseBody = JSON.stringify(jsonBody);

// 完成响应修改
$done({
    body: modifiedResponseBody
});
