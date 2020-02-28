module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                // This is the path to your variables
                prependData: "@import '@/src/assets/variables.scss'"
              }
            }
          ]
        }
      ]
    }
  }
};
