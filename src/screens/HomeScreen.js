import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>

      <Button
        onPress={() => navigation.navigate('Ex1')}
        title="Go to the component démo" />

      <TouchableOpacity
        onPress={() => navigation.navigate('List')}
      >
        <Text>Go to the Liste</Text>
      </TouchableOpacity>

      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to ImageScreen" />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
