document.addEventListener("DOMContentLoaded", function() {
  console.log("== DOMContentLoaded ==");

  let movieData;
  let titanicBtn = document.getElementById ("Titanic");
  let terminatorBtn = document.getElementById ("Terminator_2");

  titanicBtn.addEventListener('click', function(e) {
    loadMovieData("Titanic");
  })
  terminatorBtn.addEventListener('click', function(e) {
    loadMovieData("Terminator_2");
  })


  function loadMovieData(whichMovie) {
    console.log("== loadMovieData ==");

    if (whichMovie === "Titanic") {
      console.log("Titanic");
      movieData = movies.Titanic;
    } else {
      console.log("Terminator_2");
      movieData = movies.Terminator_2;
    }
      console.log("movieData:", movieData);
      updatePage(movieData);
  
  let title = document.getElementById ("title");
  }
  function updatePage(whichMovie) {
    console.log("== updatePage ==");
   document.getElementById("title").innerHTML = movieData.title;
    //It's important to recognize that we're using dot strcuture to call within the HTML file
    document.getElementById("director").innerHTML = movieData.director;
    document.getElementById("filmRating").innerHTML = movieData.filmRating;
    document.getElementById("genre").innerHTML = movieData.genre;
    document.getElementById("description").innerHTML = movieData.description;
    document.getElementById("audienceScore").innerHTML = movieData.audienceScore;
    
    let cast = document.getElementById("cast");
    let listHTML = "<ul>"
    
    for (let i=0; i<movieData.cast.length; i++) {
      listHTML += "<li>" + movieData.cast[i].actor +": " + movieData.cast[i].role +"</li>";
    }
    listHTML += "</ul>";
    cast.innerHTML = listHTML;
  }
  
})














