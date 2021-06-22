import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// react-router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// css
import './App.scss';

//components
import Header from './components/Header/Header';

// actions
import { getCountries } from './action/Actions';
import Home from './components/Home';
import Flag from './components/FlagPage/Flag';

function App() {
  const dispatch = useDispatch();

  interface stateType {
    countries: [];
    filter: string;
    loading: string;
  }

  const allcountries = useSelector(
    ({ Reducer }: { Reducer: stateType }) => Reducer.countries
  );

  const filter = useSelector(
    ({ Reducer }: { Reducer: stateType }) => Reducer.filter
  );

  useEffect(() => {
    dispatch(getCountries(filter));
    window.onload = () => {
      document.body.setAttribute('id', 'body');
    };
    // eslint-disable-next-line
  }, [filter]);

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home data={allcountries} />
          </Route>
          <Route path="/:name" component={Flag} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
