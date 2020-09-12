let newQuoteButton = document.querySelector("#new-quote");
let quoteSection = document.querySelector("#quote")
let authorSection = document.querySelector("#origin")
console.log("<!-- inspired by but not coppied from https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/")
newQuoteButton.addEventListener("click", () => {
    let quote = "";
let author = "";
  fetch("https://quotes25.p.rapidapi.com/random", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "quotes25.p.rapidapi.com",
      "x-rapidapi-key": "",//PLACE API KEY HERE
    },
  })
    .then(response => response.json())
    .then((data) => {
        quote = data.message
        author = data.author.authorName
    }).then(() =>{
        quoteSection.innerHTML = quote
        authorSection.innerHTML = author
    })
    .catch((err) => {
      console.log(err);
    });
});
