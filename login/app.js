let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if(email.value ==="" || password.value === ""){
        swal("Please  Fill All The Filled!");
    }
    else{
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((uid)=>{
            console.log(uid)
                swal("You successfully Login");
                location.href = "../profie-page/profile-page.html"

            })
.catch((error)=>{
    swal(error.message)
})
}
}


    // .catch((err) => {
        // if (err.massage === "There is no user record corresponding to this identifier. The user may have been deleted ") {
        //     swal("Sorry your account is not in record \n please create account!");
        // )}
        // else if (err.message === "The email address is badly formatted") {
        //     swal("Sorry your account is not in record \n please create account!")

    // .then((user)=>{
    //     console.log(user)
        
    // location.replace("../profie-page/profile-page.html");
        // firebase.database().ref(`User-Information`).on("child_added", (data) => {
            // console.log(data.val())
    // })
    


        // .then((userCredential) => {
            // var user = userCredential.user;
        // })
        // .catch((error) => {
        //     var errorMessage = error.message;
        //     console.log(errorMessage)
        // })
    // ) }
