//obtener datos de la URL
let queryString=location.search;
let queryStringObj= new URLSearchParams(queryString);
let id_peli = queryStringObj.get('id');
console.log(id_peli);
// DOM
let imagenPeli = document.querySelector(".imgPeli")
let tituloPeli = document.querySelector(".titlePeli")
let califiacion = document.querySelector(".calificacionPeli")
let fechaEstreno =document.querySelector(".fechaEstrenoPeli")
let duracion = document.querySelector(".duracionPeli")
let sinopsis = document.querySelector(".sinopsisPeli")
let genero = document.querySelector(".generoPeli")

// Asignamos variables 
let ApiKey=  "1173214cf5e2ac8f2c0ac1c242d0ec8a";
let detalles_peli = `https://api.themoviedb.org/3/tv/${id_peli}?api_key=${ApiKey}`



fetch(detalles_peli)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let detallePel = data.genres;
    console.log(detallePel);
    let contenido = "";
    let gnPeli = "";
    for (let i = 0; i < detallePel.length; i++) {
      gnPeli += `<p>Género: <a href="./detalles_de_genero.html?id=${detallePel[i].id}">${detallePel[i].name}</a></p>`;
    }

    contenido += gnPeli;
    genero.innerHTML = contenido;
    imagenPeli.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    tituloPeli.innerHTML = data.original_name;
    califiacion.innerHTML = data.vote_average;
    fechaEstreno.innerHTML = data.first_air_date;
    sinopsis.innerHTML = data.overview;
  })
  .catch(function(error) {
    console.log('El error es: ' + error);
  });


  