import PropTypes from 'prop-types';
import {
    ProfileThumb,
    Description,
    AvatarImage,
    Name,
    Info,
    StatsList,
    StatsItem,
    Label,
    Quantity,
} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
    <ProfileThumb>
        <Description>
            <AvatarImage src={avatar} alt="User avatar" />
            <Name>{ username }</Name>
            <Info>{ tag }</Info>
            <Info>{ location }</Info>
        </Description>

        <StatsList>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{ followers }</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{ views }</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{ likes }</Quantity>
            </StatsItem>
        </StatsList>
    </ProfileThumb>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,

    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}