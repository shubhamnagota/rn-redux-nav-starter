import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback, Platform, Image } from "react-native";

const Card = (props) => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version > "28") {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <React.Fragment>
            {props.data && (
                <View style={styles.card}>
                    <TouchableComponent onPress={props.onPress}>
                        <View>
                            <Image source={{ uri: props.data.image }} style={styles.image} />
                            <Text>{props.data.name}</Text>
                            <Text>{props.data.description}</Text>
                        </View>
                    </TouchableComponent>
                </View>
            )}
        </React.Fragment>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        borderColor: "green",
        shadowColor: "black",
        shadowRadius: 5,
        borderBottomLeftRadius: 15,
        height: 350,
        width: 350,
        alignContent: "center",
    },
    image: {
        height: 250,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
});
