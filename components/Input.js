import React, { forwardRef } from "react";
import { TextInput, StyleSheet } from "react-native";
import { color } from "../config/Constants";

const Input = forwardRef((props, ref) => {
    return <TextInput ref={ref} style={[styles.input, props.style]} {...props} />;
});

const styles = StyleSheet.create({
    input: {
        borderBottomColor: color.black,
        borderBottomWidth: 1,
        height: 40,
        fontSize: 15,
    },
});

export default Input;
