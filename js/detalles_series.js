//obtener datos de la URL
let queryString=location.search;
let queryStringObj= new URLSearchParams(queryString);
let id_serie = queryStringObj.get('id');
console.log(id_serie);
// DOM
let imagenSerie = document.querySelector(".div_imagen")
let tituloSerie = document.querySelector(".titleSerie")
let calificacion = document.querySelector(".calificacionSerie")
let fechaEstreno =document.querySelector(".fechaEstrenoSerie")
let final = document.querySelector(".final")
let sinopsis = document.querySelector(".sinopsisSerie")
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
    console.log(data);
    let gnSerie = "";
    for (let i = 0; i < detalleSer.length; i++) {
      gnSerie += `<a href="./detalles_de_genero.html?id=${detalleSer[i].id}">${detalleSer[i].name} </a>`;
    }
    
    imagenSerie.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${data.poster_path}">`
    tituloSerie.innerHTML = data.original_name;
    calificacion.innerHTML = `<p> Calificación: ${data.vote_average}</p> `;
    final.innerHTML = `<p> Finalización: ${data.last_air_date}</p> `; 
    genero.innerHTML = `<p> Género: ${gnSerie}</p> `;
    fechaEstreno.innerHTML = `<p> Estreno: ${data.first_air_date}</p>`;
    sinopsis.innerHTML = `<p> Sinopsis: ${data.overview}</p>`;
  })
  .catch(function(error) {
    console.log('El error es: ' + error);
  });

