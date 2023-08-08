import React from 'react'
import {View,Text,StyleSheet,Alert,Button} from "react-native";

export default function ButtonDemo(){

    const onPressButton2 = () => {
        Alert.alert('คุณกดปุ่มที่ 2 ค่ะ')
    } 
    const onPressButton3 = () => {
        Alert.alert(
            'การลบข้อมูล',
            'ต้องการลบข้อมูลนี้ใช่หรือไม่',
            [
                {
                    text:'ใช่',
                    onPress:() => {}
                },
                {
                    text:'ยกเลิก',
                    onPress:() => {}
                },
                {
                    text:'ภายหลัง',
                    onPress:() => {}
                }
            ]
        )
    } 

return(
    <View style={styles.container}>
        <View style={styles.item}>
            <Button title="ปุ่มที่ 1" color="purple" onPress={ () => Alert.alert('คุณกดปุ่มที่ 1 ค่ะ')} />
        </View>
        
        <Button title="ปุ่มที่ 2" color="skyblue" onPress={ onPressButton2 } />
        <Button title="ปุ่มที่ 3" color="midnightblue" onPress={ onPressButton3 } />

    </View>
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