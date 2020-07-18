import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../screens/user/Dashboard";
import { screenOptions } from "./commonOptions";

const UserStack = createStackNavigator();

const UserStackNavigator = (props) => {
    return (
        <UserStack.Navigator screenOptions={screenOptions(props.navigation)}>
            <UserStack.Screen
                name="dashboard"
                component={Dashboard}
                options={{
                    headerTitle: "Dashboard",
                }}
            />
        </UserStack.Navigator>
    );
};

export default UserStackNavigator;
