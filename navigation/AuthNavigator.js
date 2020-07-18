import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/user/LoginScreen";
import RegisterScreen from "../screens/user/RegisterScreen";

const AuthStack = createStackNavigator();

const AuthStackNavigator = (props) => {
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="login" component={LoginScreen} />
            <AuthStack.Screen name="register" component={RegisterScreen} />
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;
