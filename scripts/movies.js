// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
 let purse=JSON.parse(localStorage.getItem("amount"));
 document.getElementById("wallet").innerText=purse;


async function searchMovies() {
    try {
      let movie = document.getElementById("query").value;
  
      let res = await fetch(
        `https://www.omdbapi.com/?apikey=8eb1c82c&s=${movie}`
      );
  
      let data = await res.json();
  
      console.log(data.Search);
  
      return data.Search;
    } catch (err) {
      console.log(err);
    }
  }
  
  async function main() {
    let data = await searchMovies();
  
    if (data == undefined) {
      return false;
    }
  
    appendData(data);
    renderingDom(data);
    console.log(data);
    console.log(data);
  }
  
  let movies_div = document.getElementById("movies");
  
  let container = document.getElementById("container");
  
  function appendData(movies) {
    movies_div.innerHTML = null;
  
    movies.forEach(function (element) {
      let p = document.createElement("p");
  
      p.textContent = element.Title;
  
      movies_div.append(p);
    });
  }
  
  //------------------------------------
  
  function renderingDom(data) {
    container.innerHTML = null;
  
    data.forEach(function (element) {
      let div1 = document.createElement("div");
      div1.setAttribute("id", "div1");
  
      let div2 = document.createElement("div");
      div2.setAttribute("id", "div2");
  
      let Poster = document.createElement("img");
      Poster.src = element.Poster;
  
      let Title = document.createElement("h2");
      Title.textContent = element.Title;
  
     
  
      let Released = document.createElement("p");
      Released.textContent = "Released :" + " " + element.Year;
  
      
  
      let Genre = document.createElement("p");
      Genre.textContent = "Genre :" + " " + element.Type;
  
      let Type = document.createElement("p");
      Type.textContent = "Type :" + " " + element.Type;
  
      let Year = document.createElement("p");
      Year.textContent = "Year :" + " " + element.Year;
  
     let button = document.createElement("button");
     button.innerText="booknow"
    //  btn.addEventListener("click", function () {
    //   bookNow(elem);
    //  });
  
      // let Ratings = document.createElement("p");
      // Ratings.textContent = "Ratings :" + " " + element.Ratings[0].Value;
  
      div1.append(Poster);
      div2.append(Title, Year, Released, Type, Genre,button);
      container.append(div1, div2);
    });
  }
  
  //-----------------------------------
  
  
  let timerId;
  
  function debounce(func, delay) {
    if (timerId) {
      clearTimeout(timerId);
    }
  
    timerId = setTimeout(function () {
      func();
    }, delay); 
  }
  
  
