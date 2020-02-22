import React from 'react'
import './styles/MyTickets.css'
import MyTicketsComponent from '../components/MyTicketsComponent'

class MyTickets extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Page-container" id="MyTickets">
                    <h1 className="Page-title">My Tickets</h1>
                    <div className="mytickets">
                        <MyTicketsComponent/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MyTickets;