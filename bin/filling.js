const fs = require('fs')
const sitesPath = __dirname + '/../sites'
const toWrite = require('./fromGoogleForm.js')

fs.readdir(sitesPath, (error, files) => {
  toWrite.forEach(row => {
    const fileName = row.objectID + '.json'

    // already filled into json
    if (files.indexOf(fileName) !== -1) {
      return
    }

    console.log('adding', fileName)

    // transform string to array
    row.allowed_currencies = row.allowed_currencies.replace(/ /g, '').split(',')

    fs.writeFile(sitesPath + '/' + fileName, JSON.stringify([row]))
  })
})
