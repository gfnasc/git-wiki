import Input from "../components/Input";
import Item from "../components/Item";

import githubLogo from '../assets/github-mark-white.png'
import { Container, ListingContainer } from './styles'
import { useState } from "react";

function App() {
  const [repositories, setRepositories] = useState([]);

  return (
    <Container>
      <header>
        <img src={githubLogo} width={72} height={72} alt="Github logo"/>
        <h1>GitWiki</h1>
      </header>

      <Input />
      <ListingContainer>
        <Item />
        <Item />
        <Item />
      </ListingContainer>
    </Container>
  );
}

export default App;
