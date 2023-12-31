//Asiganamos variables
let ApiKey=  "1173214cf5e2ac8f2c0ac1c242d0ec8a";
let TopRated=  `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`;
let PeliculasPopulares= `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`;
let SeriesPopulares= `https://api.themoviedb.org/3/tv/popular?api_key=${ApiKey}`;

//Asignamos variables utilizando DOM
let peliculasMasVistas=document.querySelector(".peliculas");
let seriesMasVistas=document.querySelector(".Series");
let nostalgic=document.querySelector(".Nostalgic");

//Fetch Peliculas
fetch(TopRated)
.then(function(response){
    return response.json();
})
.then(function(data){
    let pelicula= data.results; //Todas las peliculas
    console.log(pelicula)
    
    let contenido= "";
    for (let i=0; i< 5; i++){
        
        contenido+= `<article class="articulo">
                        <a href="detalles_peliculas.html?id=${pelicula[i].id}">
                            <img src="https://image.tmdb.org/t/p/w500${pelicula[i].poster_path}">
                    </a>
                    <a href="detalles_peliculas.html?id=${pelicula[i].id}">
                        <p>${pelicula[i].title}</p>
                        </a>
                    <a href="detalles_peliculas.html?id=${pelicula[i].id}">
                        <p>${pelicula[i].release_date}</p>
                        </a>
                        </article>`
    }

    peliculasMasVistas.innerHTML = contenido;
    
})

.catch(function(error){
        console.log('El error es: ' + error);
})



//Fetch Series
fetch(SeriesPopulares)
.then(function(response){
    return response.json();
})
.then(function(data){
    let series= data.results; //Todas las peliculas
    console.log(series)

    let contenido= "";
    for (let i=0; i< 5; i++){
        
        contenido+= `<article class="articulo">
                          <a href="detalles_series.html?id=${series[i].id}">
                              <img src="https://image.tmdb.org/t/p/w500${series[i].poster_path}">
                         </a>
                         <a href="detalles_series.html?id=${series[i].id}">
                        <h3>${series[i].name}</h3>
                        </a>
                        <a href="detalles_series.html?id=${series[i].id}">
                        <p>${series[i].first_air_date}</p>
                        </a>
                        </article>`
    }

    seriesMasVistas.innerHTML = contenido;
    
})

.catch(function(error){
        console.log('El error es: ' + error);
})


//Fetch Top Rated
fetch(PeliculasPopulares)
.then(function(response){
    return response.json();
})
.then(function(data){
    let peliculaPop= data.results; //Todas las peliculas
    console.log(peliculaPop)
 
    let contenido= "";
    for (let i=0; i< 5; i++){
        
        contenido+= `<article class="articulo">
                        <a href="detalles_peliculas.html?id=${peliculaPop[i].id}">
                            <img src="https://image.tmdb.org/t/p/w500${peliculaPop[i].poster_path}"> </a>
                            <a href="detalles_peliculas.html?id=${peliculaPop[i].id}"><p>${peliculaPop[i].title}</p></a>
                            <a href="detalles_peliculas.html?id=${peliculaPop[i].id}"><p>${peliculaPop[i].release_date}</p></a>
                        </article>`
    }
   

    nostalgic.innerHTML = contenido;
    
})

.catch(function(error){
        console.log('El error es: ' + error);
})

