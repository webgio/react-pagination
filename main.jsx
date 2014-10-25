var React = require('react')
  , Paginator = require('./paginator.jsx')
  , rows = [
              {id: '01', name: 'Giorgio', surname: 'Bozio'},
              {id: '02', name: 'Mario', surname: 'Rossi'},
              {id: '03', name: 'Giorgio', surname: 'Bozio'},
              {id: '04', name: 'Giorgio', surname: 'Bozio'},
              {id: '05', name: 'Giorgio', surname: 'Bozio'},
              {id: '06', name: 'Aldo', surname: 'Bozio'},
            ]
var component = Paginator({rows: rows, itemsPerPage: '5'})
  
React.renderComponent(
  component,
  document.getElementById('main')
)

window.React = React
