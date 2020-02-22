import React from 'react';
import './styles/RestaurantList.css'
import { Link } from 'react-router-dom';


class RestaurantList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="RestaurantList_container">
                    {this.props.restaurant.map((restaurant) =>{
                        return(
                            <Link to='explore/places'className="RestaurantList_item" key={restaurant.id}>
                                <img className="RestaurantList_logo" src={restaurant.imgUrl} alt="logo restaurant"></img>
                                <h2 className="RestaurantList_Name">{restaurant.Name}</h2>
                            </Link>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default RestaurantList;


