const withPlugins = require("next-compose-plugins");
const resolve = require("path").resolve;

const idDev = process.env.NODE_ENV === "development";

module.exports = withPlugins([
  {
    webpack(config) {
      config.resolve.alias["components"] = resolve("shared/components/");

      return config;
    }
  }
]);
