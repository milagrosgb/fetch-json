const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  container.innerHTML = ''; // Limpia el contenido del contenedor antes de añadir nuevos datos
  
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // Usa backticks para crear una cadena de texto con el nombre y apellido
    container.innerHTML += `<p>${item.name} ${item.lastname}</p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}

// Realiza el fetch al archivo con los datos y muestra los estudiantes con la función showData
fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Convierte la respuesta en JSON
  })
  .then(data => {
    // Accede a la propiedad "students" del objeto JSON
    showData(data.students); // Llama a la función showData con la lista de estudiantes obtenida
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });