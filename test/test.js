var test = require('tape')
var table = require('../')

test("can get actual size",function(t){

  var o = table(2,4)
  t.equals(o.actual_size[0],1.5,'should have correct actual size')

  t.end()
})

test("can get actual size even if backwards",function(t){

  var o = table(4,2)
  t.equals(o.actual_size[1],3.5,'should have correct actual size')

  t.end()
})

test("doesn't return size if none matching",function(t){

  var o = table(999,999)
  t.ok(!o,'should not have size')

  t.end()
})
