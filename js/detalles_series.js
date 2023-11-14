//obtener datos de la URL
let queryString=location.search;
let queryStringObj= new URLSearchParams(queryString);
let id_serie = queryStringObj.get('id');
console.log(id_serie);
// DOM
let imagenSerie = document.querySelector(".imgSerie")
let tituloSerie = document.querySelector(".titleSerie")
let califiacion = document.querySelector(".calificacionSerie")
let fechaEstreno =document.querySelector(".fechaEstrenoSerie")
let duracion = document.querySelector(".duracionSerie")
let sinopsis = document.querySelector(".sinópsisSerie")
let genero = document.querySelector(".generoSerie")

// Asignamos variables 
let ApiKey=  "1173214cf5e2ac8f2c0ac1c242d0ec8a";
let detalles_series = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${ApiKey}`



fetch(detalles_series)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let detalleSer = data.genres;
    console.log(detalleSer);
    let contenido = "";
    let gnSerie = "";
    for (let i = 0; i < detalleSer.length; i++) {
      gnSerie += `<p>Género: <a href="./detalles_de_genero.html?id=${detalleSer[i].id}">${detalleSer[i].name}</a></p>`;
    }

    contenido += gnSerie;
    genero.innerHTML = contenido;
    imagenSerie.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    tituloSerie.innerHTML = data.original_name;
    califiacion.innerHTML = data.vote_average;
    fechaEstreno.innerHTML = data.first_air_date;
    sinopsis.innerHTML = data.overview;
  })
  .catch(function(error) {
    console.log('El error es: ' + error);
  });


  