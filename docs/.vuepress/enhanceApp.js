function detectLang () {
  const lang = navigator.language || navigator.userLanguage
  const hasEnLang = window.location.href.includes('/en')

  if (lang.includes('en-') && !hasEnLang) {
    window.location.href = window.location.origin + '/en' + window.location.pathname
  }
}

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  detectLang()
}
