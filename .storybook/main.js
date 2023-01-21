module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  features: {
    storyStoreV7: true,
  },
  framework: "@storybook/react",
  core: {
    builder: {
      name: "webpack5",
      options: {
        fsCache: true,
      },
    },
  },
  addons: [
    {
      name: "storybook-addon-swc",
      options: {
        enable: true,
        enableSwcLoader: true,
        enableSwcMinify: true,
        swcLoaderOptions: {},
        swcMinifyOptions: {},
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
};
