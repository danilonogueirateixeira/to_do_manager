import React, { Component } from 'react';
import { SafeAreaView, KeyboardAvoidingView, View, Image, TextInput, Button, Text, StyleSheet } from 'react-native';

const img = require('../assets/ToDoList.png');

export default class Login extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView style={styles.container}
                    behavior='padding'>
                    <View style={styles.topView}>
                        <Image style={styles.img} source={img}/>
                    </View>
                    <View style={styles.bottomView}>
                        <TextInput style={styles.input}
                            placeholder='EMAILL'
                            keyboardType={'email-address'}
                            autoCapitalize='none' />
                        <TextInput style={styles.input}
                            placeholder='Password'
                            secureTextEntry={true} />
                        <Button title='sign In' />
                        <View style={styles.textConteiner}>
                            <Text>Not a member? Let's </Text>
                            <Text style={styles.textRegister}>
                                Register
                            </Text>
                        </View>
                    </View>    
                </KeyboardAvoidingView>    
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    topView:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    img: {
        width: 200,
        height: 200
    },
    bottomView: {
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20
    },
    input: {
        marginBottom: 20
    },
    textConteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    textRegister: {
        fontWeight: 'bold'
    }
})
