import React from 'react'
import './styles/Logo.css'


class Logo extends React.Component{
    render(){
        return(
			<React.Fragment>
				<section class="App-logo">
								<div class="logo" alt="imagen portada">
									<div class="triangle figure" id="triangle1"></div>
									<div class="triangle figure" id="triangle2"></div>
									<div class="triangle figure" id="triangle3"></div>
									<div class="rectangle figure"></div>
									<div class="triangle-bottom figure"></div>
								</div>
							</section>
			</React.Fragment>
        )
    }
}

export default Logo