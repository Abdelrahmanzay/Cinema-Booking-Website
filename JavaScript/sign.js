var mail;
 var pass;
 var vpass;
 var fullname;
 var phonenumber;
 var costumer = [
    {
    id:"1",
    email:"hassan",
    password:"12345",},
    {
    id:"2",
    email:"bello",
    password:"123456",},
    {  id:"3" ,  
        email:"eslam",
    password:"1234567",}]
    
 
    function sign() {
        fullname = document.getElementById("fullName").value;
        phonenumber = document.getElementById("phoneNumber").value;
        user = document.getElementById("email").value;
        mail = document.getElementById("email1").value;
        pass = document.getElementById("password").value;
        vpass = document.getElementById("vpassword").value;
        
        const existingCustomer = costumer.find(customer => customer.user === mail);
        if (existingCustomer) {
            alert('Email already exists. Please choose another email.');
            return;
        }
        if (pass.length < 5) {
            alert("Password must be more than 4 characters");
            return;
        }
        else if (pass == vpass) {
            var newArray = {
                id: costumer.length + 1,
                user: mail,
                email:user,
                phone:phonenumber,
                name:fullname,
                password: pass
            };
            costumer.push(newArray);
            localStorage.setItem('myArray', JSON.stringify(costumer));
            window.location.assign("login.html");
        } else {
            alert("Password doesn't match");
        }
    }