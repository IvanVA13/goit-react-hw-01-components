import styled from 'styled-components';

import React from 'react';
import defaultImg from '../img/default.jpg';
import PropTypes from 'prop-types';

// styles
const List = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 270px;
`;
const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;

  text-align: center;

  border: 1px solid rgb(181, 181, 181);
  box-shadow: 7px 7px 19px -4px rgba(0, 0, 0, 0.53);
`;
const Status = styled.span`
  width: 15px;
  height: 15px;

  background-color: ${props => props.color};
  border-radius: 50%;
`;
const Avatar = styled.img`
  margin: 0 10px;
  width: 70px;
  height: 70px;

  border: 1px solid rgb(181, 181, 181);
  border-radius: 4px;
`;
const Name = styled.p``;

export const FriendList = ({ friends }) => (
  <List>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <Item key={id}>
        <Status color={isOnline ? 'green' : 'red'} />
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
      </Item>
    ))}
  </List>
);

FriendList.defaultProps = {
  avatar: defaultImg,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
