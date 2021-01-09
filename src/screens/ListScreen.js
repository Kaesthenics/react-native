import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 10 },
        { name: 'Friend #2', age: 11 },
        { name: 'Friend #3', age: 12 },
        { name: 'Friend #4', age: 13 },
        { name: 'Friend #5', age: 14 },
        { name: 'Friend #6', age: 15 },
        { name: 'Friend #7', age: 16 },
        { name: 'Friend #8', age: 17 }
    ];

    return (
        <FlatList
            //horizontal // Liste sur axe X
            //showsHorizontalScrollIndicator={false} // Cacher la scroll bar axe X
            keyExtractor={(friend, key) => String(key)}
            data={friends}
            renderItem={({ item: friend }) => {
                return (
                    <Text style={styles.text}>
                        {friend.name} - Age {friend.age}
                    </Text>
                )
            }}
        />
    )
};

const styles = StyleSheet.create({
    text: {
        marginVertical: 5
    }
});

export default ListScreen;