// List of movies

let movies = [
  {
    title: "Fight Club",
    rank: 10,
    id: "tt01375233",
  },
  {
    title: "The Shawshank Redemption",
    rank: 1,
    id: "tt01111239",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    rank: 7,
    id: "tt01672605",
  },
  {
    title: "Pulp Fiction",
    rank: 8,
    id: "tt01109123",
  },
  {
    title: "12 Angry Man",
    rank: 5,
    id: "tt02050083",
  },
  {
    title: "The Dark Knight",
    rank: 4,
    id: "tt02146312",
  },
  {
    title: "The Godfather",
    rank: 2,
    id: "tt02145332",
  },
  {
    title: "The Godfather: Part II",
    rank: 3,
    id: "tt02147332",
  },
  {
    title: "Schindler's List",
    rank: 6,
    id: "tt02141332",
  },
  {
    title: "The Good, the Bad and the Ugly",
    rank: 9,
    id: "tt02141312",
  },
];

window.onload = function () {
  let sortedRank = sortMoviesByAttr(movies, "rank");
  // display Movies list
  displayMovies(sortedRank);
};

// Display list of movies in a table

function displayMovies(movies) {
  let table = "<table class='table table-bordered'>";
  table += "<thead class='thead-dark'>";
  table +=
    "<tr><th scope='col'>Id</th><th scope='col'>Name</th><th scope='col'>Rank</th></tr>";
  table += "</thead>";
  table += "<tbody>";
  for (let index = 0; index < movies.length; index++) {
    table += "<tr>";
    table += "<th scope='row'>" + movies[index].id + "</th>";
    table += "<td>" + movies[index].title + "</td>";
    table += "<td>" + movies[index].rank + "</td>";
    table += "</tr>";
  }
  table += "</tbody>";
  table += "</table>";
  document.getElementById("movies-list").innerHTML = table;
}

function sortMoviesByRank(movies) {
  for (let j = 0; j < movies.length - 1; j++) {
    let max_obj = movies[j];
    let max_location = j;
    for (let i = j; i < movies.length; i++) {
      if (movies[i].rank > max_obj.rank) {
        max_obj = movies[i];
        max_location = i;
      }
    }
    // swap the first and tha last
    movies[max_location] = movies[j];
    movies[j] = max_obj;
  }
  return movies;
}

// sort Movies by an attribute

function sortMoviesByAttr(movies, sortAttr) {
  for (let j = 0; j < movies.length - 1; j++) {
    let max_obj = movies[j];
    let max_location = j;
    let max = getMaxMovieObject(movies, j, sortAttr);
    max_obj = max.max_movie;
    max_location = max.max_movieIndex;
    // swap the first and tha last
    movies[max_location] = movies[j];
    movies[j] = max_obj;
  }
  return movies;
}

function getMaxMovieObject(movies, start, sortAttr) {
  let max_obj = movies[start];
  let max_location = start;
  for (let i = start; i < movies.length; i++) {
    if (movies[i][sortAttr] > max_obj[sortAttr]) {
      max_obj = movies[i];
      max_location = i;
    }
  }
  return { max_movie: max_obj, max_movieIndex: max_location };
}
