//Resultado de Busqueda


let queryString=location.search;
let queryStringObj= new URLSearchParams(queryString);
let palabraBuscada = queryStringObj.get('busqueda');
let resultados=document.querySelector(".resultados");
let noHayResultado=document.querySelector("main");
let nombreRes = document.querySelector(".nombreRes")
let ApiKey="1173214cf5e2ac8f2c0ac1c242d0ec8a";
let endPoint= `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${palabraBuscada}`
let endPointTv= `https://api.themoviedb.org/3/search/tv?api_key=${ApiKey}&query=${palabraBuscada}`

    fetch(endPoint)
        .then (function(response) {
            return response.json();
        })
        .then (function(data){
            if(data.results.length===0){
                noHayResultado.innerHTML = '<h2>No hay resultado para su búsqueda</h2>';
           } else {
                let pelicula= data.results; //Todas las peliculas
                let contenido= "";
                for (let i=0; i< 5; i++){
            
                 contenido+= `<article class="articulo">
                 <a href="./detalles_peliculas.html?id=${pelicula[i].id}"> <img src="https://image.tmdb.org/t/p/w500${pelicula[i].poster_path}"></a>
                 <a href="./detalles_peliculas.html?id=${pelicula[i].id}">
                 </a>
                 <a href="detalles_peliculas.html?id=${pelicula[i].id}"><p>${pelicula[i].title}</p></a>
                 <a href="detalles_peliculas.html?id=${pelicula[i].id}">
                 <p>${pelicula[i].release_date}</p></a>
                 </article>`
           }
        resultados.innerHTML = contenido;
        nombreRes.innerHTML = `<h2>Resultado de búsqueda para "${palabraBuscada}" </h2>`
        }
        
    })
        .catch(function(error){
         console.log('El error es: ' + error);
        
     });
     fetch(endPointTv)
        .then (function(response) {
            return response.json();
        })
        .then (function(data){
            if(data.results.length===0){
                noHayResultado.innerHTML = '<h2> No hay resultado para su búsqueda </h2>';
           } else {
                let tv= data.results; //Todas las series
                let contenido= "";
                for (let i=0; i< 5; i++){
            
                 contenido+= `<article class="articulo">
                 <a href="./detalles_series.html?id=${tv[i].id}"> <img src="https://image.tmdb.org/t/p/w500${tv[i].poster_path}"></a>
                 <a href="./detalles_series.html?id=${tv[i].id}">
                 <p>${tv[i].original_name}</p></a>
                 <a href="./detalles_series.html?id=${tv[i].id}">
                 <p>${tv[i].first_air_date}</p></a>
                 </article>`
           }
        resultados.innerHTML = contenido;
        nombreRes.innerHTML = `<h2>Resultado de búsqueda para "${palabraBuscada}" </h2>`
        }
        
    })
        .catch(function(error){
         console.log('El error es: ' + error);
     });
     


        

