const PropTypes = require('prop-types')

module.exports = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  allowed_currencies: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  country: PropTypes.string.isRequired,
}
