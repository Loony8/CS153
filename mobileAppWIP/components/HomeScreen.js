import React from 'react';
import {View, Text} from 'react-native'; 
import {useValue} from './ValueContext';

function HomeScreen() {
    const {currentValue} = useValue();
    return (
      <View style={{ backgroundColor: '#6881a2', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style ={{fontSize: 50, color:'#eee'}}>Welcome to HabiTracker!</Text>
        <Text>Let's get started, {currentValue['username']}!</Text>
        <Text>Status: {currentValue['status']}</Text>
      </View>
    );
} 

export default HomeScreen;