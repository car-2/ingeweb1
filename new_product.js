function validateForm() {
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const inventory = document.getElementById('inventory').value;

  document.getElementById('name-error').innerText = '';
  document.getElementById('price-error').innerText = '';
  document.getElementById('inventory-error').innerText = '';

  if (name === '') {
    document.getElementById('name-error').innerText = 'El nombre es obligatorio';
  }

  if (price === '') {
    document.getElementById('price-error').innerText = 'El precio es obligatorio';
  }

  if (inventory === '') {
    document.getElementById('inventory-error').innerText = 'El inventario es obligatorio';
  }

  if (name !== '' && price !== '' && inventory !== '') {
    alert('Formulario creado con éxito');
  }
}