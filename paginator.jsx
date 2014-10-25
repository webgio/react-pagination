var React = require('react')
  , _ = require('underscore')

var clickHandler = function(){
  var fun = _.first(arguments)
  var params = _.rest(arguments)
  return function(e){
    event.preventDefault()
    fun.apply(null, params)
  }
}

var List = React.createClass({
  render: function(){
    var createRow = function(row){
        return <li key={row.id}>{row.name} {row.surname}</li>
      }
    return <ul>{this.props.rows.map(createRow)}</ul>;
  }
})

var PageLinks = React.createClass({
  render: function(){
    var currentPage = this.props.currentPage
      , nextPage = this.props.currentPage + 1
      , prevPage = this.props.currentPage - 1
      , totalPages = this.props.totalPages
      , onChangePage = this.props.onChangePage
      , navLinks = []
    var inactiveStyle = {
      color: 'grey'
    }
    if (currentPage !== 1) {
      navLinks.push(<span key='prev'><a href="" onClick={clickHandler(onChangePage, prevPage)}>previous page</a> </span>)
    } else {
      navLinks.push(<span key='prev' style={inactiveStyle}>previuos page </span>)
    }
    _.range(1, totalPages+1).map(function(pageNum){
      if (pageNum !== currentPage) navLinks.push(<span key={pageNum}><a href="" onClick={clickHandler(onChangePage, pageNum)}>{pageNum}</a> </span>)
      if (pageNum === currentPage) navLinks.push(<span key={pageNum} style={inactiveStyle}>{pageNum} </span>)
    })
    if (currentPage !== totalPages) {
      navLinks.push(<span key='next'><a href="" onClick={clickHandler(onChangePage, nextPage)}>next page</a> </span>)
    } else {
       navLinks.push(<span key='next' style={inactiveStyle}>next page </span>)
    }
    return (<div>{navLinks}</div>)
  }
})

var Paginator = React.createClass({
  getInitialState: function() {
    var currentRows = this.props.rows.slice(0, this.props.itemsPerPage)
    return {currentPage: 1, rows: currentRows}
  },
  onChangePage: function(newPage) {
    var currentRows = this.props.rows.slice((newPage-1)*this.props.itemsPerPage, newPage*this.props.itemsPerPage)
    this.setState({currentPage: newPage, rows:currentRows})
  },
  render: function(){
    var totalPages = Math.ceil(this.props.rows.length / this.props.itemsPerPage)
    return (
      <div>
        <h1>Ciao!</h1>
        <List rows={this.state.rows} />
        <PageLinks onChangePage={this.onChangePage} currentPage={this.state.currentPage} totalPages={totalPages}/>
      </div>
    )
  }
})

module.exports = Paginator
