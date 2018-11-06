import React from 'react';
import Pagination from "react-js-pagination";

const regex = /[\d]+/;

function url(that, pageNumber){
  return "/one/" + that.state.schema + "/" + pageNumber;
}

function handlePageChangeOneFilms(that, pageNumber) {
    that.props.match.params.id = pageNumber
    that.setState(() => ({
        isLoaded: false,
      }));
      that.getOne();
  }

const Paginx = (props) => {
    return(
        <Pagination
            hideDisabled
            prevPageText='prev'
            nextPageText='next'
            firstPageText='first'
            lastPageText='last'
            itemClassFirst='first'
            itemClassLast='last'
            activePage={ parseInt(props.activePage.match(regex)) }
            itemsCountPerPage={1}
            totalItemsCount={props.totalItems}
            pageRangeDisplayed={5}
            activeClass='page-item active'
            itemClass='page-item'
            linkClass='page-link'
            getPageUrl={url.bind(this, props.callback)}
            onChange={handlePageChangeOneFilms.bind(this, props.callback)}
        />     
    )
}

export default Paginx;