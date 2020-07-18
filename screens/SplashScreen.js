import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <Text>React Native Starter</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        height: 300,
        width: 300,
        marginVertical: 15,
    },
});
