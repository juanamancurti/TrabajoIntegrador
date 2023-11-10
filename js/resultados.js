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

let ApiKey="1173214cf5e2ac8f2c0ac1c242d0ec8a";
