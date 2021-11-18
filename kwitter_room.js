
const firebaseConfig = {
      apiKey: "AIzaSyCwxrYtLjTvkLFl_vv16tj_qrWiTte0JiM",
      authDomain: "kwitter-53694.firebaseapp.com",
      databaseURL: "https://kwitter-53694-default-rtdb.firebaseio.com",
      projectId: "kwitter-53694",
      storageBucket: "kwitter-53694.appspot.com",
      messagingSenderId: "83699305789",
      appId: "1:83699305789:web:e809ed2329279a871d8954"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function logout()
{

}

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"      });
            localStorage.setItem("room_name", room_name);
            window.location="kwitter_page.html";
}

function redirect_to_room_name(name) {
      console.log(name);
      localStorage.setItem("room_name", room_name);
            window.location="kwitter_page.html";
}