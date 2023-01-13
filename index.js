const sumItems = function(array) {
  if (array.length === 0) {
    return 0
  }

  let value = array.pop()

  if (Array.isArray(value)) {
    value = sumItems(value)
  }

  return value + sumItems(array)
}

module.exports = sumItems