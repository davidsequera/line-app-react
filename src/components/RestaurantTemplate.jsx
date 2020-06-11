import React from 'react'
import './styles/RestaurantTemplate.css'
import { Link } from 'react-router-dom';

class ResturantTemplate extends React.Component{
    render(){
        return(
                <div className="RestaurantTemplate_container">
                    <div className="RestaurantTemplate_logo-container">
                        <img className="RestaurantTemplate_logo" src='https://noticiaspositivas.org/wp-content/uploads/2016/09/13428461_959760114144156_6158447745931048628_n.jpg' alt="Logo"/>
                    </div>
                    <div className="RestaurantTemplate_info-container">
                        <h1 className="RestaurantTemplate_restaurant-name">Crepes & Waffles</h1>
                        <h2 className="RestaurantTemplate_location-name">Parque de la 93</h2>
                        <p className="RestaurantTemplate_address">CALLE 93 B # 12 - 10</p>
                    </div>
                    <form action="">
                        <Link to='/myTickets/ticketId'>
                        <button className="RestaurantTemplate_reserve-button button">RESERVE</button>
                        </Link>
                    </form>
                </div>
        )
    }
}

export default ResturantTemplate;