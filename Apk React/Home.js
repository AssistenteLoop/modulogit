import React, {Component} from 'react';
import{Text, View, TouchableOpacity, TextInput, StyleSheet,Image, Keyboard} from 'react-native';

import{NavigationActions, StackActions} from 'react-navigation';

export default class Home extends Component{

    static navigationOptions = {
        header: null
    }

    constructor (props){
        super(props);
        this.state ={
            email: '',
            senha: ''
        };

        this.entrar = this.entrar.bind(this);

    }

    entrar(){
        if(this.state.email === 'jose@gmail.com' && this.state.senha === '123'){
            Keyboard.dismiss();
            //this.props.navigation.navigate('Interna');
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName:'Interna'})
                    
                ]
            }))
        }else{
            alert('Usuário ou senha invalidos!');
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('./img/React.png')} style={styles.imagem}/>
                <Text style={styles.titulo}> Seja Bem Vindo ao Sistema React Native</Text>

                <TextInput value={this.state.email} style={styles.input}
                onChangeText={(email)=> this.setState({email: email})}
                placeholder='Email' placeholderTextColor='#FFF' />

                <TextInput value={this.state.senha} style={styles.input}
                onChangeText={(senha)=> this.setState({senha: senha})}
                placeholder='Senha' placeholderTextColor='#FFF'/>

                <TouchableOpacity style={styles.btn} onPress={this.entrar}>
                    <Text style={styles.btnText} >
                        ENTRAR
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(113, 89, 193)'
   },
   titulo:{
    fontSize: 35,
    color: '#272727',
    textAlign: 'center',
    color: 'white'
   },
   input:{
    backgroundColor: '#272727',
    color:'#FFF',
    margin: 8,
    padding: 5,
    borderRadius: 20,
    paddingLeft: 15
   },
    btn:{
        backgroundColor: '#DDD',
        margin: 8,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20
    },
    btnText:{
        fontSize: 18,
    },
    imagem:{
        width: 215,
        height: 215,
       marginLeft: 80,
       borderRadius:20
       
       

    }
});