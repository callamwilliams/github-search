import React from 'react';
import moment from 'moment';
import * as S from './styles';
import ForkSVG from '../../assets/img/fork.svg';
import IssuesSVG from '../../assets/img/issues.svg';
import UpdatedSVG from '../../assets/img/updated.svg';

moment.locale('en-gb');

const RepoItem = ({ item }, ...props) => {
  return (
    <S.Repo>
      <a href={item.html_url} title={`view more about ${item.name}`}>
        <h3>{item.name}</h3>
      </a>
      <S.Description>{item.description}</S.Description>
      {props.children}
      <S.IconList>
        {item.fork && (
          <S.Item>
            <S.Icon src={ForkSVG} cacheGetRequests />
          </S.Item>
        )}
        <S.Item>⭐{item.stargazers_count}</S.Item>
        <S.Item>
          <S.Icon src={IssuesSVG} cacheGetRequests />
          {item.open_issues_count}
        </S.Item>
        <S.Item>
          <S.Icon src={UpdatedSVG} cacheGetRequests />
          {moment([item.updated_at]).fromNow()}
        </S.Item>
      </S.IconList>
    </S.Repo>
  );
};

export default RepoItem;
