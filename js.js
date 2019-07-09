   var firebaseConfig = {
           apiKey: "AIzaSyAtTKuYdodh_XuVNPl14_ahfmrmG7PIjaY",
           authDomain: "fir-6da03.firebaseapp.com",
           databaseURL: "https://fir-6da03.firebaseio.com",
           projectId: "fir-6da03",
           storageBucket: "",
           messagingSenderId: "605010399173",
           appId: "1:605010399173:web:aeb1cd157260b031"
         };
     
         firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('contact'); 
  function submitForm(e){
      var name = document.getElementById('name').value;
      var track = document.getElementById('track').value;
      var email = document.getElementById('email').value;
      var number = document.getElementById('number').value;
      saveMessage(name,track,email,number);
  }
  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function saveMessage(name,track,email,number){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          track: track,
          email: email,
          number: number,
      });
  }

