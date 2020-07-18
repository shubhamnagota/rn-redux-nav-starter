import React from "react";
import { useSelector } from "react-redux";

import { createDrawerNavigator } from "@react-navigation/drawer";

import AuthNavigator from "./AuthNavigator";
import UserNavigator from "./UserNavigator";

const Drawer = createDrawerNavigator();

const MainNavigationDrawer = (props) => {
    const isLoggedIn = useSelector((state) => state.userReducer.loginStatus);

    if (!isLoggedIn) return <AuthNavigator />;

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="user"
                component={UserNavigator}
                options={{
                    drawerLabel: "Dashboard",
                }}
            />
        </Drawer.Navigator>
    );
};

export default MainNavigationDrawer;
