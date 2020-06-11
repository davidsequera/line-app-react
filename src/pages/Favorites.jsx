import React from 'react'
import FavoritesList from '../components/FavoritesList'
import './styles/Favorites.css'
import Loading from '../components/Loading'


const API = `http://192.168.0.6:3030/api?query=query%7B%0A%20%20restaurants%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20logo%0A%20%20%7D%0A%7D%0A`

class Favorites extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: undefined,
          };    
    }
    componentDidMount(){
        this.fetchData()
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
    }
    render(){
        if (this.state.loading === true  && !this.state.data) {
            return <Loading />;
          }
        return(
                <div className="Page-container" id="Favorites">
                    <h1 className="Page-title">Favorites</h1>
                    <div className="favorites">
                        <FavoritesList
                        favs={this.state.data.data}
                        />
                    </div>
                </div>
        )
    }
}

export default Favorites