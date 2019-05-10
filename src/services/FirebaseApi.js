import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCPx9LXOxpj6teq-iNFwXQNHyGbR763G2w",
    authDomain: "todomanager-1aace.firebaseapp.com",
    databaseURL: "https://todomanager-1aace.firebaseio.com/",
    projectId: "todomanager-1aace",
    starageBucket: "todomanager-1aace.appspot.com",
    messagingSenderId: "720019872771"
};

export const initializeFirebaseApi = () => firebase.initializeApp(config);

export const createUserOnFirebaseAsync = async (email, password) => {
    const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

    return user;
}

export async function signInOnFirebaseAsync(email, password) {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
}