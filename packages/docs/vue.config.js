module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@use "@/assets/sass/variables.scss" as *;',
      },
    },
  },
};
