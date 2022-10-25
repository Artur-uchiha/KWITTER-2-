
const firebaseConfig = {
  apiKey: "AIzaSyBJyxJXKVYdpYJEnKfFW8A77mmB3vt611Y",
  authDomain: "kwitter-f1663.firebaseapp.com",
  databaseURL: "https://kwitter-f1663-default-rtdb.firebaseio.com",
  projectId: "kwitter-f1663",
  storageBucket: "kwitter-f1663.appspot.com",
  messagingSenderId: "566489643766",
  appId: "1:566489643766:web:7cc2be4e8f675086ef4ad7"
};
//ADICIONE SEUS LINKS FIREBASE
firebase.initializeApp(firebaseConfig);
  userName = localStorage.getItem("userName");

 

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
