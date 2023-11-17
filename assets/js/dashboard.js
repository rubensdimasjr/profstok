/* globals Chart:false */

(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
      ],
      datasets: [{
        data: [
          21,
          18,
          24,
          23,
          24,
          12
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })

  var ctx2 = document.getElementById('pieChart').getContext('2d');
  var pieChart = new Chart(ctx2, {
      type: 'pie',
      data: {
          labels: ['Não devolvido', 'Devolvido', 'Agendado'],
          datasets: [{
              data: [40, 30, 30], // Percentuais de exemplo para diferentes tipos de agendamentos
              backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(255, 205, 86, 0.7)']
          }]
      }
  });
})()
