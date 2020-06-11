import React from 'react'
import './styles/Explore.css'
import RestaurantList from '../components/RestaurantList'
import Loading from '../components/Loading'

const port = 3030

const AI = `http://localhost:${port}/api`
const API = `http://192.168.0.6:3030/api?query=query%7B%0A%20%20restaurants%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20logo%0A%20%20%7D%0A%7D%0A`

class Explore extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: undefined,
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
            const response = await fetch(API)
            const data = await response.json()
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
                <div className="Page-container" id="Explore">
                    <h1 className="Page-title">Explore</h1>
                    <div className="explore">
                        <h2 style={{'margin': '2px'}}>Restaurants</h2>
                        <RestaurantList
                        restaurant={this.state.data.data}
                        />
                    </div>
                </div>
        )
    }
}

export default Explore;