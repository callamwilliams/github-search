import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import IconList from '../IconList';

const RepoItem = ({ item, children }) => {
  const { html_url, name, description } = item;
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
      {details && <IconList item={item} />}
    </S.Repo>
  );
};

RepoItem.propTypes = {
  item: PropTypes.shape({
    html_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
  }),
  children: PropTypes.element
};

export default RepoItem;
