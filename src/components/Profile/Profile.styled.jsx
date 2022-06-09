import styled from 'styled-components';

export const ProfileThumb = styled.div`
margin: 20px auto;
width: 250px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 4px;
background-color: #f5f2f2;
`;

export const Description = styled.div`
padding: 20px 50px 0 50px;
text-align: center;
`;

export const AvatarImage = styled.img`
width: 100px;
border-radius: 50%;
`;

export const Name = styled.p`
font-size: 20px;
font-weight: bold;
`;

export const Info = styled.p`
font-size: 15px;
color: #707070;
`;

export const StatsList = styled.ul`
display: flex;
padding: 0;
margin: 0;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
list-style: none;
background-color: #e3e3e3;
flex-basis: calc(100% / 3);
border-top: 1px solid #9c9c9c;
&:not(:last-child){
    border-right: 1px solid #9c9c9c;
}
`;

export const Label = styled.span`
font-size: 15px;
color: #707070;
`;

export const Quantity = styled.span`
font-size: 15px;
font-weight: bold;
`;


