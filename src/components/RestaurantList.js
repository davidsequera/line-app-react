import React from 'react';
import './styles/RestaurantList.css'
import { Link } from 'react-router-dom';


class RestaurantList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ul className="RestaurantList_container">
                    {this.props.restaurant.map((restaurant) =>{
                        return(
                            <li key={restaurant.id}>
                                <Link to={`explore/${restaurant.Name}/places`}className="RestaurantList_item">
                                    <img className="RestaurantList_logo" src={restaurant.imgUrl} alt="logo restaurant"></img>
                                    <h2 className="RestaurantList_Name">{restaurant.Name}</h2>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default RestaurantList;


