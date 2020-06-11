import React from 'react'
import './styles/MyTickets.css'
import MyTicketsComponent from '../components/MyTicketsComponent'

class MyTickets extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            actual: [],
            history: []
        }
    }
    componentDidMount(){
        this.setState({
            actual: [
                {
                    id: 'fi3newin',
                    name: 'Crepes & Waffles',
                    address: 'Parque de la 93',
                    date: '03 02 2020',
                    position: '2/12'
                },
                {
                    id: 'ss22j',
                    name: 'Crepes & Waffles',
                    address: 'Parque de la 93',
                    date: '03 02 2020',
                    position: '2/12'
                },
                {
                    id: 'ddkn333dw',
                    name: 'Crepes & Waffles',
                    address: 'Parque de la 93',
                    date: '03 02 2020',
                    position: '2/12'
                }
            ],
            history: [
                {
                    id: 'fnse2ewd',
                    name: 'Wok',
                    address: 'Parque de la 93',
                    date: '03 02 2020'
                },
                {
                    id:'78sdsjjs',
                    name: 'Wok',
                    address: 'Parque de la 93',
                    date: '03 02 2020'
                },
                {
                    id: '8eieb9',
                    name: 'Wok',
                    address: 'Parque de la 93',
                    date: '03 02 2020'
                }
            ]
        })
    }
    render(){
        return(
                <div className="Page-container" id="MyTickets">
                    <h1 className="Page-title">My Tickets</h1>
                    <div className="mytickets">
                        <MyTicketsComponent
                        actual={this.state.actual}
                        history={this.state.history}
                        />
                    </div>
                </div>
        )
    }
}

export default MyTickets;