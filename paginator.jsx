var React = require('react')
  , _ = require('underscore')

var List = React.createClass({
  render: function(){
    var createRow = function(row){
        return <li>{row.name} {row.surname}</li>
      }
    return <ul>{this.props.rows.map(createRow)}</ul>;
  }
})

var PageLinks = React.createClass({
  render: function(){
    return (
      <div><a href="" onClick={this.props.onNextPage}>next page</a></div>
    )
  }
})

var Paginator = React.createClass({
  getInitialState: function() {
    return {currentPage: 1}
  },
  onNextPage: function(e) {
    e.preventDefault()
    console.log(e)
  },
  render: function(){
    var currentRows = this.props.rows.slice(0, this.props.itemsPerPage)
    return (
      <div>
        <h1>Ciao!</h1>
        <List rows={currentRows} />
        <PageLinks onNextPage={this.onNextPage} />
      </div>
    )
  }
})

module.exports = Paginator
