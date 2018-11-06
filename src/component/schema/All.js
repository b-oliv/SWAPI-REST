import React, { Component } from 'react';
import Loading from '../Loading';
import Data from '../Data';
import Template from '../../Template/all';
import Pagination from "react-js-pagination";

class All extends Component {

  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        count: 0,
        items: []
      }
  }

  getDatas = async (arg) => {
    try {
      if(arg != undefined || arg != null  ){
        var response = await new Data().getAll(this.props.match.params.name + "/?page=" + arg);
      }else{
        var response = await new Data().getAll(this.props.match.params.name);
      }
      console.log(response)
      this.setState(() => ({
        isLoaded: true,
        count: response.items.count,
        items: response.items.results
      }));
    } catch (error) {
      this.setState(() => ({ error }))
    }
  }

  componentDidMount(){
    this.getDatas();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.setState(() => ({
        isLoaded: false,
      }));
      this.getDatas();
    }
  }

  regex = /[\d]+/;

  url(pageNumber){
    return "/all/" + this.props.match.params.name + "/?page=" + pageNumber;
  }

  handlePageChange(pageNumber) {
    this.props.location.search = '/?page=' + pageNumber
    window.history.pushState({"html": this.state.items,"pageTitle":this.state.schema},"", '/all/'+ this.props.match.params.name + '/?page=' + pageNumber );
    this.setState(() => ({
        isLoaded: false,
      }));
    this.getDatas(pageNumber);
  }
  
  render() {
    const { count, error, isLoaded, items } = this.state;
    console.log(parseInt(this.props.location.search.match(this.regex)));
    if (error) {
      return <div>{error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
        return (
            <div className={this.props.match.params.name + ' panel panel-all text-capitalize'}>
              <h2>{this.props.match.params.name}</h2>
              <hr />
              <p>Total: {count}</p>
                <Template name={this.props.match.params.name} items={items}/>
                <nav className='paginationOne' aria-label="Pagination">
                  <Pagination
                    hideDisabled
                    prevPageText='prev'
                    nextPageText='next'
                    firstPageText='first'
                    lastPageText='last'
                    itemClassFirst='first'
                    itemClassLast='last'
                    activePage={ parseInt(this.props.location.search.match(this.regex)) }
                    itemsCountPerPage={10}
                    totalItemsCount={count}
                    pageRangeDisplayed={5}
                    activeClass='page-item active'
                    itemClass='page-item'
                    linkClass='page-link'
                    getPageUrl={this.url.bind(this)}
                    onChange={this.handlePageChange.bind(this)}
                  />        
                </nav>
            </div>
          );
    }
  }
}

export default All;

