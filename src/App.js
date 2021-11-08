import { Route, Switch } from 'react-router';
import './App.scss';
import Container from './components/UI/Container';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { getCatBreedList } from './apis/index';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import TopTen from './pages/TopTen';
import BreedDetails from './pages/BreedDetails';

function App() {
  const [catBreedList, setCatBreedList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    await getCatBreedList().then((res) => setCatBreedList(res.data));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home catBreedList={catBreedList}>Wiki</Home>;
        </Route>
        <Route path='/top-ten'>
          <TopTen topList={catBreedList.slice(0, 10)} isLoading={isLoading} />
        </Route>
        <Route path='/breed/:id'>
          <BreedDetails />
        </Route>
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
