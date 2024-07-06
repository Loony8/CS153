import React from 'react';
import {View, Text, TextInput} from 'react-native'; 
import {useValue} from './ValueContext';

function SettingsScreen() {
    const {currentValue,setCurrentValue} = useValue();
    return (
      <View style={{ backgroundColor:'#6881a2', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color:'#eee', fontSize:25}}>Settings!</Text>
        <TextInput
            style={{color:'#eee'}}
            placeholder="Enter username: "
            onChangeText={(text) => {
                setCurrentValue({...currentValue, username: text});
           }}
        />
      </View>
    );
}

export default SettingsScreen;