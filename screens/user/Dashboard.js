import React, { useEffect, useState } from "react";
import { StyleSheet, RefreshControl, View, ScrollView, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import userActions from "../../redux/actions/userActions";

import { color } from "../../config/Constants";

const Dashboard = (props) => {
    const userData = useSelector((state) => state.userReducer.userData);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <RefreshControl
                colors={[color.pink]}
                tintColor={color.pink}
                onRefresh={() => {
                    setIsRefreshing(false);
                }}
                refreshing={isRefreshing}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 25 }}>
                    <Text style={styles.roboto}>Dashboard</Text>
                    <Text style={styles.roboto}>Name : {userData.fullName}</Text>

                    <Button title="Logout" onPress={() => dispatch(userActions.logout())} style={styles.roboto} />
                </ScrollView>
            </RefreshControl>
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    roboto: {
        fontFamily: "Roboto",
        fontSize: 25,
        textDecorationLine: "underline",
        textDecorationColor: color.yellow,
        marginBottom: 15,
    },
});
