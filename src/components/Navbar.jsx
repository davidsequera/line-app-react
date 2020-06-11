import React from 'react'
import { Link } from 'react-router-dom'
import { MdHome, MdFavorite, MdAccountCircle } from 'react-icons/md'
import './styles/Navbar.css'

const SIZE = '32px';

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navbar: undefined
        }
    }
    render(){
        return(
                <nav>
                    <Link className={this.state.navbar === 'Home' ? "NavActive" : "NavButton"} onClick={ () => this.setState({navbar :'Home'})} to='/'><MdHome size={SIZE} /></Link>
                    <Link className={this.state.navbar === 'Favorites' ? "NavActive" : "NavButton"} onClick={ () => this.setState({navbar:'Favorites'})} to='/favorites'><MdFavorite size={SIZE} /></Link>
                    <Link className={this.state.navbar === 'Account' ? "NavActive" : "NavButton"} onClick={ () => this.setState({navbar: 'Account'})} to='/account'><MdAccountCircle size={SIZE} /></Link>
                </nav>
        )
    }
}

export default Navbar