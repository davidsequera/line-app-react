import React from 'react'
import { Link } from 'react-router-dom'
import { MdHome, MdFavorite, MdAccountCircle } from 'react-icons/md'
import './styles/Navbar.css'

const SIZE = '32px';

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navbar: ''
        }
    }
    componentDidMount(){
        this.setState({
            navbar: 'Home'
        })
    }
    componentDidUpdate(){

    }
    render(){
        return(
            <React.Fragment>
                <nav>
                    <Link className="NavButton" to='/'><MdHome size={SIZE} /></Link>
                    <Link className="NavButton" to='/favs'><MdFavorite size={SIZE} /></Link>
                    <Link className="NavButton" to='/user'><MdAccountCircle size={SIZE} /></Link>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar