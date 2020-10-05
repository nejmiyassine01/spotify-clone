import React from 'react';
import './Body.styles.scss';
import Header from './Header.component';
import { useDataLayerValue } from "../../DataLayer/DataLayer.component";
import { PlayCircleFilledRounded } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow.component';

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img
                    src="https://newjams-images.scdn.co/v2/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==/default"
                    alt="Discover Weekly"
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledRounded className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
            </div>

            <div className="body__music">
                {discover_weekly?.tracks.items.map((item) => <SongRow track={item.track} /> )}
            </div>
        </div>
    )
}

export default Body
