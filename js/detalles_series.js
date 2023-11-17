//obtener datos de la URL
let queryString=location.search;
let queryStringObj= new URLSearchParams(queryString);
let id_serie = queryStringObj.get('id');
console.log(id_serie);

// Asignamos variables utilizando DOM
let imagenSerie = document.querySelector(".div_imagen")
let tituloSerie = document.querySelector(".titleSerie")
let calificacion = document.querySelector(".calificacionSerie")
let duracion = document.querySelector(".duracion")
let fechaEstreno =document.querySelector(".fechaEstrenoSerie")
let sinopsis = document.querySelector(".sinopsisSerie")
let genero = document.querySelector(".generoSerie")
let favoritos = document.querySelector(".fav")
let recomendaciones = document.querySelector(".reco")
let divRecomendaciones = document.querySelector(".recomendaciones")

// Asignamos variables 
let ApiKey=  "1173214cf5e2ac8f2c0ac1c242d0ec8a";
let detalles_series = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${ApiKey}`
let recomendacionesApi = `https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${ApiKey}`

fetch(detalles_series)
  .then(function(response) {
    return response.json();
  
  })
  .then(function(data) {
    console.log(data);
    let detalleSer = data.genres;

    let gnSerie = "";
    for (let i = 0; i < detalleSer.length; i++) {
      gnSerie += `<a href="./detalles_de_genero.html?id=${detalleSer[i].id}">${detalleSer[i].name} </a>`;
    }
    
    imagenSerie.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${data.poster_path}">`
    tituloSerie.innerHTML = data.original_name;
    calificacion.innerHTML = `<p> Calificación: ${data.vote_average}</p> `;
    duracion.innerHTML = `<p> Duración: ${data.number_of_seasons} temporadas y ${data.number_of_episodes} episodios </p> `; 
    genero.innerHTML = `<p> Género: ${gnSerie}</p> `;
    fechaEstreno.innerHTML = `<p> Estreno: ${data.first_air_date}</p>`;
    sinopsis.innerHTML = `<p> Sinopsis: ${data.overview}</p>`;
  })
  .catch(function(error) {
    console.log('El error es: ' + error);
  });


// Ver recomendaciones
recomendaciones.addEventListener("click", function(){
  fetch(recomendacionesApi)
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data)
      recomendacionesSerie = data.results; // Todas las recomendaciones
      let contenido = "";
      for (let i = 0; i < 5; i++) {

      contenido+= `<a href="detalles_series.html?id=${recomendacionesSerie[i].id}">
                    <img src="https://image.tmdb.org/t/p/w500${recomendacionesSerie[i].poster_path}">
                    <p>${recomendacionesSerie[i].name}</p></a>`
        
      }
      divRecomendaciones.innerHTML = contenido;
    })

    .catch(function(error) {
      console.log('El error es: ' + error);
    });

})