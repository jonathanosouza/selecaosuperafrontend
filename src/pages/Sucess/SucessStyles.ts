import styled from 'styled-components'


export const SucessPageContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  margin-top: 5rem;
  padding: 2.5rem;
  align-items: center;
  gap: 2rem;
  background: rgb(250,250,250);
  background: linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(235,193,54,0.053658963585434205) 62%, rgba(128,71,248,0.03405112044817926) 100%);
`

export const SucessPageData = styled.div `
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-left: 5rem;
  margin-top: 2rem;

  span{
  }

`

export const SucessDataContainer = styled.div `
/* Order info */
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 32px;
width: 526px;
height: 270px;
left: calc(50% - 526px/2 - 297px);
top: 296px;
border: 2px solid red;
border-radius: 6px 36px;
`
export const ProductListContainer =styled.div `
  
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: center;


`
export const ProductList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: auto;

  

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  th {
    padding: 1rem;
    text-align: left;
    color: ${(props) => props.theme['gray-500']};
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    background-color: ${(props) => props.theme['white']};
    border-top: 0.50rem solid ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-500']};
    padding: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.6;

    &:first-child {
      width: 10%;
      padding-left: 1.5rem;
      
    }

    &.saque{
      color: ${(props) => props.theme['red-500']};
    }    
    
    
    &.deposit{
      color: ${(props) => props.theme['red-500']};
    }  

    &.withdraw{
      color: ${(props) => props.theme['green-500']};
    } 

    &:last-child {
      padding-right: 1.5rem;
    
    
    }

    button {  
      background: none;
      border: none;
    }
    button:hover {  
      color: red;
      cursor: pointer;
    }
  }
`
