import axios from "axios";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const { REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_PROJECT_ID,
    REACT_APP_DATABASE_URL,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGING_SENDER_ID,
    REACT_APP_APP_ID,
    REACT_APP_VAPID_KEY } = process.env;

const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    databaseURL: REACT_APP_PROJECT_ID,
    projectId: REACT_APP_DATABASE_URL,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

const getTokenn = (setNotifyToken, userId) => {
    return getToken(messaging, { vapidKey: REACT_APP_VAPID_KEY }).then(async (currentToken) => {
        if (currentToken) {
            setNotifyToken(currentToken)
            await axios.post('/updateUserToken', {
                userId,
                notifyToken: currentToken
            });
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            setNotifyToken('');
            // shows on the UI that permission is required 
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
}

const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });

export {
    getTokenn,
    onMessageListener
}