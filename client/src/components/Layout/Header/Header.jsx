import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h2><Link to='/home' style={{ textDecoration: 'none', color: 'rgb(239, 239, 218)' }}>Broken Stars</Link></h2>
            </div>
        )
    }
}

export default Header