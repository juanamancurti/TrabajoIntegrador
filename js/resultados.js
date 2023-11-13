//Resultado de Busqueda
let ResultadosDeBusqueda=document.querySelector(".buscar");

let nombresPeliculas = [
    "Escuela de princesas",
    "La princesa y la plebeya",
    "Las 12 princesas bailarinas",
    "El lago de los cisnes",
    "Rapunzel",
    "2023",
    "Life in the Dreamhouse",
    "Dreamtopia",
    "Somos dos",
    "Vlogger",
    "Dreamhouse Adventures",
    "A touch of magic",
    "y las tres mosqueteras",
    "Mariposa",
    "La princesa de la isla",
    "y la magia del pegaso",
    "Fairytopia",
    "Cascanueces"
];

let encontrado = false;

ResultadosDeBusqueda.addEventListener('click', 'submit', function(){
    for (let i = 0; i < nombresPeliculas.length; i++) {
        if (ResultadosDeBusqueda.toLowerCase() === nombresPeliculas[i].toLowerCase()) {
            // Mostrar la película correspondiente
            let elementosPeliculas = document.querySelectorAll('.articulo');
            for (let j = 0; j < elementosPeliculas.length; j++) {
                elementosPeliculas[j].style.display = j === i ? "block" : "none";
            }

            encontrado = true;
            break; // Salir del bucle una vez que se haya encontrado la película
        }
    }
    // Si no se encuentra ninguna película, mostrar el mensaje de no resultados
    if (!encontrado) {
        let NoHayResultado = document.querySelector("main").innerHTML = "No hay resultado de búsqueda";
        NoHayResultado.style.fontSize = "45px";
    }
});
