var config = {
  index: 'sites',
  appId: 'W7PTXBX6RP',
  searchApiKey: 'df2cc4240e867bf73205160e8eccbb9e'
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
} else {
  window.config = config;
}

