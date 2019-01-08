import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCeygSjtWBnrLEWgQcljkeuWdEGfYqKFUs",
    authDomain: "nba-full-23a06.firebaseapp.com",
    databaseURL: "https://nba-full-23a06.firebaseio.com",
    projectId: "nba-full-23a06",
    storageBucket: "nba-full-23a06.appspot.com",
    messagingSenderId: "234589118059"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
	const data = [];
	snapshot.forEach((childSnapshot)=>{
		data.push({
			...childSnapshot.val(),
			id:childSnapshot.key
		})
	})
	return data;
}

export {
	firebase,
	firebaseDB,
	firebaseArticles,
	firebaseTeams,
	firebaseVideos,
	firebaseLooper
}