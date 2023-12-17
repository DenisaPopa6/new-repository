var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var navbar = document.querySelector("header");

const firstAnimal = document.getElementById("animal1");
firstAnimal.setAttribute("title", "Pedro");

const secondAnimal = document.getElementById("animal2");
secondAnimal.setAttribute("title", "Maez");

const thirdAnimal = document.getElementById("animal3");
thirdAnimal.setAttribute("title", "Grover");

const fourthAnimal = document.getElementById("animal4");
fourthAnimal.setAttribute("title", "Handsome");

const fifthAnimal = document.getElementById("animal5");
fifthAnimal.setAttribute("title", "Coco");

const sixthAnimal = document.getElementById("animal6");
sixthAnimal.setAttribute("title", "Riney");

const statisticsTable =  document.getElementById("statistics");
statisticsTable.setAttribute("title", "Statistics of 2023");
