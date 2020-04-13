import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import Loading from './components/Loading';
import Explore from './pages/Explore';
import Favorites from './pages/Favorites';
import LogIn from './pages/LogIn';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import User from './pages/User';
import Place from './pages/Place';
import Restaurant from './pages/Restaurant';
import Reserve from './pages/Reserve';
import UserEdit from './pages/UserEdit';
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
                <Route exact path="/favs" component={Favorites}/>
                <Route exact path="/user" component={User}/>
                {/* <Route exact path="/" component={Loading}/> */}
                <Route exact path="/explore/:resturantId/places" component={Place}/>
                {/* <Route exact path="/explore/places" component={Place}/> */}
                <Route exact path="/explore/:resturantId/:placeId" component={Restaurant}/>
                <Route exact path="/explore/resturantId/placesId/reserve" component={Reserve}/>
                <Route exact path="/user/useredit" component={UserEdit}/>
                <Route exact path="/user/mytickets" component={MyTickets}/>
                <Route exact path="/user/appsettings" component={AppSettings}/>
                <Route exact path="/user/Help" component={Help}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
        </BrowserRouter>
  );
}

export default App;
