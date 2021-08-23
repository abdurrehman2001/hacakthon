let ord = () => {

    let push_order = document.getElementById("push-order")
    var user_key = firebase.database().ref("User-Information").push().key
    var carts = {
        cart: push_order.value,
        key: user_key

        // user_Name: username.value,
        // email: email.value,
        // password: password.value,
        // country: country.value,
        // city: city.value,


    }

    firebase.database().ref("User-Information").child(user_key).set(carts)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}