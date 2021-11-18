
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

  function addUser ()
  {
    console.log("testing")
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      })
  }