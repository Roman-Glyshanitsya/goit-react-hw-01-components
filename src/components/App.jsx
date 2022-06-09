import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Container } from './App.styled'

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
    <Container>
     <Profile
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
       stats={user.stats}
      />
    </Container>
  );
};
