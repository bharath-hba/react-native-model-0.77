import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, StatusBar } from 'react-native';
import ModalContent from './ModalContent';

const Welcome = () => {
    const [popup, setPopup] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Pressable style={styles.content} onPress={() => setPopup(true)} >
                <Text>Tab to Open Modal</Text>
            </Pressable>
            {
                popup === true && (
                    <ModalContent setPopup={setPopup} />
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Welcome;