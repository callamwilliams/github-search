import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import * as S from './styles';
import ForkSVG from '../../assets/img/fork.svg';
import IssuesSVG from '../../assets/img/issues.svg';
import UpdatedSVG from '../../assets/img/updated.svg';

moment.locale('en-gb');

const IconList = ({ item }) => {
  const { fork, stargazers_count, open_issues_count, updated_at } = item;
  return (
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
  );
};

IconList.propTypes = {
  item: PropTypes.shape({
    fork: PropTypes.bool,
    stargazers_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    updated_at: PropTypes.string
  })
};

export default IconList;
