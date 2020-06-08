import React from 'react'

class Help extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Page-container" id="Help">
                    <h1 className="Page-title">Help</h1>
                    <div className="help">
                        <h1>Mision</h1>
                        <p>Aprovechar los tiempos de espera para Mejorar la experiencia de usuarios al usar nuestros servicios</p>
                        <h2>Vision</h2>
                        <p>Crear una comunidad que aprecie el valor del tiempo y lo optimize para el bien de la sociedad</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Help;