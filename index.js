const ctx = document.getElementById('dashboard').getContext('2d')
const dash = document.getElementById('dashboard2').getContext('2d')
const board = document.getElementById('dashboard3').getContext('2d')

let paises = ["Japao", "Africa", "USA", "Brasil" ]
let valores = [10, 28, 35 ,56]

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: paises,
    datasets: [{
      label: 'Criminalidade no Pais',
      data: valores,
      backgroundColor: [
        'rgba(16, 168, 250, 0.6)',
        'rgba(164, 250, 40, 0.6)',
        'rgba(247, 236, 10, 0.6)',
        'rgba(249, 48, 48, 0.6)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

let estados = ["Ceará", "Piauí ", "São Paulo", "Alagoas" ]
let indice = [59, 38, 48 ,70]

new Chart(dash, {
  type: 'pie',
  data: {
    labels: estados,
    datasets: [{
      label: 'Criminalidade nos Estados',
      data: indice,
      borderWidth: 1
    }]
  }
});

let cidades = ["Sao paulo", "Rio de Janeiro", "Fortaleza", "Salvador" ]
let Indice = [59, 82, 56, 40]

new Chart(board, {
  type: 'polarArea',
  data: {
    labels: cidades,
    datasets: [{
      label: 'Criminalidade nas Cidades',
      data: Indice,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});