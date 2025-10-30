import Input from "../components/Input";
import Item from "../components/Item";

import githubLogo from '../assets/github-mark-white.png'
import { Container, ListingContainer } from './styles'
import { useState } from "react";
import { api } from "../service/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  const handleSearchRepo = async () => {    
    if (!currentRepo) return;

    try {
      const { data } = await api.get(`/search/repositories?q=${currentRepo}`);

      if (data.items && data.items.length > 0) {
        const newRepo = data.items[0]; // Pega o primeiro resultado da busca
        const isExist = repositories.find(repo => repo.id === newRepo.id);

        if (!isExist) {
          setRepositories(prev => [...prev, newRepo]);
          setCurrentRepo('');
          return;
        }
        alert('Repositório já adicionado.');
      } else {
        alert('Nenhum repositório encontrado com este nome.');
      }
    } catch (error) {
      alert('Repositório não encontrado ou API indisponível.');
    }
  }

  const handleRemoveRepo = (id) => setRepositories(prev => prev.filter(repo => repo.id !== id));

  return (
    <Container>
      <header>
        <img src={githubLogo} width={72} height={72} alt="Github logo"/>
        <h1>GitWiki</h1>
      </header>

      <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)} handleSearchRepo={handleSearchRepo} />
      <ListingContainer>
        {repositories.map(repository => (
          <Item key={repository.id} repository={repository} handleRemoveRepo={handleRemoveRepo} />
        ))}
      </ListingContainer>
    </Container>
  );
}

export default App;
