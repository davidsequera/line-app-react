import React from 'react'
import './styles/Explore.css'
import RestaurantList from '../components/RestaurantList'
import Loading from '../components/Loading'

const fakeApi = [
    {
        "id": "crepes001",
        "Name": "Crepes & Waffles",
        "imgUrl":"https://www.parquelacolina.com/wp-content/uploads/2018/11/crepeswaffles-logo.png",
        "places": [
            {
                "id" :"fnfndsfdfsfsd",
                "nplace": "Parque de la 93",
                "address":"CALLE 93 B # 12 - 10"
            },
            {
                "id" :"ewrvfrgted",
                "nplace": "Aeropuerto",
                "address":"CALLE 26 # 103-9"
            },
            {
                "id" :"dgfdfdsf",
                "nplace": "Usaquén",
                "address":"CARRERA 6 # 119 - 56"
            },
            {
                "id" :"dgffsfssdff",
                "nplace": "Parque la Colina",
                "address":"CARRERA 58 D # 146 - 51"
            }
        ]
    },
    {
        "id": "wok001",
        "Name": "Wok",
        "imgUrl":"https://www.parquelacolina.com/wp-content/uploads/2018/11/wok-logo.png",
        "places": [
            {
                "id" :"fnfndsfdfsfsd",
                "nplace": "Parque de la 93",
                "address":"CALLE 93 B # 12 - 10"
            },
            {
                "id" :"ewrvfrgted",
                "nplace": "Aeropuerto",
                "address":"CALLE 26 # 103-9"
            },
            {
                "id" :"dgfdfdsf",
                "nplace": "Usaquén",
                "address":"CARRERA 6 # 119 - 56"
            },
            {
                "id" :"dgffsfssdff",
                "nplace": "Parque la Colina",
                "address":"CARRERA 58 D # 146 - 51"
            }
        ]
    },    
    {
        "id": "buffalo001",
        "Name": "Buffallo Wings",
        "imgUrl":"https://ccplazacentral.com/wp-content/uploads/2017/08/buffalo.jpg",
        "places": [
            {
                "id" :"fnfndsfdfsfsd",
                "nplace": "Parque de la 93",
                "address":"CALLE 93 B # 12 - 10"
            },
            {
                "id" :"ewrvfrgted",
                "nplace": "Aeropuerto",
                "address":"CALLE 26 # 103-9"
            },
            {
                "id" :"dgfdfdsf",
                "nplace": "Usaquén",
                "address":"CARRERA 6 # 119 - 56"
            },
            {
                "id" :"dgffsfssdff",
                "nplace": "Parque la Colina",
                "address":"CARRERA 58 D # 146 - 51"
            }
        ]
    },    
    {
        "id": "andres001",
        "Name": "Andres Carne de res",
        "imgUrl":"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092014/andres_carne_de_res.png?itok=UjlIicZ-" ,
        "places": [
            {
                "id" :"fnfndsfdfsfsd",
                "nplace": "Parque de la 93",
                "address":"CALLE 93 B # 12 - 10"
            },
            {
                "id" :"ewrvfrgted",
                "nplace": "Aeropuerto",
                "address":"CALLE 26 # 103-9"
            },
            {
                "id" :"dgfdfdsf",
                "nplace": "Usaquén",
                "address":"CARRERA 6 # 119 - 56"
            },
            {
                "id" :"dgffsfssdff",
                "nplace": "Parque la Colina",
                "address":"CARRERA 58 D # 146 - 51"
            }
        ]
    
    },
    {
        "id": "corral001",
        "Name": "El Corral Gourmet",
        "imgUrl":"https://eltesoro.com.co/wp-content/uploads/2016/10/el-corral-gourmet-logo-el-tesoro.png" ,
        "places": [
            {
                "id" :"fnfndsfdfsfsd",
                "nplace": "Parque de la 93",
                "address":"CALLE 93 B # 12 - 10"
            },
            {
                "id" :"ewrvfrgted",
                "nplace": "Aeropuerto",
                "address":"CALLE 26 # 103-9"
            },
            {
                "id" :"dgfdfdsf",
                "nplace": "Usaquén",
                "address":"CARRERA 6 # 119 - 56"
            },
            {
                "id" :"dgffsfssdff",
                "nplace": "Parque la Colina",
                "address":"CARRERA 58 D # 146 - 51"
            }
        ]
    }
    ]
class Explore extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: [
                {
                    "id": "crepes001",
                    "Name": "Crepes & Waffles",
                    "imgUrl":"https://www.parquelacolina.com/wp-content/uploads/2018/11/crepeswaffles-logo.png",
                    "places": [
                        {
                            "id" :"fnfndsfdfsfsd",
                            "nplace": "Parque de la 93",
                            "address":"CALLE 93 B # 12 - 10"
                        },
                        {
                            "id" :"ewrvfrgted",
                            "nplace": "Aeropuerto",
                            "address":"CALLE 26 # 103-9"
                        },
                        {
                            "id" :"dgfdfdsf",
                            "nplace": "Usaquén",
                            "address":"CARRERA 6 # 119 - 56"
                        },
                        {
                            "id" :"dgffsfssdff",
                            "nplace": "Parque la Colina",
                            "address":"CARRERA 58 D # 146 - 51"
                        }
                    ]
                },
                {
                    "id": "wok001",
                    "Name": "Wok",
                    "imgUrl":"https://www.parquelacolina.com/wp-content/uploads/2018/11/wok-logo.png",
                    "places": [
                        {
                            "id" :"fnfndsfdfsfsd",
                            "nplace": "Parque de la 93",
                            "address":"CALLE 93 B # 12 - 10"
                        },
                        {
                            "id" :"ewrvfrgted",
                            "nplace": "Aeropuerto",
                            "address":"CALLE 26 # 103-9"
                        },
                        {
                            "id" :"dgfdfdsf",
                            "nplace": "Usaquén",
                            "address":"CARRERA 6 # 119 - 56"
                        },
                        {
                            "id" :"dgffsfssdff",
                            "nplace": "Parque la Colina",
                            "address":"CARRERA 58 D # 146 - 51"
                        }
                    ]
                },    
                {
                    "id": "buffalo001",
                    "Name": "Buffallo Wings",
                    "imgUrl":"https://ccplazacentral.com/wp-content/uploads/2017/08/buffalo.jpg",
                    "places": [
                        {
                            "id" :"fnfndsfdfsfsd",
                            "nplace": "Parque de la 93",
                            "address":"CALLE 93 B # 12 - 10"
                        },
                        {
                            "id" :"ewrvfrgted",
                            "nplace": "Aeropuerto",
                            "address":"CALLE 26 # 103-9"
                        },
                        {
                            "id" :"dgfdfdsf",
                            "nplace": "Usaquén",
                            "address":"CARRERA 6 # 119 - 56"
                        },
                        {
                            "id" :"dgffsfssdff",
                            "nplace": "Parque la Colina",
                            "address":"CARRERA 58 D # 146 - 51"
                        }
                    ]
                },    
                {
                    "id": "andres001",
                    "Name": "Andres Carne de res",
                    "imgUrl":"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092014/andres_carne_de_res.png?itok=UjlIicZ-" ,
                    "places": [
                        {
                            "id" :"fnfndsfdfsfsd",
                            "nplace": "Parque de la 93",
                            "address":"CALLE 93 B # 12 - 10"
                        },
                        {
                            "id" :"ewrvfrgted",
                            "nplace": "Aeropuerto",
                            "address":"CALLE 26 # 103-9"
                        },
                        {
                            "id" :"dgfdfdsf",
                            "nplace": "Usaquén",
                            "address":"CARRERA 6 # 119 - 56"
                        },
                        {
                            "id" :"dgffsfssdff",
                            "nplace": "Parque la Colina",
                            "address":"CARRERA 58 D # 146 - 51"
                        }
                    ]
                
                },
                {
                    "id": "corral001",
                    "Name": "El Corral Gourmet",
                    "imgUrl":"https://eltesoro.com.co/wp-content/uploads/2016/10/el-corral-gourmet-logo-el-tesoro.png" ,
                    "places": [
                        {
                            "id" :"fnfndsfdfsfsd",
                            "nplace": "Parque de la 93",
                            "address":"CALLE 93 B # 12 - 10"
                        },
                        {
                            "id" :"ewrvfrgted",
                            "nplace": "Aeropuerto",
                            "address":"CALLE 26 # 103-9"
                        },
                        {
                            "id" :"dgfdfdsf",
                            "nplace": "Usaquén",
                            "address":"CARRERA 6 # 119 - 56"
                        },
                        {
                            "id" :"dgffsfssdff",
                            "nplace": "Parque la Colina",
                            "address":"CARRERA 58 D # 146 - 51"
                        }
                    ]
                }
                ],
          };    
    }
    componentDidMount(){
       this.timeOut = setTimeout(() => {
                this.fetchData()
            }, 2000);
    }
    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = this.data
            // const response = await fetch(fakeApi)
            // const data = await response.json()
            this.setState({loading:false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
      };
    componentWillUnmount(){
        clearTimeout(this.timeOut)
    }
    render(){
        if (this.state.loading === true  && !this.state.data) {
            return <Loading />;
          }
        return(
            <React.Fragment>
                <div className="Page-container" id="Explorer">
                    <h1 className="Page-title">Explore</h1>
                    <div className="restaurants">
                        <h2>Restaurants</h2>
                        <RestaurantList
                        restaurant={this.state.data}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Explore;