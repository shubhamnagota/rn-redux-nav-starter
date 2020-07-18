import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import "react-native-gesture-handler";
import store from "./redux/store";
import * as Font from "expo-font";

import SplashScreen from "./screens/SplashScreen";
import MainNavigationDrawer from "./navigation/MainNavigationDrawer";
import { ActivityIndicator, SafeAreaView, YellowBox } from "react-native";
import { color } from "./config/Constants";

// Added for firebase warning
YellowBox.ignoreWarnings(["Setting a timer"]);

const fetchFonts = () => {
    return Font.loadAsync({
        Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    });
};

export default function App() {
    const [splashLoading, setSplashLoading] = useState(true);

    useEffect(() => {
        fetchFonts().then(() => setTimeout(() => setSplashLoading(false), 3000));
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Provider store={store}>
                {splashLoading ? (
                    <React.Fragment>
                        <SplashScreen />
                        <ActivityIndicator style={{ marginBottom: 50 }} size="large" color={color.green} />
                    </React.Fragment>
                ) : (
                    <NavigationContainer>
                        <MainNavigationDrawer />
                    </NavigationContainer>
                )}
            </Provider>
        </SafeAreaView>
    );
}
