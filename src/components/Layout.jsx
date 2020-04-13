import React from 'react'
import Navbar from './Navbar'


function Layout (props){
    return(
        <React.Fragment>
            <div className="Layout-container">
                {props.children}
            </div>
            <Navbar/>
        </React.Fragment>
    )
}

export default Layout