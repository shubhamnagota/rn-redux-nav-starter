import AsyncStorage from "@react-native-community/async-storage";

const saveDataToStorage = async (data) => {
    await AsyncStorage.setItem("data", data);
};

const getDataFromStorage = async (key = "data") => {
    return await AsyncStorage.getItem(key);
};

const clearStorage = async () => {
    await AsyncStorage.clear();
};

const setLoginStatus = (loginStatus) => {
    return (dispatch) => {
        dispatch({
            type: "SET_LOGIN_STATUS",
            payload: loginStatus,
        });
    };
};

const logout = () => {
    return (dispatch) => {
        dispatch({
            type: "SET_LOGIN_STATUS",
            payload: false,
        });
        dispatch({
            type: "SET_USER_DATA",
            payload: {},
        });
        clearStorage();
    };
};

const setUserData = (userData, loginStatus = true) => {
    return (dispatch) => {
        dispatch({
            type: "SET_LOGIN_STATUS",
            payload: loginStatus,
        });

        dispatch({
            type: "SET_USER_DATA",
            payload: {
                id: userData.id,
                email: userData.email,
                fullName: userData.fullName || (userData.email && userData.email.split("@")[0]),
            },
        });
        if (userData) saveDataToStorage(JSON.stringify(userData));
    };
};

const userActions = {
    setUserData,
    setLoginStatus,
    logout,
    getDataFromStorage,
    clearStorage,
};

export default userActions;
