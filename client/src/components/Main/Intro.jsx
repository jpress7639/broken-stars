import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Intro.css"

class Intro extends Component {
    render() {
        return (
            <>
                <h2 className="quote">“I put my heart and soul into my work, and I have lost my mind in the process.”<br></br><em>- Vincent Van Gogh</em></h2>
                <Link to='/home'><button className="intro">Welcome to Broken Stars<br></br>Find a story like yours here</button></Link>
            </>
        )
    }
}

export default Intro