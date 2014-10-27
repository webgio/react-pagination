var React = require('react')
  , _ = require('underscore')

var clickLinkHandler = function(){
  var fun = _.first(arguments)
  var params = _.rest(arguments)
  return function(e){
    event.preventDefault()
    fun.apply(null, params)
  }
}

module.exports = clickLinkHandler
