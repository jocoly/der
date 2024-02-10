import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
            </Routes>
        </Router>
    )
}

export default AppRouter;