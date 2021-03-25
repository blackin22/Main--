  const firebase = require("firebase")

  module.exports = {
  	start(){
  		try {
        var firebaseConfig = {
         apiKey: "",
         authDomain: "",
         databaseURL: "",
         projectId: "",
         storageBucket: "",
         messagingSenderId: "",
         appId:"",
         measurementId: ""
                };
              firebase.initializeApp(firebaseConfig);

               console.log(`Banco de dados foi conectado com sucesso, use com sabedoria.`)
  		} catch (err) {
              if(err) return console.log(`Algo de errado acontenceu, ao tentar conectar no banco de dados.`)
  		}
  	}
  }
