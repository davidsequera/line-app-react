import React from 'react'
import { Link } from 'react-router-dom'

const SIZE = '32px';

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav>
                    <Link to='/'><MdHome size={SIZE} /></Link>
                    <Link to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
                    <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar