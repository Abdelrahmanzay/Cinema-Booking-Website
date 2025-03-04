
var costumer = [
    {
    id:1,
    name:"Hassan Ismail",
    email:"hassan",
    phone:122222222,
    user:"hassan.ismail@123 ",
    password:"12345",},
    {
    id:2,
    name:"Belal Anas",
    email:"bello",
    phone:1111111111,
    user:"belal.anasl@123",
    password:"123456",},
    { id:3,
        name:"Eslam Fawzy",
        email:"eslam",
        phone:13333333,
        user:"eslam.fawzyl@123 ",
    password:"1234567",}]
let email;
var password;

function log() {
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    const retrievedArray = JSON.parse(localStorage.getItem('myArray'));
    var FoundUser = retrievedArray.find(function(stored) {
        return stored.email == email && stored.password == password;
    });
    if (FoundUser) {
        localStorage.setItem("idvalue", FoundUser.id);
        
        window.location.href = "menu.html";
        alert("Login Successful");
    } else {
        alert("Invalid Username or Password");
        window.location.href = "login2.html";
    }
}




