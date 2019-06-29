import React, { useState } from 'react';
import { connect } from 'react-redux';
import PageCount from 'react-js-pagination';
import { setActivePage } from '../../store/actions/pagination';

const Pagination = ({ repoCount, setActivePage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    setActivePage(pageNumber);
  };

  return (
    <PageCount
      activePage={currentPage}
      itemsCountPerPage={10}
      totalItemsCount={repoCount}
      pageRangeDisplayed={5}
      onChange={handlePageChange}
    />
  );
};

function mapStateToProps(state) {
  const { data } = state.user;
  return {
    repoCount: data.public_repos
  };
}

export default connect(
  mapStateToProps,
  { setActivePage }
)(Pagination);
