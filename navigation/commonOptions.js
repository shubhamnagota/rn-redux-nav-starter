import React from "react";
import { color } from "../config/Constants";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, HeaderButton, Item } from "react-navigation-header-buttons";

const IoniconsHeaderButton = (props) => <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} />;

export const screenOptions = (navigation) => {
    return {
        headerStyle: {
            backgroundColor: Platform.OS === "android" && color.pink,
        },
        headerTintColor: Platform.OS === "android" ? color.white : color.pink,
        headerTitleStyle: {
            fontFamily: "Roboto",
        },
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={() => navigation.toggleDrawer()}
                        color={color.white}
                    />
                </HeaderButtons>
            );
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                    <Item
                        title="User"
                        iconName="ios-person"
                        onPress={() => navigation.toggleDrawer()}
                        color={color.white}
                    />
                </HeaderButtons>
            );
        },
    };
};
