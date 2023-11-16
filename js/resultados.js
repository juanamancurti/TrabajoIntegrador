//Resultado de Busqueda


let queryString=location.search;
let queryStringObj= new URLSearchParams(queryString);
let palabraBuscada = queryStringObj.get('busqueda');
let resultados=document.querySelector(".resultados");
let noHayResultado=document.querySelector("main");
let ApiKey="1173214cf5e2ac8f2c0ac1c242d0ec8a";
let endPoint= `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${palabraBuscada}`
let endPointTv= `https://api.themoviedb.org/3/search/tv?api_key=${ApiKey}&query=${palabraBuscada}`

    fetch(endPoint)
        .then (function(response) {
            return response.json();
        })
        .then (function(data){
            if(data.results.length===0){
                noHayResultado.innerHTML = '<h2>No hay resultado de búsqueda</h2>';
           } else {
                let pelicula= data.results; //Todas las peliculas
                let contenido= "";
                for (let i=0; i< 5; i++){
            
                 contenido+= `<article class="articulo">
                 <a href="./detalles_peliculas.html"> <img src="https://image.tmdb.org/t/p/w500${pelicula[i].poster_path}"></a>
                 <a href="./detalles_peliculas.html?id=${pelicula[i].id}">
                 </a>
                 <p>${pelicula[i].title}</p>
                 <p>${pelicula[i].release_date}</p>
                 </article>`
           }
        resultados.innerHTML = contenido;
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
                noHayResultado.innerHTML = '<h2> No hay resultado de búsqueda </h2>';
           } else {
                let tv= data.results; //Todas las series
                let contenido= "";
                for (let i=0; i< 5; i++){
            
                 contenido+= `<article class="articulo">
                 <a href="./detalles_series.html"> <img src="https://image.tmdb.org/t/p/w500${tv[i].poster_path}"></a>
                 <a href="./detalles_series.html?id=${tv[i].id}">
                 </a>
                 <p>${tv[i].original_name}</p>
                 <p>${tv[i].first_air_date}</p>
                 </article>`
           }
        resultados.innerHTML = contenido;
        }
        
    })
        .catch(function(error){
         console.log('El error es: ' + error);
     });
     


        

