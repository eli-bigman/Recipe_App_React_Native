import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const AddNumbers = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAddition = () => {
        const sum = Number(num1) + Number(num2);
        setResult(`The sum is: ${sum}`);
        console.log(sum)
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter first number"
                keyboardType="numeric"
                value={num1}
                onChangeText={text => setNum1(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter second number"
                keyboardType="numeric"
                value={num2}
                onChangeText={text => setNum2(text)}
            />
            <Button title="Add" onPress={handleAddition} />
            <Text style={styles.result}>{result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
    },
});

export default AddNumbers;