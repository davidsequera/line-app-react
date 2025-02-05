import React from 'react'
import { Link } from 'react-router-dom';
import './styles/PlaceList.css'

class PlaceList extends React.Component{
    render(){
        return(
                <div className="PlaceList_container">
                    {this.props.place.map((place) =>{
                        return(
                            <Link to={`/explore/${place.name}/${place.nplace}`}className="PlaceList_item" key={place.id}>
                                <div className="PlaceList_item-container">
                                    <h2 className="PlaceList_item-name">{place.nplace}</h2>
                                    <p className="PlaceList_item-address">{place.address}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
        )
    }
}

export default PlaceList;