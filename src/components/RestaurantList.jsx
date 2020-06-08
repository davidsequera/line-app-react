import React from 'react';
import './styles/RestaurantList.css'
import { Link } from 'react-router-dom';


class RestaurantList extends React.Component{
    render(){
        console.log(this.props.restaurant)
        return(
            <React.Fragment>
                <ul className="RestaurantList_container">
                    {this.props.restaurant.map((restaurant) => <li key={restaurant.id}>
                                <Link to={`explore/${restaurant.id}/places`}className="RestaurantList_item">
                                    <img className="RestaurantList_logo" src={restaurant.imgUrl} alt={`logo ${restaurant.Name}`}></img>
                                    <h2 className="RestaurantList_Name">{restaurant.Name}</h2>
                                </Link>
                            </li>
                    )}
                </ul>
            </React.Fragment>
        )
    }
}

export default RestaurantList;


