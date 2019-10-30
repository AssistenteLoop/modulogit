import React, {Component} from 'react';
import{Text, View, StyleSheet} from 'react-native';

export default class Home extends Component{

    static navigationOptions = {
        title: 'Painel'
    }

    constructor (props){
        super(props);
       
    }

   

    render(){
        
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Bem vindo Ao painel!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(113, 89, 193)',
        paddingLeft: 50,
        
    },
    text:{
        fontSize: 30,
        color: 'white'
    }

});