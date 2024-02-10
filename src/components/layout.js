import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router} from 'react-router-dom'

const Layout = () => {
    return (
        <Router>
            <div>
                <Home/>
            </div>
        </Router>
    )
}

export default Layout