import React from 'react'
import PlaceList from '../components/PlaceList'
import './styles/Locations.css'

class Place extends React.Component{
    constructor(props){
        super(props)
        console.log(1)
        this.state = {
            data: [],
          };    
    }
    componentDidMount(){
        this.setState({
            data: [{
                id :'fnfndsfdfsfsd',
                name:'Crepes & Waffles',
                nplace: 'Parque de la 93',
                address:'CALLE 93 B # 12 - 10',
            },
            {
                id :'ewrvfrgted',
                name:'Crepes & Waffles',
                nplace: 'Aeropuerto',
                address:'CALLE 26 # 103-9',
            },
            {
                id :'dgfdfdsf',
                name:'Crepes & Waffles',
                nplace: 'Usaquén',
                address:'CARRERA 6 # 119 - 56',
            },
            {
                id :'dgffsfssdff',
                name:'Crepes & Waffles',
                nplace: 'Parque la Colina',
                address:'CARRERA 58 D # 146 - 51',
            }
            ]
            
        })
    }
    render(){
        return(
                <div className="Page-container" id="Locations">
                    <h1 className="Page-title">{'Crepes & Waffles'}</h1>
                    <div className="locations">
                        <PlaceList
                        place={this.state.data}
                        />
                    </div>
                </div>
        )
    }
}

export default Place;
