import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'; 

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}></span>
    <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const FriendList = ({ friends }) => (
  <ul className={styles['friend-list']}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
