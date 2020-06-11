import React from 'react'
import './styles/MyTicketsComponent.css'

class MyTicketsComponent extends React.Component{
    render(){
        return(
                <div className="MyTicketsComponent_container">
                    <ul className="MyTicketsComponent_Queue" id="MyTicketsComponent_Actual">
                        <h1>Actual</h1>
                        {this.props.actual.map((user) =><li  className="MyTicketsComponent_item MyTicketsComponent_Actual-item" key={user.id}>
                            <div className="MyTicketsComponent_Actual-item-text">
                                <h2 className="MyTicketsComponent_text">{user.name}</h2>
                                <h2 className="MyTicketsComponent_text">{user.address}</h2>
                                <h2 className="MyTicketsComponent_text">{user.date}</h2>
                            </div>
                            <h2 className="MyTicketsComponent_spot">{user.position}</h2>
                            </li>)}
                    </ul>
                    <ul className="MyTicketsComponent_Queue" id="MyTicketsComponent_History">
                        <h1>History</h1>
                        {this.props.history.map((user) =><li className="MyTicketsComponent_item MyTicketsComponent_History-item" key={user.id}>
                            <div className="MyTicketsComponent_Actual-item-info">
                                <h2 className="MyTicketsComponent_text">{user.name}</h2>
                                <h2 className="MyTicketsComponent_text">{user.address}</h2>
                                <h2 className="MyTicketsComponent_text">{user.date}</h2>
                            </div>
                            </li>)}
                    </ul>
                </div>
        )
    }
}
export default MyTicketsComponent