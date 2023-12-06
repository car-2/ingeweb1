function validateForm() {
  const name = document.getElementById('name');
  const price = document.getElementById('price');
  const inventory = document.getElementById('inventory');

  document.getElementById('name-error').innerText = '';
  document.getElementById('price-error').innerText = '';
  document.getElementById('inventory-error').innerText = '';

  name.addEventListener('input', clearError);
  price.addEventListener('input', clearError);
  inventory.addEventListener('input', clearError);

  if (name.value === '') {
    document.getElementById('name-error').innerText = 'El nombre es obligatorio';
  }

  if (price.value === '') {
    document.getElementById('price-error').innerText = 'El precio es obligatorio';
  }

  if (inventory.value === '') {
    document.getElementById('inventory-error').innerText = 'El inventario es obligatorio';
  }

  if (name.value !== '' && price.value !== '' && inventory.value !== '') {
    alert('Formulario creado con éxito');
  }
}

function clearError(event) {
  const inputId = event.target.id;
  const errorId = `${inputId}-error`;
  document.getElementById(errorId).innerText = '';
}