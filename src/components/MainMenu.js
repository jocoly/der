import React from 'react'
import { Link } from 'react-router-dom'
import {Menu} from 'antd'
import 'antd/dist/reset.css'

const MainMenu = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="calendar">
                <Link to="/calendar">Calendar</Link>
            </Menu.Item>
            <Menu.Item key="profile">
                <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="settings">
                <Link to="/settings">Settings</Link>
            </Menu.Item>
        </Menu>
    )
}

export default MainMenu;