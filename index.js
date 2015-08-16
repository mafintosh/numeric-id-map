module.exports = NumericIdMap

function NumericIdMap (list) {
  if (!(this instanceof NumericIdMap)) return new NumericIdMap(list)

  this.list = list || []
  this.length = 0
}

NumericIdMap.prototype.toJSON = function () {
  return this.list
}

NumericIdMap.prototype.add = function (obj) {
  var i = this._alloc()
  this.list[i] = obj
  return i
}

NumericIdMap.prototype.remove = function (i) {
  var obj = this.list[i]
  if (!obj) return null

  this.list[i] = null
  while (this.length && !this.list[this.length - 1]) {
    this.length--
    this.list.pop()
  }

  return obj
}

NumericIdMap.prototype.get = function (i) {
  return this.list[i]
}

NumericIdMap.prototype._alloc = function () {
  var i = this.list.indexOf(null)

  if (i === -1) {
    this.length++
    return this.list.push(null) - 1
  }

  return i
}
