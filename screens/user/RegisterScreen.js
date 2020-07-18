import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";

import userActions from "../../redux/actions/userActions";
import { register } from "../../services/userServices";

const RegisterScreen = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const passwordInputRef = useRef(null);

    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <View>
                    <Text style={{ fontSize: 30, marginBottom: 50, textAlign: "center" }}>Register</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>{error}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Email</Text>

                        <Input
                            value={username}
                            onChangeText={(val) => setUsername(val)}
                            autoCapitalize="none"
                            autoCompleteType="email"
                            keyboardType="email-address"
                            placeholder="Enter email address..."
                            returnKeyType="next"
                            textContentType="emailAddress"
                            blurOnSubmit={false}
                            onSubmitEditing={() => passwordInputRef.current.focus()}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Password</Text>
                        <Input
                            ref={passwordInputRef}
                            value={password}
                            onChangeText={(val) => setPassword(val)}
                            autoCompleteType="password"
                            secureTextEntry
                            placeholder="Enter password..."
                            returnKeyType="done"
                            textContentType="password"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Button
                            onPress={async () => {
                                setIsLoading(true);
                                const resp = await register({ email: username, password });
                                console.log({ resp });
                                setIsLoading(false);
                                if (resp && resp.success === false) {
                                    setError(resp.error);
                                } else {
                                    dispatch(userActions.setUserData(resp.data, true));
                                }
                            }}>
                            Register
                        </Button>
                        <TouchableOpacity
                            style={{ alignItems: "center" }}
                            onPress={() => {
                                props.navigation.navigate("login");
                            }}>
                            <Text style={{ fontSize: 20 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignContent: "center",
    },
    inputContainer: {
        marginVertical: 5,
        paddingHorizontal: 20,
    },
    inputText: {
        fontSize: 22,
    },
});

export default RegisterScreen;
