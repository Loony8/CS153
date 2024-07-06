import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputBox = () => {
    const [text, onChangeText] = React.useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Add a habit!"
                keyboardType="numeric"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin:12,
        borderWidth: 1,
        padding: 15,
    },
});

export default TextInputBox;