//Firebase config
var config = {
    apiKey: "AIzaSyBg-FLy33iGscKjV3L44bCKqHeRX9g55ng",
    authDomain: "train-schedule-rp.firebaseapp.com",
    databaseURL: "https://train-schedule-rp.firebaseio.com",
    projectId: "train-schedule-rp",
    storageBucket: "",
    messagingSenderId: "79980319882"
  };
  firebase.initializeApp(config);

  //Database
  var database = firebase.Database();

  //Code for App below

  //Calculating freq with moment JS.
  //convert the time and then diff the two in min.
  // %