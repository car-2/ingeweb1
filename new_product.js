
function validateForm() {
    
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const inventory = document.getElementById("inventory").value;
  
    
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
  
    
    return true;
  }
  
  
  document.getElementById("new-product-form").onsubmit = validateForm;
  
  
  document.getElementById("new-product-form").querySelector("button").onclick = function() {
   
    if (validateForm()) {
      alert("Producto creado correctamente.");
    }
  };