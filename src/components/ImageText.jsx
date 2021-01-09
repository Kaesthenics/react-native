import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageText = ({ title, imageSource }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Image source={imageSource} />
        </View>
    )
}

const styles = StyleSheet.create({});

export default ImageText;