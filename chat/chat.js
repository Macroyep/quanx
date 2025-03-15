// 重写qk-device-id为时间戳
const timestamp = Date.now().toString();
$done({
    headers: {
        ...$request.headers,
        "qk-device-id": timestamp
    }
});
