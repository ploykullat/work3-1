import React from 'react'
import {View,Text,StyleSheet,Alert,Button,TextInput} from "react-native";

export default function TextInputDemo(){

    let [inputName,setInputName] = React.useState('') 
    let [inputEmail,setInputEmail] = React.useState('') 
    let [inputPassword,setInputPassword] = React.useState('') 
    let [inputMemo,setInputMemo] = React.useState('') 
    
    const onPressButton1 = () =>{

    }
    
return(
    <View style={styles.container}>
        <View style={styles.item}>
            <Text>Name</Text>
            <TextInput style={styles.textInput} defaultValue={inputName}
            onChange={event => setInputName(event.nativeEvent.text)}
            />
        </View>
        <View style={styles.item}>
            <Text>Email</Text>
            <TextInput style={styles.textInput} defaultValue={inputEmail}
            onChangeText={text => setInputEmail(text)}
            keyboardType='email-address'    //number-pad
            />
        </View>
        <View style={styles.item}>
            <Text>Password</Text>
            <TextInput style={styles.textInput} defaultValue={inputPassword}
            onChangeText={text => setInputPassword(text)}
            secureTextEntry = {true}
            />
        </View>
        <View style={styles.item}>
            <Text>Memo</Text>
            <TextInput style={[styles.textInput, {height:64}]} defaultValue={inputMemo}
            onChangeText={text => setInputMemo(text)}
            mutiline={true}
            numberOfLines={3}
            textAlignVertical='top'
            />
        </View>

        <View style={styles.item}>
            <Button title="ตรวจสอบข้อมูล" color="Red" onPress={ onPressButton1 } />
        </View>
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'purple',
        marginTop:70,
        alignItems: 'center',
    },
    item:{
        width:150,
        marginBottom:50,
    },
    textInput:{
        height: 50,
        width:300,
        borderWidth: 1,
        borderColor: 'pink',
        color: 'black',
        backgroundColor: '#fff',
        marginTop: 5,
        paddingTop: 3,
        paddingButtom: 3

    }
})