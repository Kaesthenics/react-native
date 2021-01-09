import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import ImageText from '../components/ImageText'

const ImageScreen = () => {
    return (
        <View>
            <ImageText title="Forest" imageSource={require('../../assets/forest.jpg')} />

            <ImageText title="Beach" imageSource={require('../../assets/beach.jpg')} />

            <ImageText title="Moutain" imageSource={require('../../assets/mountain.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageScreen;