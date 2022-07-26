import React from 'react';
import {View, StyleSheet, Text, Pressable, Platform} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


function HeaderButton(props) {
    return (
        <View style={styles.outerContainer}>
            <Pressable style={styles.innerContainer} android_ripple={{color: '#e4b5b9'}}>
                <View style={styles.button}>
                    <Ionicons iconStyle={{marginRight: 10}} name="star" size={24} color="#450b10"/>
                    <Text style={styles.buttonText}>Fav</Text>
                </View>
            </Pressable>
        </View>

    );
}

export default HeaderButton;

const styles = StyleSheet.create({
    outerContainer: {
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#daa7a9',
        borderRadius: 5,
        elevation: 4,
    },
    innerContainer: {
        flex: 1,
    },
    button: {
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 8,
        flexDirection: "row",
        alignItems: "center",
        borderColor : "#450b10",
        borderRadius: 5,
    },
    buttonText: {
        color: "#450b10",
        marginLeft: 5,
    }
})