import styled from 'styled-components';
export const Wrapper = styled.div`

border: 1px solid ${(p) => p.theme.colors.border};
border-radius: 4px;
display: flex
align-self:center

`;
export const Description = styled.div`
justify-content: center;
text-align: center;
margin-bottom: 35px
`;
export const Avatar = styled.img`
width: 112px;
height: 112px;
display: block;
margin-left: auto;
margin-right: auto;
border-radius: 50%;
margin-top: 33px;
margin-bottom: 33px
`
export const Username = styled.p`
color: ${(p) => p.theme.colors.black};
font-size: 20px;
margin-bottom: 8px;
`
export const Tag = styled.p`
color: ${(p) => p.theme.colors.lightGrey};
font-size: 16px;
margin-bottom: 8px;
`
export const Location = styled.p`
color: ${(p) => p.theme.colors.lightGrey};
font-size: 16px;
`
export const Stats = styled.ul`
display:flex;
flex-direction:row;
font-size: 15px;
background-color: #f3f6f9;

`;
export const StatList = styled.li`
display: flex;
flex-direction: column;
text-align: center;
padding: 15px;
border: 1px solid ${(p) => p.theme.colors.border};
`
export const Label = styled.span`
color: ${(p) => p.theme.colors.lightGrey};
`
export const Quantity = styled.span`
font-weight: bold;
`