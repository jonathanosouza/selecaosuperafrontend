import styled from 'styled-components'

export const ListItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 256px;
height: 410px;
left: 0px;
top: 0px;
background:white;
border-radius: 6px 36px;
padding: 1rem;
line-height: 2rem;
gap: 14px;
margin-top: 2rem;


h1 {
  font-size: 1rem;
}

> p{
  display: flex;
  justify-content: center;
  align-items:center ;
  text-align: center;
  line-height: 1rem;
  color: ${(props) => props.theme['gray-400']};

}

`
export const Tags = styled.strong`
display: flex;
justify-content: center;
align-items: center;
padding:0;
margin-top: 1rem;
gap: 2rem;
border-radius: 2rem;
width: 79px;
height: 18px;

p{
  font-size: 10px;
  font-weight: 800;
  font-family: 'Roboto';
  color: ${(props) => props.theme['red-500']};

  
}
`
export const TagContainer = styled.div`
display: flex;
margin-bottom: 4px;
gap:3px;
font-size:8px;



h3{
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 9px;
  padding: 3px;
}

span{
font-size: 14px;
}
`

export const CountPrice = styled.div`
display: flex;
flex-direction: row;
width: 15em;
justify-content: space-around;
align-content: center;
margin-top: 1rem;
margin-bottom: 1rem;

p{
  font-size: 14px;
  font-family: 'Roboto';
}

> button{
background: ${(props) => props.theme['green-300']};
border: 0;
padding: 1px;
color: ${(props) => props.theme['white']};
border-radius: 5px;

  
}
`

export const PriceContainer = styled.strong`
width: 67px;
height: 31px;
font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 32.1px;
text-align: right;
color: ${(props) => props.theme['black-10']};
`

