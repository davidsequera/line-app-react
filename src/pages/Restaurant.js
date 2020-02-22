import React from 'react'
import ResturantTemplate from '../components/RestaurantTemplate'

class Restaurant extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="Page-container" id="Restaurant">
                {/* <h1 className="Page-title">Restaurant</h1> */}
                <div className="restaurant">
                    <ResturantTemplate />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Restaurant;