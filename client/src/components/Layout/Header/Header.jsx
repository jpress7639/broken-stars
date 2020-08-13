import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component{
    constructor(){
        super()
    }

    render() {
        return(
            <div className="header">
           <h2><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Broken Stars</Link></h2>
            </div>
        )
    }
}

export default Header