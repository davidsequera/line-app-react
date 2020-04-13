import React from 'react'
import './styles/RestaurantTemplate.css'
import { Link } from 'react-router-dom';

class ResturantTemplate extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="RestaurantTemplate_container">
                    <div className="RestaurantTemplate_logo-container">
                        <img className="RestaurantTemplate_logo" src='https://www.catalogodavipuntos.com/3660-tm_thickbox_default/bono-crepes-waffles-50000.jpg' alt="Logo"/>
                    </div>
                    <div className="RestaurantTemplate_info-cotainer">
                        <h1 className="RestaurantTemplate_info-name">Crepes & Waffles</h1>
                        <h2 className="RestaurantTemplate_placeName">Parque de la 93</h2>
                        <p className="RestaurantTemplate_address">CALLE 93 B # 12 - 10</p>
                    </div>
                    <form action="">
                        <Link to='/explore/resturantId/placesId/reserve'>
                        <button className="RestaurantTemplate_reserveButton">RESERVE</button>
                        </Link>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default ResturantTemplate;