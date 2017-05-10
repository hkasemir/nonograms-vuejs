import * as firebase from 'firebase';

export default {
  db: firebase.initializeApp({
    apiKey: 'AIzaSyC3_DseQ1inmezXDEyxRTV8zbHX60CKj14',
    authDomain: 'nonograms-vuejs.firebaseapp.com',
    databaseURL: 'https://nonograms-vuejs.firebaseio.com',
    projectId: 'nonograms-vuejs',
    storageBucket: 'nonograms-vuejs.appspot.com',
    messagingSenderId: '585931794146',
  }).database(),
};
