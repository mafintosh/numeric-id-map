module.exports = NumericIdMap

function NumericIdMap (list) {
  if (!(this instanceof NumericIdMap)) return new NumericIdMap(list)

  this.free = []
  this.list = list || []

  if (this.list.length) {
    for (var i = this.list.length - 1; i >= 0; i--) {
      if (!this.list[i]) this.free.push(i)
    }
  }
}

NumericIdMap.prototype.toJSON = function () {
  return this.list
}

NumericIdMap.prototype.add = function (obj) {
  var i = this.free.length ? this.free.pop() : this.list.push(null) - 1
  this.list[i] = obj
  return i
}

NumericIdMap.prototype.remove = function (i) {
  var obj = this.list[i]
  if (!obj) return null

  this.list[i] = null
  this.free.push(i)

  return obj
}

NumericIdMap.prototype.get = function (i) {
  return this.list[i]
}
