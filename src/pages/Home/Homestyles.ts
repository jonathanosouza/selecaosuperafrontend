import styled from 'styled-components'


export const HomeContainer = styled.div `
  display: flex;
  max-width: 100%;
  margin-top: 5rem;
  padding: 2.5rem;
  align-items: center;
  gap: 2rem;
  background: ${(props) => props.theme['gray-600']};

  //background: linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(235,193,54,0.053658963585434205) 62%, rgba(128,71,248,0.03405112044817926) 100%);

  img{
    width: 500px;
    height: 500px;
    border-radius: 50%;
  }

`

export const InfoContainer = styled.main `
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-left: 5rem;
  margin-top: 2rem;


  h1{
  color: ${(props) => props.theme['yellow']};
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  margin-bottom: 1rem;
 
  }

  span {
    font-weight: 400;
    font-size: 20px;
    color: ${(props) => props.theme['white']};
  }
`

export type VariantesColor = 'primary' | 'secundary';

interface InfoContainerProps {
  variant: VariantesColor;
}

const cardVariantes = { 
  primary: 'red',
  secundary: 'blue'
}

export const Infortext = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: ${(props) => props.theme['gray-1000']};
    height: 6rem;
    width: max-content;
    gap: 1rem;
    

span {
display: flex;
gap: 1rem;
margin-top: 1rem;
align-items: center;
justify-content: start;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: ${(props) => props.theme['white']};

}

  a{
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['white']};
  padding: 7px;
  border-radius: 50%;
  text-decoration: none;
  background: ${(props) => props.theme['black-10']};
}

`

export const MeunProduct = styled.div`
margin-top: 2rem;
margin-left: 8rem;

h1{
  color: ${(props) => props.theme['gray-600']};
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
}

`
export const ListProductContainer = styled.div`
width: 95%;
height: 30rem;

display: flex;
gap: 2rem;
flex-wrap: wrap;
`

export const CardCoffeDiv = styled.div` 
/* display: flex;
gap: 10rem;
flex-wrap: wrap;
flex-direction: column; */

`

