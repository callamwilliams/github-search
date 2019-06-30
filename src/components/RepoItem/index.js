import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as S from './styles';
import ForkSVG from '../../assets/img/fork.svg';
import IssuesSVG from '../../assets/img/issues.svg';
import UpdatedSVG from '../../assets/img/updated.svg';

moment.locale('en-gb');

const RepoItem = ({ item, children }) => {
  const {
    html_url,
    name,
    description,
    fork,
    stargazers_count,
    open_issues_count,
    updated_at
  } = item;
  const [details, setDetails] = useState(false);

  const onClick = () => {
    setDetails(!details);
  };

  return (
    <S.Repo onClick={onClick}>
      <a href={html_url} title={`view more about ${name}`}>
        <h3>{name}</h3>
      </a>
      <S.Description>{description}</S.Description>
      {children}
      {details && (
        <S.IconList>
          {fork && (
            <S.Item>
              <S.Icon src={ForkSVG} cacheGetRequests />
            </S.Item>
          )}
          <S.Item>⭐{stargazers_count}</S.Item>
          <S.Item>
            <S.Icon src={IssuesSVG} cacheGetRequests />
            {open_issues_count}
          </S.Item>
          <S.Item>
            <S.Icon src={UpdatedSVG} cacheGetRequests />
            {moment([updated_at]).fromNow()}
          </S.Item>
        </S.IconList>
      )}
    </S.Repo>
  );
};

RepoItem.propTypes = {
  item: PropTypes.shape({
    html_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    fork: PropTypes.bool,
    stargazers_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    updated_at: PropTypes.string,
  }),
  children: PropTypes.element
}

export default RepoItem;