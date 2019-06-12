fetch('https://swapi.co/api/films/?format=json')
  .then(response => response.json())
  .then(data => data.results)
  .then(films => appendName(films))

function appendName(films) {
  films.forEach(function(films) {
  $('article').append(`<p> ${films.title} <br> Director: ${films.director} <br> ${films.opening_crawl} <br> Release Date: ${films.release_date}</p>`)

  })
}
