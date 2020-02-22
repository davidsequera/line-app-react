import React from 'react'
import './styles/RestaurantTemplate.css'
import { Link } from 'react-router-dom';

class ResturantTemplate extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="RestaurantTemplate_container">
                    <div className="RestaurantTemplate_logo-container">
                        <img className="RestaurantTemplate_logo" src="https://instagram.fbog2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/69621607_496699594487582_8129503935976177664_n.jpg?_nc_ht=instagram.fbog2-2.fna.fbcdn.net&_nc_ohc=OfEOkbPnbqwAX9iZfgW&oh=90e901d2dc912fb8beb52b2eb69229da&oe=5E8AF631" alt="Logo"/>
                    </div>
                    <div className="RestaurantTemplate_info-cotainer">
                        <h1 className="RestaurantTemplate_info-name">Crepes & Waffles</h1>
                        <h2 className="RestaurantTemplate_placeName">Parque de la 93</h2>
                        <p className="RestaurantTemplate_address">CALLE 93 B # 12 - 10</p>
                    </div>
                    <form action="">
                        <Link to='/explore/places/restaurant/reserve'>
                        <button className="RestaurantTemplate_reserveButton">RESERVE</button>
                        </Link>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default ResturantTemplate;