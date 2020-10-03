import React from 'react';
import './Player.styles.scss';
import Sidebar from './Sidebar/Sidebar.component';
import Body from './Body/Body.component';
import Footer from './Footer/Footer.component';


function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>

            <Footer />
        </div>
    )
}

export default Player
