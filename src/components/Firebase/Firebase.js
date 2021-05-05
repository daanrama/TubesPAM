import app from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCo93qydQJ7ejZRpvHi53YtS5dQ_81BVLo",
    authDomain: "quizlampung.firebaseapp.com",
    databaseURL: "https://quizlampung-default-rtdb.firebaseio.com",
    projectId: "quizlampung",
    storageBucket: "quizlampung.appspot.com",
    messagingSenderId: "520557004689"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.database();
    }

    skors = () => this.db.ref('skors');
}

export default Firebase;
