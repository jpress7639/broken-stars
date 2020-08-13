import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
    constructor(){
        super()
    }

    render() {
        return(
            <div className="header">
            <Link to='/'><h2>Broken Stars</h2></Link>
            </div>
        )
    }
}

export default Header