import React from 'react'
import './Login.styles.scss'
import {loginUrl} from './spotify'

function Login() {
    return (
        <div className="login">
            <img 
                className="login__img"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
                alt="Logo"
            />
            <a 
                className="login__link"
                href={loginUrl}>
                Login With Spotify
            </a>
        </div>
    )
}

export default Login
