import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Loading from './pages/Loading';
import Explore from './pages/Explore';
import Favorites from './pages/Favorites';
import LogIn from './pages/LogIn';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/explore" component={Explore}/>
                <Route exact path="/favorites" component={Favorites}/>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path="/" component={Loading}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
        </BrowserRouter>
  );
}

export default App;
