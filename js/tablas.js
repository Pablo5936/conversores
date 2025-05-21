function generarTabla() {
  let tabla = Number(document.getElementById('numero').value)

  document.getElementById('resultado').innerHTML = `Tabla del ${tabla}: <br>
    ${tabla} x 1 = ${tabla * 1} <br>
    ${tabla} x 2 = ${tabla * 2} <br>
    ${tabla} x 3 = ${tabla * 3} <br>
    ${tabla} x 4 = ${tabla * 4} <br>
    ${tabla} x 5 = ${tabla * 5} <br>
    ${tabla} x 6 = ${tabla * 6} <br>
    ${tabla} x 7 = ${tabla * 7} <br>
    ${tabla} x 8 = ${tabla * 8} <br>
    ${tabla} x 9 = ${tabla * 9} <br>
    ${tabla} x 10 = ${tabla * 10} <br>`
}
