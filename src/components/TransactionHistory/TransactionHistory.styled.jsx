import styled from 'styled-components';

export const Table = styled.table`
margin: 40px auto;
table-layout: fixed;
width: 600px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const String = styled.tr`
text-align: center;
border: 1px solid #e3a5b0;
  &:nth-of-type(even){
    background-color: #f5f2f2;
  }
   &:nth-of-type(odd){
    background-color: #e0dede;
   }
`;

export const Head = styled.thead`
margin-bottom:10px;
`;

export const HeadTable = styled.th`
padding: 20px;
background-color: #707070;
color: #F0F0F0;
`;

export const Cell = styled.th`
padding: 10px;
color: #707070;
font-weight: 400;
font-size: 12px;
`;