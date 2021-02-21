import {Sidebar} from './containers/sidebar/Sidebar'
import {GlobalStyle, Wrapper} from './styled'
import {Main} from './containers/main/Main'
import {MainState} from './context/main/mainState'

function App() {
  return (
      <MainState>
          <GlobalStyle />
          <Wrapper>
              <Sidebar/>
              <Main/>
          </Wrapper>
      </MainState>
  )
}

export default App;
