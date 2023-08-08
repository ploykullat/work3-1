import React from 'react'
import {View,Text,StyleSheet,Alert,Button} from "react-native";

export default function ButtonStateDemo(){

    const t = 'จำนวนครั้งที่คลิก : '
    let [count,setCount] = React.useState(0) //จำนวนที่นับ
    let [text,setText] = React.useState(t+count) 
    
    const onPressButton1 = () => {
        const result = count+1
        setCount(result)
        setText(t+result)
    }
    const onPressButton2 = () => {
        const result = count=0
        setCount(result)
        setText(t+result)
    }
return(
    <View style={styles.container}>
        <View>
            <Button title="Click Here" color="midnightblue" onPress={ onPressButton1 } />
            <Button title="Reset" color="red" onPress={ onPressButton2 } />
        </View>
        <View>
            <Text style={{fontSize:18}}>{text}</Text> 
        </View>
    </View>//const t = 'จำนวนครั้งที่คลิก : '
)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'purple',
        marginTop:70,
        alignItems: 'center'
    },
    item:{
        width:150,
        marginBottom:50
    }
})