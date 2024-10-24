import styled from 'styled-components'
import { Colors } from '../../assets/styles/theme'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  overflow: hidden;

  p {
    color: ${Colors.text.dark};
  }

  button {
    width: 650px;
  }

  @media (max-width: 768px) {
    button {
      width: 100%;
    }

    padding: 30px;
  }
`

export const CheckoutTitle = styled.p`
  font-weight: bold;
  font-size: 1.325rem;
`

export const CheckoutProducts = styled.div`
  min-width: 650px;
  max-height: 400px; 
  overflow-y: scroll;
  margin-top: 15px;
  margin-bottom: 15px;

  ::-webkit-scrollbar {
    width: 2px; 
  }

  ::-webkit-scrollbar-track {
    background: ${Colors.input.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${Colors.text.dark};
    border-radius: 10px; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${Colors.text.dark};
  }
  
  scrollbar-width: thin; 
  scrollbar-color: ${Colors.text.dark} ${Colors.input.background}; 

  ::-webkit-scrollbar-button {
    display: none; 
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`



export const CheckoutTotal = styled.p`
  width: 650px;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`