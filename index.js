/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Login from './src/screens/Login'; 

class Index extends Component {
    render() {
    return (<Login email='myemail@email.com' />);
    }
}


AppRegistry.registerComponent(appName, () => Login);
