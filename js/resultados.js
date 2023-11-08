//Resultado de Busqueda
let ResultadosDeBusqueda=document.querySelector(".buscar");

ResultadosDeBusqueda.addEventListener('click', 'submit', function(){
    fetch('https://dh-movies.com/movies')
     .then(function(response){
         return response.json();
     })
     .then(function(data){
         console.log(data);
     })
     .catch(function(error){
         console.log('El error es: ' + error);
         let NoHayResultado=document.querySelector("main").innerHTML = "No hay resultado de busqueda";
            NoHayResultado.style.fontSize = "45px";
     })
});

