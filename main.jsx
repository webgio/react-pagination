var React = require('react')
  , Paginator = require('./paginator.jsx')

  var component = Paginator()
  
React.renderComponent(
  component,
  document.getElementById('main')
)

window.React = React
