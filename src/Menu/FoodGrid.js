import styled from 'styled-components'
import {Title} from '../styles/Title'

export const FoodGrid = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:20px;
`

export const FoodLabel = styled.div`
position:absolute;
background-color:rgba(255, 255, 255, 0.8);
padding:5px;
`

export const Food = styled(Title)`
height:100px;
font-size:20px;
padding:10px;
background-image:${ ({img}) => `url(${img})`};
background-position:center;
background-size:cover;
transition-property:box-shadow filter margin-top;
transition-duration:.1s;
filter:contrast(75%);
margin-top:5px;
border-radius:10px;
box-shadow:0px 0px 1px 3px grey;
&:hover{
    cursor:pointer;
    box-shadow:0px 0px 10px 3px grey;
    filter:contrast(100%);
    margin-top:0px;
    margin-bottom:5px;
}
`