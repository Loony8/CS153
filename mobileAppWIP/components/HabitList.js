import React, { useState, useEffect }  from 'react';
import { View, Button,FlatList, StyleSheet, Text, TextInput } from 'react-native';

import regeneratorRuntime from "regenerator-runtime";
import storage from './Storage';         

storage.sync = {
    async habits(params) {
      try {
        console.log('in storage.sync.habits');
         
        } catch (err) {
            console.log('error caught');
        }
    
    }
}

const HabitList = () => {
  const [days,setDays] = useState("")
  const [goal,setGoal] = useState("")
  const [habitList,setHabitList]= useState([])

  useEffect(() => {getData()},[])

  const getData = async () => {
        try {
             storage
                .load({
                    key: 'habits',
                    id: '1'
                })
                .then(ret => {
                    if (ret==undefined) {
                        ret = []
                    }
                    setHabitList(ret);
                    setDays("")
                    setGoal("")  
                    console.log('just read'+JSON.stringify(ret));
                })
                .catch(err => {
                    console.warn(err.message);
                    switch (err.name) {
                    case 'NotFoundError':
                        setHabitList([])
                        setDays("")
                        setGoal("")   
                        console.log('NotFoundError');
                        break;
                    case 'ExpiredError':
                        console.log('ExpiredError');
                        break;
                    }
                });
                
        } catch (e) {
            console.log("error in getData")
            console.dir(e)
        }

  }

  const storeData = async (value) => {
        try {
            await storage.save({
                key: 'habits', 
                id: '1', 
                data: value,
                expires: 1000 * 60 * 60
              });
          const jsonValue = JSON.stringify(value)
        } catch (e) {
          console.dir(e)
        }
  }

  
  const clearAll = async () => {
        try {
          console.log('in clearData')
          await storage.clearMapForKey('habits');
        } catch(e) {
          console.log("error in clearAll ")
          console.dir(e)
        }
  }

  const renderHabit = ({item}) => {
    return (
      <View style={styles.habit}>
           <Text>{item.days}</Text>
           <Text>{item.goal} </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Habit List</Text>
      <Text style={{color:'#eee', fontSize:20, alignItems:'center'}}>
          What would you like to work on?
      </Text>

      <View style={{flexDirection:'column',
                    margin:20,
                    alignItems:'center',}}>
            <TextInput style={{color:'#eee', fontSize:25}} 
              placeholder="Days"
              onChangeText={text => {
                   setDays(text);
                 }}
              value = {days}
            />

            <TextInput style={{color:'#eee', fontSize:25}}
              placeholder="Goal"
              onChangeText={text => {
                   setGoal(text);
                 }}
              value = {goal}
            />

        </View>
        <View style={{flexDirection:'row',
                      justifyContent:'center'}}>
        <Button
               title={"Record"}
               color="#4d747c"
               onPress = {() => 
                {
                 const newHabits =
                   habitList.concat(
                     {'days':days,
                      'goal':goal,
                   })
                 setHabitList(newHabits)
                 storeData(newHabits)
                 setDays("")
                 setGoal("")
               }}
               />
        <Button
                title={"Clear"}
                color="#4d747c"
                onPress = {() => {
                  clearAll()
                  setHabitList([])
                }}
                />

      </View>
      <View style={styles.container}>
        <Text style={styles.header}>
              Habits:
         </Text>
      </View>

      <FlatList
        data={habitList}
        renderItem={renderHabit}
        keyExtractor={item => item.days}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#6881a2',
    justifyContent: 'center',
    textAlign:'left',
    marginTop:20,
    padding:20,
  },
  habit:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  header: {
    textAlign:'center',
    backgroundColor:'#5b6a7e',
    fontSize: 32,
    padding:10,
    color: '#eee'
  },

});


export default HabitList;