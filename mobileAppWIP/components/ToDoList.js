import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

// Making the button work can be found on June 11th's class at around 20 minutes
const Item = ({ item }) => (
    <View style={styles.item}>
        <Text>{item['action']}</Text>
        <Button title='Done'/>
    </View>
);

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    return (
        <View style={styles.container}>
            <Text>ToDo List</Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10}}
                onChangeText={text => setTodo(text)}
                value={todo} />
            <Button
                title="Add to List"
                onPress={() => {
                    setTodos(todos.concat({action: todo, done: false}));
                    setTodo('');
                }} />
            <Text>
                {JSON.stringify(todos)}
            </Text>
            <FlatList
                data={todos}
                renderItem={({item}) => <Item item={item}/> }
                keyExtractor={item => item['action']}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#d8b1fa',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderColor:'#7f6fac',
        borderWidth: 3,
    }
});
    
export default ToDoList;