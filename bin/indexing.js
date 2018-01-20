const fs = require('fs')
const algoliasearch = require('algoliasearch')
const PropTypes = require('prop-types')

const config = require('../settings/config')
const propTypes = require('../settings/propTypes')

const apiKey = process.env.API_KEY
const sitesPath = __dirname + '/../sites'

if (!apiKey) {
  throw new Error('You must provide an Algolia API_KEY')
}

const client = algoliasearch(config.appId, apiKey)
const index = client.initIndex(config.index)

fs.readdir(sitesPath, (error, files) => {
  files.forEach(file => {
    const site = require([sitesPath, file].join('/'))
    // const isValid = PropTypes.checkPropTypes(propTypes, site)

    index.addObjects(site, (error, content) => {
      if (error) {
        console.log('An error occured while trying to index file', site)
        return
      }

      console.log(content)
    })
  })
})
