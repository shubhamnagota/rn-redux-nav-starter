const userReducerDefaultState = {
    userData: {
        id: null,
        fullName: "",
        email: "",
    },
    loginStatus: false,
};

const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_LOGIN_STATUS":
            return { ...state, loginStatus: action.payload };
        case "SET_USER_DATA":
            return {
                ...state,
                userData: {
                    ...state.userData,
                    ...action.payload,
                },
            };
        case "RESET_USER_DATA":
            return { ...userReducerDefaultState };
        default:
            return state;
    }
};

export default userReducer;
