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
    var pass;
    var vpass;
    var mail;
    var fullname;
    var phonenumber;
    let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    { 
        id: 1,
        name: 'Popcorn',
        image: "Popcorn.jpg",
        price: 50
    },
    {
        id: 2,
        name: 'V7 Cola',
        image: 'v7cola.webp',
        price: 25
    },
    {
        id: 3,
        name: 'Mineral Water',
        image: 'Water.jpg',
        price: 15
    },
    {
        id: 4,
        name: 'Hotdog',
        image: 'Hotdog.jpg',
        price: 200
    },
    {
        id: 5,
        name: 'Slushy',
        image: 'slushy.jpeg',
        price: 75
    },
    {
        id: 6,
        name: 'Nachos',
        image: 'nachos.jpg',
        price: 150
    }
];
let listCards  = [];
var movie=[{nam :"dune",link:"movie1.html"},{nam :"furiosa",link:"movie1.html"},"king"]
var inp;
var inp2;

function search(){
    inp=document.getElementById("search").value;
    inp2=inp.toLowerCase();
    for(i=0;i<4;i++){
    if(inp2==movie[i].nam){
        window.location.assign(movie[i].link);
    }
}
alert("NOT FOUND");
}
   
    function log() {
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;

    const retrievedArray = JSON.parse(localStorage.getItem('myArray'));
    var FoundUser = retrievedArray.find(function(stored) {
        return stored.email == email && stored.password == password;
    });
    if (FoundUser) {
        localStorage.setItem("idvalue", FoundUser.id);
        ;
        window.location.href = "menu.html";
        alert("Login Successful");
    } else {
        alert("Invalid Username or Password");
        window.location.href = "login2.html";
    }
 
   
}
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
        }
        if (pass == vpass) {
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
            window.location.assign("login2.html");
        } else {
            alert("Password doesn't match");
        }
    }
  
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
let selectedmovies =[];
let seats = document.querySelector(".all-seats");
for (var i = 0; i < 59; i++) {
  let randint = Math.floor(Math.random() * 2);
  let booked = randint === 1 ? "booked" : "";
  seats.insertAdjacentHTML(
    "beforeend",
    '<input type="checkbox" name="tickets" id="s' +
      (i + 2) +
      '" /><label for="s' +
      (i + 2) +
      '" class="seat ' +
      booked +
      '"></label>'
  );
}
let tickets = seats.querySelectorAll("input");
tickets.forEach((ticket) => {
  ticket.addEventListener("change", () => {
    let amount = document.querySelector(".amount").innerHTML;
    let count = document.querySelector(".count").innerHTML;
    amount = Number(amount);
    count = Number(count);
    if (ticket.checked) {
      count += 1;
      amount += 200;
    } else {
      count -= 1;
      amount -= 200;
    }
    document.querySelector(".amount").innerHTML = amount;
    document.querySelector(".count").innerHTML = count;
  });
});
function store(count) {
    var name=document.getElementById("choice").value;
    selectedmovies.push({name,count});
    let jsonString = JSON.stringify(selectedmovies);
    localStorage.setItem('movies', jsonString);
    let storedJsonString = localStorage.getItem('movies');
    let selectmovies = JSON.parse(storedJsonString);
}

let storedJsonString = localStorage.getItem('movies');
let selectmovies = JSON.parse(storedJsonString);
let movieTableBody = document.getElementById("movie-table-body");
let totalPriceElement = document.getElementById("total-price");
let selectedMovies = JSON.parse(localStorage.getItem('movies'));

function renderMovieTable() {
  movieTableBody.innerHTML = "";
  selectedMovies.forEach((movie, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${movie.name}</td>
      <td>${movie.count}</td>
      <td>${movie.count * 200}</td>
      <td><button class="remove-btn" data-index="${index}">Remove</button></td>
    `;
    movieTableBody.appendChild(row);
  });
}

function calculateTotalPrice() {
  let totalPrice = 0;
  selectedMovies.forEach(movie => {
    totalPrice += movie.count * 200;
  });
  return totalPrice;
}

function updateTotalPriceDisplay() {
  totalPriceElement.textContent = calculateTotalPrice();
}

renderMovieTable();
updateTotalPriceDisplay();

movieTableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    let index = e.target.dataset.index;
    selectedMovies.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(selectedMovies));
    renderMovieTable();
    updateTotalPriceDisplay();
  }
});