function calcularTotal() {
  let precio = Number(document.getElementById('precio').value)
  let iva = Number(document.getElementById('iva').value)

  let total = precio + (precio * iva) / 100

  document.getElementById('resultado').innerHTML = `El total es: ${total.toFixed(2)}`
}
