
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCXoshqAsJV4F6SLVUOkjRavjM6OsUJ35w",
  authDomain: "nothingleft-9ed3b.firebaseapp.com",
  databaseURL: "https://nothingleft-9ed3b.firebaseio.com",
  projectId: "nothingleft-9ed3b",
  storageBucket: "nothingleft-9ed3b.appspot.com",
  messagingSenderId: "38778897751"
};


firebase.initializeApp(config);

var database = firebase.database()

var email;
var password;
var userId = "buyer";
// var user = firebase.auth().currentUser;

// 	firebase.auth().onAuthStateChanged(function(user) {
// 	  if (user) {
// 	  	console.log("a")
// 	    // User is signed in.
// 	  } else {
// 	  	console.log("b")
// 	    // No user is signed in.
// 	  }
// 	});

// $(document).ready(function(){
	$('#modal1').modal();
	$('#modal2').modal();

	$("span").on("click",function(){
		$("span").removeClass("waves-effect waves-light btn")
		$(this).addClass("waves-effect waves-light btn")
		userId = $(this).attr("data-center")
	})

	$(".signIn").on("click", function(){
		email = $(".email").val()
		password = $(".password").val()
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
			console.log("showsomethings")
		firebase.auth().onAuthStateChanged(function(user) {
			console.log(user)
		  if (user) {
		  	console.log("b")

		    // User is signed in.
		  } else {
		  	console.log("a")
		    // No user is signed in.
		  }
		});
		});		
		// user = firebase.auth().currentUser;
		// console.log(user)

	})

	$(".signUp").on("click", function(){
		email = $(".email").val()
		password = $(".password").val()

		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		});
		user = firebase.auth().currentUser;
		database.ref("/userInfo").push({
			email,
			password,
			user,
			userId,
		})
		if(userId = "restaurant"){
			window.location.href = "restaurantProfile.html";
		}

	})


	var photoUrl, uid, emailVerified;

	// console.log(user)

	// if (user != null) {
	//   user.providerData.forEach(function (profile) {
	//     console.log("Sign-in provider: " + profile.providerId);
	//     console.log("  Provider-specific UID: " + profile.uid);
	//     console.log("  Name: " + profile.displayName);
	//     console.log("  Email: " + profile.email);
	//     console.log("  Photo URL: " + profile.photoURL);
	//   });
	// }



	$(".logOut").on("click",function(){

		window.location.href = "index.html";

		firebase.auth().signOut().then(function() {
		  	// $(".logOut").detach()
		  	// $(".button1").append()
		  	// $(".button2").append()


		  // Sign-out successful.
		}).catch(function(error) {
		  // An error happened.
		});
	
	})

	// console.log(user)



// });

