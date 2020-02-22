import React from 'react'
import Logo from './Logo'
import './styles/Loading.css'
import { Link } from 'react-router-dom'

class Loading extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Loading">
                    <div className="Loading-main">
                        <h1>LineApp</h1>
                        <Link to='/explore'>
                        <Logo />
                        </Link>
                        <h5 style={{fontStyle:"italic"}}>Stay tune for updates</h5>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Loading


/* <div className="App">
<header className="App-header">
  <Loading />
  <Explore/>
</header>
</div> */