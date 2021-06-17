/**
 * hash 跟路径
 */
const Options = {
  port: 8080, // 端口
  contentBase: "mobile", // 根目录
  publicPath: "", // 公共前缀 "/mobile/" or ""  注意 publicPath需要设置与contentBase相同
  router: "hash", // 路由模式 hash browser
};

module.exports = { Options };
