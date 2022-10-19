import styled from 'styled-components';
export const Statistics = styled.section`
display:flex;
text-align: center;
flex-direction: column;
margin-bottom: 10px;
`
export const Title = styled.h2`
text-transform: uppercase;
font-size: 20px;
margin-top: 40px;
margin-bottom: 40px;
color: ${(p) => p.theme.colors.lightGrey}
`
export const Stat = styled.ul`
display: flex;
flex-direction:row;
`
export const StatItem = styled.li`
display: flex;
flex-direction:column;
padding: 10px;
color: ${(p) => p.theme.colors.white}

`
export const Label = styled.span`
font-size: 15px;
margin-bottom: 8px
`
export const Percentage = styled.span`
font-size: 20px;

`