/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { getDefaultConfig } = require("metro-config")

const path = require("path")
const extraNodeModules = {
  "@modules": path.resolve(__dirname, "modules"),
  "@screens": path.resolve(__dirname, "screens"),
  "@options": path.resolve(__dirname, "options")
}
const watchFolders = [
  path.resolve(__dirname, "modules"),
  path.resolve(__dirname, "screens"),
  path.resolve(__dirname, "options")
]

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig()
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false
        }
      })
    },
    resolver: {
      extraNodeModules: new Proxy(extraNodeModules, {
        get: (target, name) =>
          //redirects dependencies referenced from extraNodeModules to local node_modules
          name in target
            ? target[name]
            : path.join(process.cwd(), "node_modules", name)
      }),
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    },
    watchFolders,
    resetCache: true
  }
})()
