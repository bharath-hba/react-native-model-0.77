import React from 'react';
import { Modal, View, StyleSheet, Text, Pressable } from 'react-native';

const ModalContent = ({ setPopup }) => {
    return (
        <Modal visible={true} transparent={true} statusBarTranslucent={true}>
            <Pressable style={styles.modalcontainer} onPress={() => setPopup(false)} >
                <View style={styles.content}>
                    <Text>Modal Content</Text>
                </View>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalcontainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ModalContent;