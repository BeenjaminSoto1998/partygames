// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'IzaSyAUTs14d9HUmpRm8aXh8_UeFuVES3TXxug',
  authDomain: 'epe-integrativa.firebaseapp.com',
  projectId: 'epe-integrativa'
});

var db = firebase.firestore();

function Enviar() {

  var nam = document.getElementById("name").value;
  var em = document.getElementById("email").value;
  var pho = document.getElementById("phone").value;
  var mess = document.getElementById("message").value;


      db.collection("usuarios").add({
        name: nam,
        email: em,
        phone: pho,
        message: mess
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

}
