// 
// Página: Detalle del género (series y películas por género).
//Lista de películas o series con su foto y su nombre. Al clickear en cualquiera de las series/ películas debe redirigir al detalle (punto 4).

// El end point para usar es "Discover".
// si no existe el genero tiene indicar error 

//Asiganamos variables
let qS = location.search
let qSObj = new URLSearchParams(qS)
let idGenero = qSObj.get("id")
let ApiKey=  "1173214cf5e2ac8f2c0ac1c242d0ec8a";
let discover = `https://api.themoviedb.org/3/discover/movie?with_genres=${idGenero}&api_key=${ApiKey}`;

console.log(discover)
//Dom 
let detalles_de_genero=document.querySelector(".detalles");


//Fetch Peliculas
fetch(discover)
.then(function(response){
    return response.json();
})
.then(function(data){
    let pelicula= data.results; //Todas las peliculas
    console.log(pelicula)
    
    let contenido= "";
    for (let i=0; i< 12; i++){
        
        contenido+= `<article class="articulo">
                        <a href="detalles_peliculas.html?id=${pelicula[i].id}"><img src="https://image.tmdb.org/t/p/w500${pelicula[i].poster_path}">
                        <a href="detalles_peliculas.html?id=${pelicula[i].id}">
                        <p>${pelicula[i].title}</p>
                        <p>${pelicula[i].release_date}</p>
                        </a>
                        </article>`
    }

    detalles_de_genero.innerHTML = contenido;
    
})


