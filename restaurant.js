
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

// $(document).ready(function(){



	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	  	console.log("userLogged")
	    // User is signed in.
	  } else {
	  	console.log("userNotLogged")

	    // No user is signed in.
	  }
	});

	$(".addItem").on("click",function(){
		var itemName = $("#item_Name").val();
		var itemPrice = $("#item_Price").val();
		var itemQuantity = $("#item_Quantity").val();
		var deleteButton = "&#9747"

		$(".foodDetails").append("<tr>"
			+"<td>"+itemName+"</td>"
			+"<td>"+itemPrice+"</td>"
			+"<td>"+itemQuantity+"</td>"
			+"<td class='delete'>"+deleteButton+"</td>"
			+"</tr>")

		$(".delete").on("click", function(){
			$(this).parent().detach();
		})

	})


	// ref.put(file).then(function(snapshot) {
	//   console.log('Uploaded a blob or file!');
	// });

	var user = firebase.auth().currentUser;
	var photoUrl, uid, emailVerified;

	console.log(user)

	if (user != null) {
	  name = user.displayName;
	  email = user.email;
	  photoUrl = user.photoURL;
	  emailVerified = user.emailVerified;
	  uid = user.uid; 
	}

	if (user != null) {
	  user.providerData.forEach(function (profile) {
	    console.log("Sign-in provider: " + profile.providerId);
	    console.log("  Provider-specific UID: " + profile.uid);
	    console.log("  Name: " + profile.displayName);
	    console.log("  Email: " + profile.email);
	    console.log("  Photo URL: " + profile.photoURL);
	  });
	}

	$(".logOut").on("click",function(){

		window.location.href = "index.html";
		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		}).catch(function(error) {
		  // An error happened.
		});
	
	})



// });

