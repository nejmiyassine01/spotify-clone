import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login.component.jsx';
import { getTokenFromUrl } from './components/Login/spotify.js';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player/Player.component';
import { useDataLayerValue } from './components/DataLayer/DataLayer.component';

const spotify = new SpotifyWebApi(); 

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      dispatch ({
        type: 'SET_TOKEN',
        token: _token,
      })
      
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch ({
          type: 'SET_USER',
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch ({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })

      spotify.getPlaylist("37i9dQZEVXcOfDC7TuhJnP").then((response) => {
        dispatch ({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })
    }
    
  }, []);
  
  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
