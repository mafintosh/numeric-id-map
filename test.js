var tape = require('tape')
var map = require('./')

tape('add', function (t) {
  var ids = map()

  var i = ids.add('hello')
  t.same(typeof i, 'number', 'add returns a number')

  var j = ids.add('world')
  t.same(typeof j, 'number', 'add returns a number')

  t.notEqual(j, i, 'ids are different')

  t.end()
})

tape('remove', function (t) {
  var ids = map()

  var i = ids.add('hello')
  t.same(ids.remove(i), 'hello', 'entry returned from remove')
  t.same(ids.remove(i), null, 'double remove returns null')

  var j = ids.add('world')
  t.same(j, i, 'indexes are reused')
  t.end()
})

tape('get', function (t) {
  var ids = map()
  var i = ids.add('hello')

  t.same(ids.get(i), 'hello', 'get entry from id')
  t.end()
})
