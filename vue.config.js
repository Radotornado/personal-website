module.exports = {
  "outputDir": "docs",

  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      includeLocales: false,
      enableBridge: false
    }
  },

  devServer: {     
    https: true   
  } 
}
