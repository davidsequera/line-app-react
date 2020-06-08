import React from 'react'
import Logo from './Logo'
import './styles/Loading.css'

function Loading (){
        return(
            <React.Fragment>
                <div className="Loading">
                    <div className="Loading-main">
                        <h1 className="App-title">LineApp</h1>
                        <div>
                        <Logo />
                        </div>
                        <h5 style={{fontStyle:"italic"}}>Stay tune for updates</h5>
                    </div>
                </div>
            </React.Fragment>
        )
    }

export default Loading


/* <div className="App">
<header className="App-header">
  <Loading />
  <Explore/>
</header>
</div> */