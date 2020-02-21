import React from 'react'
import Logo from '../components/Logo'
import './styles/Loading.css'

class Loading extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Loading">
                    <main className="Loading-main">
                        <Logo />
                        <h3>Hi, We are working to give you the best expirience</h3>
                        <h5 style={{fontStyle:"italic"}}>Stay tune for updates</h5>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}

export default Loading


{/* <div className="App">
<header className="App-header">
  <Loading />
  <Explore/>
</header>
</div> */}