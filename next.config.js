const withPlugins = require("next-compose-plugins");
const resolve = require("path").resolve;

const idDev = process.env.NODE_ENV === "development";

module.exports = withPlugins([
  {
    webpack(config) {
      config.resolve.alias["components"] = resolve("shared/components/");
      config.module.rules.push({
        test: /\.css$/, // 以.css为后缀的文件
        use: [
          {
            loader: "style-loader" // 负责计算css样式加到页面中
          },
          {
            loader: "css-loader", // 处理css中模块化引入的功能, 如@import url()
            options: {
              modules: true, // css模块化
              localIdentName: "[name]__[local]--[hash:base64:5]" // 定义css类名[文件名__原类名--5位数哈希值]
            }
          },
          {
            loader: "postcss-loader" // 提供更多处理css的功能, 比如在postcss.config.js中添加插件：自动补齐兼容性前缀
          }
        ]
      });

      return config;
    }
  }
]);
