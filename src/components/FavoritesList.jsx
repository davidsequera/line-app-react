import React from 'react'
import './styles/FavoritesList.css'
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md'


class FavoritesList extends React.Component{
    render(){
        return(
            <React.Fragment>

                <ul className="FavoritesList_container">
                {this.props.favs.restaurants.map((restaurant) => <li key={restaurant.id}>
                        <Link to={`explore/${restaurant.id}`} className="FavoritesList_item">
                            <img className="RestaurantList_logo" src={restaurant.logo} alt={`logo ${restaurant.name}`}></img>
                        </Link>
                    </li>
                )}
                <li className="FavoritesList_item">

                </li>
                <li className="FavoritesList_item">

                </li>
                <li className="FavoritesList_item">

                </li>
                <li className="FavoritesList_item">

                </li>
                <li className="FavoritesList_item">
                    <Link className='dd' onClick={ () => this.setState({navbar :'Home'})} to='/'><MdAdd size='60px' /></Link>
                </li>
                </ul>
                </React.Fragment>
        )
    }
}

export default FavoritesList