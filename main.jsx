var React = require('react')
  , Paginator = require('./paginator.jsx')
  , rows = [
              {name: 'Giorgio', surname: 'Bozio'},
              {name: 'Mario', surname: 'Rossi'},
              {name: 'Giorgio', surname: 'Bozio'},
              {name: 'Giorgio', surname: 'Bozio'},
              {name: 'Giorgio', surname: 'Bozio'},
              {name: 'Giorgio', surname: 'Bozio'},
            ]
var component = Paginator({rows: rows, itemsPerPage: '5'})
  
React.renderComponent(
  component,
  document.getElementById('main')
)

window.React = React
