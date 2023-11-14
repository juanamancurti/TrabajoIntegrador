//obtener datos de la URL
let queryString=location.search;
let queryStringObj= new URLSearchParams(queryString);
let id_peli = queryStringObj.get('id');
console.log(id_peli);
// DOM
let imagenPeli = document.querySelector(".div_imagen")
let tituloPeli = document.querySelector(".titlePeli")
let calificacion = document.querySelector(".calificacionPeli")
let fechaEstreno =document.querySelector(".fechaEstrenoPeli")
let duracion = document.querySelector(".duracionPeli")
let sinopsis = document.querySelector(".sinopsisPeli")
let genero = document.querySelector(".generoPeli")
let favoritos = document.querySelector(".fav")

// Asignamos variables 
let ApiKey=  "1173214cf5e2ac8f2c0ac1c242d0ec8a";
let detalles_peli = `https://api.themoviedb.org/3/movie/${id_peli}?api_key=${ApiKey}`


fetch(detalles_peli)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    let detallePel = data.genres;
    let gnPeli = "";
    for (let i = 0; i < detallePel.length; i++) {
      console.log(detallePel[i].name)
      gnPeli += `<a href="detalles_de_genero.html?id=${detallePel[i].id}">${detallePel[i].name} </a>`;
    }

    // Agregar botón de favoritos
    // favoritos.innerHTML += `<div class="contenedorHijo">
    //                           <button class="botonFav">Agregar a favoritos</button>
    //                         </div>`;

    // let botonFav = document.querySelector(".botonFav");

    // botonFav.addEventListener("click", function() {
    //   if (this.style.backgroundColor === "red") {
    //     this.style.backgroundColor = "green";
    //     this.innerHTML = "Agregar a Favoritos";
    //   } else {
    //     this.style.backgroundColor = "red";
    //     this.innerHTML = "Quitar de favoritos";
    //   }
    // });

    genero.innerHTML = gnPeli;
    imagenPeli.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${data.poster_path}">`
    tituloPeli.innerHTML =  data.title;    ;
    calificacion.innerHTML = `<p> Calificacion: ${data.vote_average}</p> `;
    fechaEstreno.innerHTML = data.release_date;
    sinopsis.innerHTML = data.overview;
  })
  .catch(function(error) {
    console.log('El error es: ' + error);
  });


