
var movie = [
    { nam: "dune", link: "dune.html" },
    { nam: "furiosa", link: "Furiosa.html" },
    { nam: "king kong", link: "KingKong.html" },
    { nam: "Monkeyman", link: "Monkeyman.html" },
    { nam: "late night", link: "latenight.html" },
    { nam: "the fall guy", link: "thefallguy.html" },
    { nam: "civil war", link: "civilwar.html" },
    { nam: "the ministry", link: "Theministry.html" },
];

function search() {
    var inp = document.getElementById("search").value.toLowerCase();
    var input = false;

    for (var i = 0; i < movie.length; i++) {
        if (inp === movie[i].nam) {
            window.location.assign(movie[i].link);
            input = true;
            break;
        }
    }
    if (!found) {
        alert("NOT FOUND");
    }
}

   