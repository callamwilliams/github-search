import React from 'react';
import { connect } from 'react-redux';

/*
  name
  html_url
  description
  fork
  stargazers_count
  open_issues_count
  updated_at
*/

const RepoList = props => {
  console.log(props.state);
  return <div>Hello</div>;
};

function mapStateToProps(state) {
  return {
    state
  };
}
export default connect(mapStateToProps)(RepoList);
