import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { setActivePage } from '../../store/actions/pagination';
import { getRepos } from '../../store/actions/repos';

const Pagination = ({ username, repoCount, setActivePage, getRepos }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber.selected)
    setActivePage(pageNumber.selected + 1);
    getRepos(username, pageNumber.selected + 1);
  };

  useEffect(() => {
    setCurrentPage(0)
  }, [ username]);

  return (
    <>
      <ReactPaginate
        initialPage={currentPage}
        forcePage={currentPage}
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={Math.ceil(repoCount / 10)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </>
  );
};

Pagination.propTypes = {
  username: PropTypes.string,
  repoCount: PropTypes.number,
  setActivePage: PropTypes.func,
  getRepos: PropTypes.func
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
