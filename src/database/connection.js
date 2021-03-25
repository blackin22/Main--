  const firebase = require("firebase")

  module.exports = {
  	start(){
  		try {
        var firebaseConfig = {
         apiKey: "AIzaSyCBOcwZpk7AK_SKeYZA24yILEohpdW9RNg",
         authDomain: "motoko-add44.firebaseapp.com",
         databaseURL: "https://motoko-add44-default-rtdb.firebaseio.com",
         projectId: "motoko-add44",
         storageBucket: "motoko-add44.appspot.com",
         messagingSenderId: "282958549269",
         appId:"1:282958549269:web:669bba8ef746c6dd76191c",
         measurementId: "G-SCY89B43T0"
                };
              firebase.initializeApp(firebaseConfig);

               console.log(`Banco de dados foi conectado com sucesso, use com sabedoria.`)
  		} catch (err) {
              if(err) return console.log(`Algo de errado acontenceu, ao tentar conectar no banco de dados.`)
  		}
  	}
  }