import PropTypes from 'prop-types';
import { Item, Name, Status, AvatarImage } from './FriendList.styled';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <Item>
      <Status typeName={isOnline}></Status>
      <AvatarImage src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
