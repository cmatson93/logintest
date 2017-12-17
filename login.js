
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBjE-ZgShKfIuW8GfYWq1FZ_KoqnCV6bBs",
    authDomain: "login-b74f7.firebaseapp.com",
    databaseURL: "https://login-b74f7.firebaseio.com",
    projectId: "login-b74f7",
    storageBucket: "login-b74f7.appspot.com",
    messagingSenderId: "775720948688"
  };
firebase.initializeApp(config);

var database = firebase.database()

// var email;
// var password;
var userId = "buyer";


$(document).ready(function(){
	$('#modal1').modal();
	$('#modal2').modal();

	$("span").on("click",function(){
		$("span").removeClass("waves-effect waves-light btn")
		$(this).addClass("waves-effect waves-light btn")
		userId = $(this).attr("data-center")
	});

	$(".signIn").on("click", function(){
		email = $(".email").val()
		password = $(".password").val()
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		}).then(function(){

			firebase.auth().onAuthStateChanged(function(user) {
			  if (user) {
			    // User is signed in.
			    var displayName = user.displayName;
			    var email = user.email;
			    var emailVerified = user.emailVerified;
			    var photoURL = user.photoURL;
			    var isAnonymous = user.isAnonymous;
			    var uid = user.uid;
			    var providerData = user.providerData;
			    // ...
			    console.log(user.email);
			  } else {
			    // User is signed out.
			    // ...
			    console.log("NOPE")
			  }
			});
		});


	});


	$(".signUp").on("click", function(){
		email = $(".email").val()
		password = $(".password").val()

		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		}).then(function(){
			firebase.auth().onAuthStateChanged(function(user) {
			  if (user) {
			    // User is signed in.
			    var displayName = user.displayName;
			    var email = user.email;
			    var emailVerified = user.emailVerified;
			    var photoURL = user.photoURL;
			    var isAnonymous = user.isAnonymous;
			    var uid = user.uid;
			    var providerData = user.providerData;
			    // ...
			    console.log(user.email);
			  } else {
			    // User is signed out.
			    // ...
			    console.log("NOPE")
			  }
			});
		});

	})




});

