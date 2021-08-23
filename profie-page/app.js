firebase.database().ref('User-Information').on('child_added', (data) => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let country = document.getElementById("country");
    let city = document.getElementById("city");
    name.innerHTML = `Name : ` + data.val().user_Name
    email.innerHTML = `Email : ` + data.val().email
    password.innerHTML = `Password : ` + data.val().password
    country.innerHTML = `Country : ` + data.val().country
    city.innerHTML = `City : ` + data.val().city
})

let logout = () => {
    firebase.auth().signOut().then(() => {
        location.replace("../index.html");
    }).catch((error) => {
        // An error happened.
    });
}