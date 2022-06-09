import React from 'react'
import "./MyApp.css"
import ProfileCard from './components/ProfileCard'

const MyApp = () => {
    return (
        <div className="myapp-container">
            <ProfileCard username="Omon" hobby="singing"/>
            <ProfileCard username="Okezua" hobby="watching anime"/>
        </div>
    )
}

export default MyApp