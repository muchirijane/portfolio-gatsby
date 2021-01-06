module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"pathPrefix":"/portfolio-gatsby","name":"Jane | Front-end Developer","short_name":"Jane","start_url":"/","background_color":"#1B1B29","theme_color":"#DBDBDB","display":"minimal-ui","icon":"src/images/logo-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"8dd47ca840d683be2aa9b7dd3938c7db"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
