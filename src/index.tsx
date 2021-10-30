
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main'
import BasicCard from './Cards';
import AppBar from './Appbar';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';

ReactDOM.render(
    <AuthProvider>
        <AppBar/>
        <BasicCard />
        {/* <App /> */}
        <Main />
    </AuthProvider>,
    document.getElementById('root')
);