import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import Explore from './pages/Explore';
import Favorites from './pages/Favorites';
import LogIn from './pages/LogIn';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Account from './pages/Account';
import Place from './pages/Place';
import Restaurant from './pages/Restaurant';
import Reserve from './pages/Reserve';
import Profile from './pages/Profile';
import MyTickets from './pages/MyTickets';
import AppSettings from './pages/AppSettings';
import Help from './pages/Help';


function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path="/" component={Explore}/>
                <Route exact path="/favorites" component={Favorites}/>
                <Route exact path="/account" component={Account}/>
                <Route exact path="/explore/:resturantId" component={Place}/>
                {/* <Route exact path="/explore/places" component={Place}/> */}
                <Route exact path="/explore/:resturantId/:placeId" component={Restaurant}/>
                <Route exact path="/myTickets/ticketId" component={Reserve}/>
                <Route exact path="/account/profile" component={Profile}/>
                <Route exact path="/myTickets" component={MyTickets}/>
                <Route exact path="/account/appsettings" component={AppSettings}/>
                <Route exact path="/account/help" component={Help}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
        </BrowserRouter>
  );
}

export default App;
