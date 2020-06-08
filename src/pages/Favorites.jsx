import React from 'react'
import FavoritesList from '../components/FavoritesList'
import './styles/Favorites.css'

class Favorites extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Page-container" id="Favorites">
                    <h1 className="Page-title">Favorites</h1>
                    <div className="favs">
                        <FavoritesList/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Favorites