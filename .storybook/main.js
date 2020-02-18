module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-knobs', '@storybook/addon-actions', '@storybook/addon-notes/register-panel'],
  webpackFinal: async config => {

    // console.log(config.module)
    //config.compilerOptions = Object.assign(config.compilerOptions, { noEmit: false }) 
    
    // Typescript support
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: "ts-loader",

      options: { appendTsSuffixTo: [/\.vue$/]}
    });
    config.resolve.extensions.push(".ts", ".tsx");

    // Scss support
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    });
    config.resolve.extensions.push(".scss");

    //config.configFileName = 'storybook.tsconfig.json'
    //console.log(config.module.rules)


    return config;
  },
};