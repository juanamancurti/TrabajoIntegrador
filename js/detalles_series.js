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
let favoritos = document.querySelector(".botonFav")
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
    if (detalleSer.length > 0){
      for (let i = 0; i < detalleSer.length; i++) {
      
       gnSerie += `<a href="./detalles_de_genero.html?id=${detalleSer[i].id}&nombre=${detalleSer[i].name}">${detalleSer[i].name} </a>`;
      }
    }else{ 
      gnSerie+=`<p>"No hay géneros disponibles"</p>`
    }
    
    imagenSerie.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${data.poster_path}">`
    tituloSerie.innerHTML = data.original_name;
    calificacion.innerHTML = `<p> Calificación: ${data.vote_average}</p> `;
    duracion.innerHTML = `<p> Duración: ${data.number_of_seasons} temporadas y ${data.number_of_episodes} episodios </p> `; 
    genero.innerHTML = `<p> Género: ${gnSerie}</p> `;
    fechaEstreno.innerHTML = `<p> Estreno: ${data.first_air_date}</p>`;
    sinopsis.innerHTML = `<p> Sinopsis: ${data.overview}</p>`;
    
    
    //Agregar botón de favoritos
    favoritos.addEventListener("click", function () {
      if (this.style.backgroundColor === "rgb(146, 9, 171)") {
        this.style.backgroundColor = "rgba(241, 187, 196, 0.887)";
        this.innerHTML = "Agregar a Favoritos";
        
      } else {
        this.style.backgroundColor = "rgb(146, 9, 171)";
        this.innerHTML = "Quitar de favoritos";
      }
    });
  })
  .catch(function(error) {
    console.log('El error es: ' + error);
  });


// Ver recomendaciones
let recomendados = false
recomendaciones.addEventListener("click", function () {
  if (recomendados) {
    divRecomendaciones.innerHTML = ''
    recomendaciones.innerText = `Ver recomendaciones`
    recomendados = false
  } else {

    fetch(recomendacionesApi)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        console.log(data)
        let recomendacionesSerie = data.results // Todas las recomendaciones
        if (recomendacionesSerie.length !== 0) {
          let contenido = "";
          for (let i = 0; i < 5; i++) {

            contenido += `<a href="detalles_series.html?id=${recomendacionesSerie[i].id}">
          <img src="https://image.tmdb.org/t/p/w500${recomendacionesSerie[i].poster_path}">
          <p>${recomendacionesSerie[i].name}</p></a>`

          }
          divRecomendaciones.innerHTML = contenido;
          recomendaciones.innerText = `Dejar de ver recomendaciones`
        }

        else {
          divRecomendaciones.innerHTML = `<h2> No hay recomendaciones </h2>`;
        }
      })
      .catch(function (error) {
        console.log('El error es: ' + error);
      });
      recomendados = true   
  }
})
