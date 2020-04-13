import React from 'react'
import PlaceList from '../components/PlaceList'
import './styles/Place.css'

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
            <React.Fragment>
                <div className="Page-container" id="Places">
                    <h1 className="Page-title">{'Crepes & Waffles'}</h1>
                    <div className="places">
                        <PlaceList
                        place={this.state.data}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Place;


// {
//     "retaurants": [
//     {
//         "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
//         "Name": "Crepes & Waffles",
//         "imgUrl":"https://www.catalogodavipuntos.com/3660-tm_thickbox_default/bono-crepes-waffles-50000.jpg",
//         "places": [
//             {
//                 "id" :"fnfndsfdfsfsd",
//                 "nplace": "Parque de la 93",
//                 "address":"CALLE 93 B # 12 - 10"
//             },
//             {
//                 "id" :"ewrvfrgted",
//                 "nplace": "Aeropuerto",
//                 "address":"CALLE 26 # 103-9"
//             },
//             {
//                 "id" :"dgfdfdsf",
//                 "nplace": "Usaquén",
//                 "address":"CARRERA 6 # 119 - 56"
//             },
//             {
//                 "id" :"dgffsfssdff",
//                 "nplace": "Parque la Colina",
//                 "address":"CARRERA 58 D # 146 - 51"
//             }
//         ]
//     },
//     {
//         "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
//         "Name": "Wok",
//         "imgUrl":"https://www.parquelacolina.com/wp-content/uploads/2018/11/wok-logo.png",
//         "places": [
//             {
//                 "id" :"fnfndsfdfsfsd",
//                 "nplace": "Parque de la 93",
//                 "address":"CALLE 93 B # 12 - 10"
//             },
//             {
//                 "id" :"ewrvfrgted",
//                 "nplace": "Aeropuerto",
//                 "address":"CALLE 26 # 103-9"
//             },
//             {
//                 "id" :"dgfdfdsf",
//                 "nplace": "Usaquén",
//                 "address":"CARRERA 6 # 119 - 56"
//             },
//             {
//                 "id" :"dgffsfssdff",
//                 "nplace": "Parque la Colina",
//                 "address":"CARRERA 58 D # 146 - 51"
//             }
//         ]
//     },    {
//         "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
//         "Name": "Crepes & Waffles",
//         "imgUrl":"https://www.catalogodavipuntos.com/3660-tm_thickbox_default/bono-crepes-waffles-50000.jpg",
//         "places": [
//             {
//                 "id" :"fnfndsfdfsfsd",
//                 "nplace": "Parque de la 93",
//                 "address":"CALLE 93 B # 12 - 10"
//             },
//             {
//                 "id" :"ewrvfrgted",
//                 "nplace": "Aeropuerto",
//                 "address":"CALLE 26 # 103-9"
//             },
//             {
//                 "id" :"dgfdfdsf",
//                 "nplace": "Usaquén",
//                 "address":"CARRERA 6 # 119 - 56"
//             },
//             {
//                 "id" :"dgffsfssdff",
//                 "nplace": "Parque la Colina",
//                 "address":"CARRERA 58 D # 146 - 51"
//             }
//         ]
//     },    {
//         "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
//         "Name": "Andres Carne de res",
//         "imgUrl":"'https://lh3.googleusercontent.com/proxy/t_ngOJhFbVckgahPUPBCmyQJWkSZpyit_X3joXu_VXCF_K2pKTTmehjd5cunrS1SF2kH_hZKeVQ6OKADVdPac00T31BEsV8dk9K4OzMdbRZvdkK-O5GEedpIcfT71IU",
//         "places": [
//             {
//                 "id" :"fnfndsfdfsfsd",
//                 "nplace": "Parque de la 93",
//                 "address":"CALLE 93 B # 12 - 10"
//             },
//             {
//                 "id" :"ewrvfrgted",
//                 "nplace": "Aeropuerto",
//                 "address":"CALLE 26 # 103-9"
//             },
//             {
//                 "id" :"dgfdfdsf",
//                 "nplace": "Usaquén",
//                 "address":"CARRERA 6 # 119 - 56"
//             },
//             {
//                 "id" :"dgffsfssdff",
//                 "nplace": "Parque la Colina",
//                 "address":"CARRERA 58 D # 146 - 51"
//             }
//         ]
//     }
//     ]
// }