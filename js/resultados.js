//Resultado de Busqueda
let ResultadosDeBusqueda=document.querySelector(".buscar");

ResultadosDeBusqueda.addEventListener('click', 'submit', function(){
    let ApiKey="1173214cf5e2ac8f2c0ac1c242d0ec8a";
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



document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "TU_CLAVE_DE_API"; // Reemplaza con tu clave de API
    const cx = "TU_ID_DE_CSE"; // Reemplaza con tu ID de Google CSE
    const searchInput = document.getElementById("search-term");

    // Obtener el término de búsqueda de la URL (simulado, puedes ajustar según tus necesidades)
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get("q");

    // Mostrar el término de búsqueda en la página
    searchInput.innerText = `"${searchTerm}"`;

    // Realizar la solicitud a la API de Google CSE
    fetch(`https://www.googleapis.com/customsearch/v1?q=${searchTerm}&key=${apiKey}&cx=${cx}`)
        .then(response => response.json())
        .then(data => {
            const resultsList = document.getElementById("results-list");
            const noResultsText = document.getElementById("no-results-text");

            if (data.items && data.items.length > 0) {
                data.items.forEach(item => {
                    const resultItem = document.createElement("div");
                    resultItem.classList.add("result-item");
                    resultItem.innerText = item.title;

                    // Agregar evento de clic para redirigir al detalle (punto 4)
                    resultItem.addEventListener("click", function () {
                        // Simulación de redirección al detalle (puedes ajustar según tus necesidades)
                        alert(`Redirigir al detalle de: ${item.title}`);
                    });

                    resultsList.appendChild(resultItem);
                });
            } else {
                noResultsText.style.display = "block";
            }
        })
        .catch(error => {
            console.error("Error al obtener resultados de la API:", error);
        });
});
