import React from 'react'
import { withRouter } from 'react-router-dom'

class Header {
    render() {
        return(
            <>
            <Link to='/'><h2>Broken Stars</h2></Link>
            </>
        )
    }
}

export default withRouter(Header)