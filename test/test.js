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

test("each",function(t){
  
  var c = 0, row
  table.each(function(r){
    ++c;
    row = r
  })

  var second = 0;
  table.each(function(r){
    second++;
    return false;
  })

  t.equals(second,1,'return false stops each')

  t.ok(c > second,'each has more than one row')

  t.ok(row.nominal_size,'should have nominal_size')
  t.ok(row.actual_size,'should have actual_size')

  t.end()
})
