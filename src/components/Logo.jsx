import React from 'react'
import './styles/Logo.css'


class Logo extends React.Component{
    render(){
        return(
			<React.Fragment>
				<section className="App-logo">
								<div className="logo" alt="imagen portada">
									<div className="triangle figure" id="triangle1"></div>
									<div className="triangle figure" id="triangle2"></div>
									<div className="triangle figure" id="triangle3"></div>
									<div className="rectangle figure"></div>
									<div className="triangle-bottom figure"></div>
								</div>
							</section>
			</React.Fragment>
        )
    }
}

export default Logo