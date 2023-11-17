//obtener datos de la URL
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id_peli = queryStringObj.get('id');
console.log(id_peli);

// Asignamos variables utilizando DOM
let imagenPeli = document.querySelector(".div_imagen")
let tituloPeli = document.querySelector(".titlePeli")
let calificacion = document.querySelector(".calificacionPeli")
let fechaEstreno = document.querySelector(".fechaEstrenoPeli")
let duracionP = document.querySelector(".duracionPeli")
let sinopsis = document.querySelector(".sinopsisPeli")
let genero = document.querySelector(".generoPeli")
let favoritos = document.querySelector(".botonFav")
let recomendaciones = document.querySelector(".reco")
let divRecomendaciones = document.querySelector(".recomendaciones")

// Asignamos variables 
let ApiKey = "1173214cf5e2ac8f2c0ac1c242d0ec8a";
let detalles_peli = `https://api.themoviedb.org/3/movie/${id_peli}?api_key=${ApiKey}`
let recomendacionesApi = `https://api.themoviedb.org/3/movie/${id_peli}/recommendations?api_key=${ApiKey}`

fetch(detalles_peli)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    let detallePel = data.genres;
    let gnPeli = "";
    if (detallePel.length > 0){
      for (let i = 0; i < detallePel.length; i++) {
       console.log(detallePel[i].name)
        gnPeli += `<a href="detalles_de_genero.html?id=${detallePel[i].id}&nombre=${detallePel[i].name}">${detallePel[i].name} </a>`;
    }
  }else{ 
      gnSerie+=`<p>"No hay géneros disponibles"</p>`
    }




    imagenPeli.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${data.poster_path}">`
    tituloPeli.innerHTML = data.title;
    calificacion.innerHTML = `<p> Calificación: ${data.vote_average}</p> `;
    duracionP.innerHTML = `<p> Duración: ${data.runtime} minutos</p> `;
    genero.innerHTML = `<p> Género: ${gnPeli}</p> `;
    fechaEstreno.innerHTML = `<p> Estreno: ${data.release_date}</p> `;
    sinopsis.innerHTML = `<p> Sinopsis: ${data.overview}}</p> `;

    //Agregar botón de favoritos

    let favorito = false;
    function estaEnFavoritosONo() {
      // BUSCO EN LOCAL 

      let favoritos_array = localStorage.getItem('favoritos')

      if (favoritos_array) {
        console.log('Hay local de favoritos')
        let favoritos_parseado = JSON.parse(favoritos_array)
        let estaEnFavorito = favoritos_parseado.includes(id_peli)
        if (estaEnFavorito) {
          favoritos.innerHTML += `Quitar de favoritos`;

          favorito = true

        } else {
          favoritos.innerHTML = `Agregar a favoritos`;
          favorito = false
        }
      }

    }
    estaEnFavoritosONo()

    favoritos.addEventListener("click", function () {
      if (this.style.backgroundColor === "red") {
        this.style.backgroundColor = "green";
        this.innerHTML = "Agregar a Favoritos";
        let favs = [];
        let favsString = JSON.stringify(favs);

        localStorage.setItem('favsString')
      } else {
        this.style.backgroundColor = "red";
        this.innerHTML = "Quitar de favoritos";
      }
    });
  })

  .catch(function (error) {
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
        let recomendacionesPeli = data.results // Todas las recomendaciones
        if (recomendacionesPeli.length !== 0) {
          let contenido = "";
          for (let i = 0; i < 5; i++) {

            contenido += `<a href="detalles_peliculas.html?id=${recomendacionesPeli[i].id}">
          <img src="https://image.tmdb.org/t/p/w500${recomendacionesPeli[i].poster_path}">
          <p>${recomendacionesPeli[i].original_title}</p></a>`

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

