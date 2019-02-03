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

  //Add values to db
  $("#add-train").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var time = $("#train-time-input").val().trim();
    var frequency = $("#train-frequency-input").val().trim();

    database.ref().push({
        name: trainName,
        destination: destination,
        time: time,
        freqency: frequency
    });

    // database.ref().on("value", function(){
    //     var dbObj = database.val();
    //     var moment = moment(dbObj.time,"HH:mm");

    // })

  });

  //Calculating freq with moment JS.
  //convert the time and then diff the two in min.
  // %