
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAvJrhXqevJIlLnuWvFcXP3lLGmWrV9LHc",
      authDomain: "kwitter-bd0ba.firebaseapp.com",
      databaseURL: "https://kwitter-bd0ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-bd0ba",
      storageBucket: "kwitter-bd0ba.appspot.com",
      messagingSenderId: "145984367369",
      appId: "1:145984367369:web:4ebd2bde90fcec31cc41d8"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
  function AddRoom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
         
        //End code
        });});}
  getData();
  function redirectToRoomName(name) {
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
  }
  function logout() {

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    
  }