import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native'; 
import Routes from './src/routes/Routes';
import { name as appName } from './app.json';


const wrappedRoutes = () => { 
    return (
        <Routes /> 
    );
};

AppRegistry.registerComponent(appName, () => wrappedRoutes);