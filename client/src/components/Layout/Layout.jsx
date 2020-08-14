import React from 'react'
import Header from './Header/Header'
import './Layout.css'

const Layout = (props) => {
    return(
        <div className="layout">
            <div className="moon-animation"></div>
            <div className="star1-animation"></div>
            <div className="star2-animation"></div>
            <div className="star3-animation"></div>
            <div className="star4-animation"></div>
            <div className="star5-animation"></div>
            <div className="star6-animation"></div>
            <div className="star7-animation"></div>
            <div className="star8-animation"></div>
            <div className="star9-animation"></div>
            <div className="star10-animation"></div>
            <div className="star11-animation"></div>
            <Header />
            <div className="layout-children">
                {props.children}
            </div>
        </div>
    )
}

export default Layout