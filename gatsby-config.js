module.exports = {
    plugins: [
      'gatsby-plugin-styled-components',
      'gatsby-plugin-material-ui',
      'gatsby-theme-material-ui',
      
      {
        resolve: '@chakra-ui/gatsby-plugin',
        options: {
          resetCSS: true,
          /**
           * @property {boolean} [isUsingColorMode=true]
           * if false, this plugin will not use <ColorModeProvider />
           */
          isUsingColorMode: true,
        },
      },
    ],
  }