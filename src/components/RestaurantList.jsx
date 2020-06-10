import React from 'react';
import './styles/RestaurantList.css'
import { Link } from 'react-router-dom';


class RestaurantList extends React.Component{
    render(){
        const restaurant = this.props.restaurant.restaurants 
        return(
            <React.Fragment>
                <ul className="RestaurantList_container">
                    {restaurant.map((restaurant) => <li key={restaurant.id}>
                                <Link to={`explore/${restaurant.id}`}className="RestaurantList_item">
                                    <img className="RestaurantList_logo" src={restaurant.logo} alt={`logo ${restaurant.name}`}></img>
                                    <h2 className="RestaurantList_Name">{restaurant.name}</h2>
                                </Link>
                            </li>
                    )}
                </ul>
            </React.Fragment>
        )
    }
}

export default RestaurantList;


