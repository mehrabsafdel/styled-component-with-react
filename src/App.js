import Container from './components/Container/Container';
import List from './components/List/List';
import Title from './components/Title/Title';

function App() {
  return (
    <Container>
      <Title type='h2' text='title1' />
      <Title type='h1' text='title2' />
      <List>
        <li> item 1 <div/></li>
        <li> item 2</li>
        <li> item 3</li>
      </List>
    </Container>
  );
}

export default App;
