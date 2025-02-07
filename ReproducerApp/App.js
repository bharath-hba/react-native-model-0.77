import React from 'react';
import { Modal, View, StyleSheet, Text } from 'react-native';

const App = () => {
    return (
        <Modal
            visible={true}
            transparent={false}
            animationType="slide"
            statusBarTranslucent={true}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Modal Content</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default App;