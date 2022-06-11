import styled from 'styled-components';

export const FriendList = styled.ul`
width: 300px;
margin: 0 auto;
list-style: none;
text-align: center;
`;

export const Item = styled.li`
display: flex;
align-items: center;
padding: 15px;
border-radius: 4px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
background-color: #f5f2f2;
margin-bottom: 10px;
`;

export const Name = styled.p`
font-size: 15px;
font-weight: 600;
margin-right: auto;
`;

export const Status = styled.span`
display: block;
width: 15px;
height: 15px;
margin-right: 30px;
border-radius: 50%;
background-color: ${props => props.typeName ? 'green' : 'red'};
`;

export const AvatarImage = styled.img`
margin-right: 30px;
`;