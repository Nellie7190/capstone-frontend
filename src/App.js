import styled from 'styled-components';
import Main from './Main';
import Header from './components/Header';
import Footer from './components/Footer';

const Body = styled.body`
  margin: 0 auto;
  background-color: azure;
`

function App() {
  return (
    <Body>
      <Header />
      <Main />
      <Footer />
    </Body>
  );
}

export default App;
