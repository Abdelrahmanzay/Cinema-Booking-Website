
    const retrievedArray = JSON.parse(localStorage.getItem('myArray'));
document.addEventListener("DOMContentLoaded", function() {
    var value = localStorage.getItem("idvalue");
  
    document.getElementById('fullname').textContent = retrievedArray[value-1].name;
    document.getElementById('email').textContent =retrievedArray[value-1].user ;
    document.getElementById('phone').textContent = retrievedArray[value-1].phone;
});


