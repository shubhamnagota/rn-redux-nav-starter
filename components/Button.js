import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { color } from "../config/Constants";

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.5} style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: color.pink,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 10,
        width: 200,
    },
    buttonText: {
        color: color.white,
        fontFamily: "Roboto",
        fontSize: 18,
    },
});
