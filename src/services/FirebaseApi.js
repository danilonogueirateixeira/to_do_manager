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
    const user = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
    return user;
}

export const currentFirebaseUser = () => {
    return new Promise((resolve, reject) => {
        var unsubscribe = null;
        unsubscribe = firebase
        .auth()
        .onAuthStateChanged((user) => {
            resolve(user);
        }, (error) => {
            reject(error);
        }, () => {    
            unsubscribe();
        });
    });
}

export const writeTaskOnFirebaseAsync = async (task) => {
    const user = await currentFirebaseUser();

    var tasksReference = firebase
        .database()
        .ref(user.uid);

    const key = task.key ?
        task.key :
        tasksReference
            .child('tasks')
            .push()
            .key;
        
    return await tasksReference
        .child(`tasks/${key}`)
        .update(task);
}

export const readTaskFromFirebaseAsync = async (listener) => {
    const user = await currentFirebaseUser();

    var tasksReference = firebase
        .database()
        .ref(user.uid)
        .child('tasks');

    tasksReference
        .on('value', (snapshot) => {
            var tasks = [];
            snapshot.forEach(function (element) {
                var task = element.val();
                task.key = element.key;
                tasks.push(task);
            });
            listener(tasks);
        });
}