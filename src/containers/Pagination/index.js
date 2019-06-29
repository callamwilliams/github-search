import React, { useState } from 'react';
import { connect } from 'react-redux';
import PageCount from 'react-js-pagination';
import _ from 'lodash';

const Pagination = ({ repoCount }) => {
  console.log(repoCount);
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  return (
    <PageCount
      activePage={activePage}
      itemsCountPerPage={30}
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
export default connect(mapStateToProps)(Pagination);
