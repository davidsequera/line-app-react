import React from 'react'

class MyTicketsComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="MyTicketsComponent_container">
                    <div className="MyTicketsComponent_Actual">
                        <h1>Actual</h1>
                        <div className="MyTicketsComponent_Actual-item">
                            <div className="MyTicketsComponent_Actual-item-info">
                                <h3>Crepes & Waffles<br/>
                                    Parque de la 93<br/> 
                                    03 02 2020</h3>
                            </div>
                            <div className="MyTicketsComponent_Actual-item-turn">
                                <h2>2/3</h2>
                            </div>
                        </div>
                    </div>
                    <div className="MyTicketsComponent_History">
                        <h1>History</h1>
                        <div className="MyTicketsComponent_History-item">
                            <div className="MyTicketsComponent_History-item-info">
                            <h3>Crepes & Waffles<br/>
                                    Parque de la 93<br/> 
                                    03 02 2020
                            </h3>
                            </div>
                            <div className="MyTicketsComponent_History-item-turn">
                                {/* tal ves aca no tenga que haber nada */}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MyTicketsComponent