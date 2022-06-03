// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let purse = JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText = purse;

let id;

let movies_div = document.getElementById("movies");

async function searchMovies() {
  try {
    let search = document.getElementById("search").value;
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=8eb1c82c&s=${search}`
    );
    let data = await res.json();
    let movies = data.Search;
    return movies;
  } catch (err) {
    console.log("error", err);
  }
}

function appendMovies(data) {
  movies_div.innerHTML = null;
  data.forEach((element) => {
    let box = document.createElement("div");
    let img = document.createElement("img");
    img.src = element.Poster;

    let title = document.createElement("p");
    title.innerText = element.Title;

    let btn = document.createElement("button");
    btn.innerText = "Book Now";
    btn.setAttribute("class", "book_now");
    btn.addEventListener("click", function () {
      book(element);
    });

    box.append(img, title, btn);
    movies_div.append(box);
  });
}

async function main() {
  let data = await searchMovies();
  // console.log(data);
  if (data === undefined) {
    return false;
  }
  appendMovies(data);
}

function debouncing(func, delay) {
  if (id) {
    clearInterval(id);
  }
  id = setTimeout(() => {
    func();
  }, delay);
}

let checkout = JSON.parse(localStorage.getItem("movie")) || [];
function book(element) {
  let obj = element;
  checkout.push(obj);

  localStorage.setItem("movie", JSON.stringify(checkout));

  window.location.href = "checkout.html";
}
  
  
