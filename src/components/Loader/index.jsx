import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  margin: auto;
  margin-top: 15px;
  padding: 10px;
  border: 6px solid #005aee;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`
