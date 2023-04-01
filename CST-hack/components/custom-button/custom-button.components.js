import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { AppContext } from "../../context/app.context";

export default function CustomButton({ navigation, text, onPress }) {

    const { themeColors, deviceW } = useContext(AppContext);

    const styles = StyleSheet.create({
        defaultButtonStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
            borderRadius: 10,
        },
        buttonStyle: {
            paddingVertical: 5,
            paddingHorizontal: 10,
        },
        bigButtonStyle: {
            paddingVertical: 10,
            paddingHorizontal: 20,
        },
        buttonTextStyle: {
            // fontFamily: 'Montserrat-Bold',
            color: 'white',
            fontSize: 20,
        },
    });

    return (
        <TouchableOpacity
            style={styles.defaultButtonStyle}
            // onPress={onPress}
        >
            <Text style={[styles.buttonTextStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    );

}