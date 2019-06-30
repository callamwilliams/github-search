import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PageCount from 'react-js-pagination';
import { setActivePage } from '../../store/actions/pagination';
import { getRepos } from '../../store/actions/repos';

const Pagination = ({ username, repoCount, setActivePage, getRepos }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    setActivePage(pageNumber);
    getRepos(username, pageNumber);
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
    username: data.login,
    repoCount: data.public_repos
  };
}

export default connect(
  mapStateToProps,
  { setActivePage, getRepos }
)(Pagination);
