import React, { Component } from 'react';
import {Platform, StyleSheet, View, Text, Button, Image} from 'react-native';
import{createStackNavigator, createAppContainer} from 'react-navigation';


import Home from './src/Home';
import Interna from './src/Interna';


const Navegador = createStackNavigator  ({
  Home:{
    screen: Home
    
  }, 
  Interna:{
    screen: Interna
  },
  
  },{
    initialRouteName: 'Home',
  
});

const AppContainer = createAppContainer(Navegador);

export default AppContainer;



/*const styles = StyleSheet.create({
    container:{
      flex: 1,
      
    },
    texto:{
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
    }
    
}); */




