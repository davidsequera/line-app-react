import React from 'react'
import './styles/Reserve.css'
import Queue from '../components/Queue'

class Reserve extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="Page-container" id="Reserve">
                <h1 className="Page-title">Reserve</h1>
                <div className="reserve">
                <Queue/>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Reserve;