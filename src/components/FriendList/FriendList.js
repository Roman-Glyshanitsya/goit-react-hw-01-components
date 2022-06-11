import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendList } from './FriendList.styled';

const Friend = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, avatar, isOnline, name }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            isOnline={isOnline}
            name={name}
          />
        );
      })}
    </FriendList>
  );
};

Friend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default Friend;
