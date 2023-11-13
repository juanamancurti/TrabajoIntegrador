//Asiganamos variables
let ApiKey=  "1173214cf5e2ac8f2c0ac1c242d0ec8a";
let generoPeli = `https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}`
let generoSer = `https://api.themoviedb.org/3/genre/tv/list?api_key=${ApiKey}`
//Dom 
let peliculasGeneros=document.querySelector(".generoPelicula");
let seriesGeneros=document.querySelector(".generoSeries");

//Fetch Peliculas
fetch(generoPeli)
.then(function(response){
    return response.json();
})
.then(function(data){
    let pelicula= data.results; //Todas las peliculas
    console.log(pelicula)

    let contenido= "";
    for (let i=0; i< 5; i++){
        
        contenido+= `<div class="generos_lista">
                    <ul>
                        <li><a href="./detalles_de_genero.html">${data.genres[i].name}</a>
                        </li>
                        </div>
            `

    }

    peliculasGeneros.innerHTML = contenido;
    
})

.catch(function(error){
        console.log('El error es: ' + error);
})

//Fetch Series
fetch(generoSer)
.then(function(response){
    return response.json();
})
.then(function(data){
    let series= data.results; //Todas las peliculas
    console.log(series)

    let contenido= "";
    for (let i=0; i< 5; i++){
        
        contenido+= `<div class="generos_lista">
                    <ul>
                        <li><a href="./detalles_de_genero.html">${data.genres[i].name}</a>
                        </li>
                        </div>
            `

    }

    seriesGeneros.innerHTML = contenido;
    
})

.catch(function(error){
        console.log('El error es: ' + error);
})

