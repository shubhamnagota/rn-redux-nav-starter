import { firebase } from "../firebase";

export const login = async ({ email, password }) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (response) => {
            const uid = response.user.uid;
            const usersRef = firebase.firestore().collection("users");
            try {
                const firestoreDocument = await usersRef.doc(uid).get();
                if (!firestoreDocument.exists) {
                    throw "User does not exist anymore.";
                }
                const user = firestoreDocument.data();
                console.log({ user });
                return { success: true, data: user };
            } catch (error) {
                return { success: false, error: JSON.stringify(error) };
            }
        })
        .catch((error) => {
            return { success: false, error: error.message };
        });
};

export const register = async ({ email, password }) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (response) => {
            const uid = response.user.uid;
            const data = {
                id: uid,
                email,
            };
            const usersRef = firebase.firestore().collection("users");
            try {
                const resp = await usersRef.doc(uid).set(data);
                return { success: true, data };
            } catch (error) {
                return { success: false, error: JSON.stringify(error) };
            }
        })
        .catch((error) => {
            return { success: false, error: error.message };
        });
};
