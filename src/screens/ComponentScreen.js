import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
    return (<Text style={styles.text}>My new Component</Text>);
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold'
    }
});

export default ComponentScreen;