import React from 'react'
import './styles/Reserve.css'
import Queue from '../components/Queue'
import UserTimer from '../components/UserTimer'



class Reserve extends React.Component{
    constructor(props){
        super(props)
        this.info = {
            data:  [
            {
                id :'1',
                name:'David Duque',
                timer: new Date("Jan 5, 2021 15:37:25").getTime(),
                spot:'1/14',
            },
            {
                id :'dgf243',
                name:'Alejo',
                spot:'2/14',
            },
            {
                id :'232dsaefa',
                name:'Daniel Garcia',
                spot:'3/14',
            },
            {
                id :'sfa223',
                name:'Nico',
                spot:'4/14',
            }
            ]
        }
        this.state = {date: new Date()}
        this.userTime = new Date("June 10, 2020 21:00:00").getTime()
        this.elReal = 'Wait'
    }
    componentDidMount(){
        this.timerID= setInterval(() =>this.tick(),500)
    }
    tick(){
        if(this.timeLeft < 0){
            clearInterval(this.timerID);
        }
        this.setState({date: new Date()})
        this.timeLeft = this.userTime - this.state.date
        this.minutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);
        this.elReal = `${this.minutes}:${this.seconds}`
        if (this.timeLeft < 0) {
            this.elReal = 'GO!!'
        }
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    render(){
        return(
            <div className="Page-container" id="Reserve">
                <h1 className="Page-title">Reserve</h1>
                <div className="reserve">
                <UserTimer
                time={this.elReal}
                />
                <Queue
                user={this.info.data}
                />
                </div>
            </div>
        )
    }
}



export default Reserve;