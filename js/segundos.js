function calcularSegundos() {
  let horas = Number(document.getElementById('horas').value)
  let minutos = Number(document.getElementById('minutos').value)
  let segundos = Number(document.getElementById('segundos').value)
  let totalSegundos = horas * 3600 + minutos * 60 + segundos

  document.getElementById('resultado').innerHTML = `Total de segundos: ${totalSegundos} segundos`
}
