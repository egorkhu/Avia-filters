import styled from 'styled-components'

export const SidebarWrapper = styled.aside`
  width: 30vw;
  min-width: 150px;
  background-color: #d9d9d9;
  padding: 50px 0;
  box-sizing: border-box;
`

export const Settings = styled.section`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px 10px;
  box-sizing: border-box;
`

export const SettingsBlock = styled.section`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  margin-bottom: 1.7rem;
  
  & h3 {
    margin-left: 7px;
    font-size: 1rem;
  }
  
  ${props => props.id === 'price' && `
    & label {
      width: 20px;
      margin-right: 7px;
    }
  `}
`