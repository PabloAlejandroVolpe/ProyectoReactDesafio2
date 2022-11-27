import { logDOM } from '@testing-library/react';
import React from 'react';
import logo from "./mencorriendo.gif"


const LoadingScreen = ({message}) => {
    return (
        <div className="loadingScreen">
            <img src={logo} className="App-logo" alt="logo-spinner" />
        </div>
    )
}

export default LoadingScreen;