// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let purse=JSON.parse(localStorage.getItem("amount"));

document.getElementById("wallet").innerText=purse;


let movies_div=document.getElementById("movie");

let selectedMovies=JSON.parse(localStorage.getItem("movie"));



selectedMovies.forEach(element => {
    let box2=document.createElement("div");

    let title=document.createElement("p");
    title.setAttribute("class","Moviestitle")
      title.innerText=element.Title;
    let img=document.createElement("img");
    img.src=element.Poster;
   

    box2.append(title,img);

    movies_div.append(box2);
});
