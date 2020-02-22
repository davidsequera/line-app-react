import React from 'react'
import './styles/UserOptions.css'
import { Link } from 'react-router-dom';
import {MdAccountCircle} from 'react-icons/md'

class UserOptions extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="UserOptions_container">
                    <Link to="/user/useredit" className="UserOptions_item" id="UserOptions_User-info">
                        <MdAccountCircle className="UserOptions_User-logo"/>
                        {/* <img className="UserOptions_User-logo" src={MdAccountCircle} alt="User photo"/> */}
                        <div id="UserOptions_info-text">
                            <h1 className="UserOptions_info-text">Public Name</h1>
                            <h1 className="UserOptions_info-text">Email</h1>
                        </div>
                    </Link>
                    <Link to="/user/mytickets"  className="UserOptions_item" id="UserOptions_MyTickets">
                        <div className="UserOptions_text-container" id="My-Tickets-container">
                            <h1 className="UserOptions_item-text">My Tickets</h1>
                        </div>
                    </Link>
                    <Link to="/user/appsettings" className="UserOptions_item" id="UserOptions_AppSetting">
                        <div className="UserOptions_text-container" id="App-Setting-cotainer">
                            <h1 className="UserOptions_item-text">App Setting</h1>
                        </div>
                    </Link>
                    <Link to="/user/Help" className="UserOptions_item" id="UserOptions_Help">
                        <div className="UserOptions_text-container" id="Help-cotainer">
                            <h1 className="UserOptions_item-text">Help</h1>
                        </div>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default UserOptions;