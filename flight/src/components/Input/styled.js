import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  
  ${props => props.id === 'startPrice' && `
      & input {
        margin-bottom: .7rem;
      }
  `}
  
`

export const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: 300;
`