// Definimos una función para validar el formulario
function validateForm() {
    // Obtenemos los valores de los campos de formulario
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const inventory = document.getElementById("inventory").value;
  
    // Comprobamos que todos los campos estén rellenos
    if (name === "") {
      alert("El campo 'Nombre' es obligatorio.");
      return false;
    }
    if (price === "") {
      alert("El campo 'Precio' es obligatorio.");
      return false;
    }
    if (inventory === "") {
      alert("El campo 'Inventario' es obligatorio.");
      return false;
    }
  
    // Si todos los campos están rellenos, devolvemos true
    return true;
  }
  
  // Asignamos la función a la propiedad onsubmit del formulario
  document.getElementById("new-product-form").onsubmit = validateForm;
  
  // Asignamos una función al evento click del botón 'Create product'
  document.getElementById("new-product-form").querySelector("button").onclick = function() {
    // Si la validación es correcta, mostramos una ventana emergente
    if (validateForm()) {
      alert("Producto creado correctamente.");
    }
  };