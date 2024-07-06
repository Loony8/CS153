import React from 'react';
import {View, Text} from 'react-native'; 

function AboutScreen() {
    return (
      <View style={{ backgroundColor:'#6881a2', flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color:'#eee'}}>This is an app developed by Brandeis student Kanlun Lee, for the course Mobile Application Development.</Text>
        <Text style={{color:'#eee'}}>It is intended to keep track of the user's daily habits, and let them track their progress, and give them helpful reminders and motivation.</Text>
      </View>
    );
}

export default AboutScreen;