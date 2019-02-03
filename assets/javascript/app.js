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
  var database = firebase.database();

  //Add values to db
  $("#add-train").on("click", function(event) {
    event.preventDefault();

    var name = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var time = $("#train-time-input").val().trim();
    var frequency = $("#train-frequency-input").val().trim();

    database.ref().push({
        name: name,
        destination: destination,
        time: time,
        freqency: frequency
    });

    //Adding to the table
  database.ref().on("child_added", function(db){
    //DB Object variable
      var dbObj = db.val();
  //Converting to momentjs object
      var trainTime = moment(dbObj.time,"HH:mm").subtract(1, "years");
      var trainFreq = moment(dbObj.freqency, "mm");
      var diffTime = moment().diff(trainTime, "minutes");
    //The Math
      var remainingTime = diffTime % trainFreq;
      var minAway = remainingTime - trainFreq;
    



      var newRow = $("<tr>")
      newRow.append($('<td>' + dbObj.name + '</td>'));
      newRow.append($('<td>' + dbObj.destination + '</td>'));
      newRow.append($('<td>' + dbObj.freqency + '</td>'));
      newRow.append($('<td>' + dbObj.time + '</td>'));
      newRow.append($('<td>' + minAway + '</td>'));

      $('tbody').append(newRow);

  });
    
  });
