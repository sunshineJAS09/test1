const os = require('os');

// 定义一个获取 IPv4 地址的方法
function 获取IPv4地址() {
    const interfaces = os.networkInterfaces();
    const addresses = [];

    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            // 不获取 IPv6 地址，只获取 IPv4 地址
            if (iface.family !== 'IPv4' || iface.internal) {
                // 跳过内部地址（例如 127.0.0.1）和非 IPv4 地址
                continue;
            }
            addresses.push(iface.address);
        }
    }

    return addresses;
}

// 导出 获取IPv4地址 方法
module.exports = { 获取IPv4地址 };