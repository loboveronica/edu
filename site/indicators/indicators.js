// Dados de exemplo para os gráficos
const performanceData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Desempenho',
        data: [75, 80, 85, 90, 88, 92], // Dados de desempenho
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const allocationData = {
    labels: ['Desenvolvimento', 'Marketing', 'Vendas', 'Suporte'],
    datasets: [{
        label: 'Alocação',
        data: [30, 25, 20, 25], // Dados de alocação
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

const satisfactionData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Satisfação',
        data: [80, 82, 85, 87, 90, 88], // Dados de satisfação
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
    }]
};

const respondentsData = {
    labels: ['Pesquisa 1', 'Pesquisa 2', 'Pesquisa 3', 'Pesquisa 4'],
    datasets: [{
        label: 'Respondentes',
        data: [200, 180, 220, 210], // Dados de respondentes
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
    }]
};

// Configuração dos gráficos
const performanceChartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const allocationChartOptions = {
    indexAxis: 'y',
    scales: {
        x: {
            beginAtZero: true
        }
    }
};

const satisfactionChartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const respondentsChartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Criando os gráficos
const performanceCtx = document.getElementById('performanceChart').getContext('2d');
const allocationCtx = document.getElementById('allocationChart').getContext('2d');
const satisfactionCtx = document.getElementById('satisfactionChart').getContext('2d');
const respondentsCtx = document.getElementById('respondentsChart').getContext('2d');

new Chart(performanceCtx, {
    type: 'line',
    data: performanceData,
    options: performanceChartOptions
});

new Chart(allocationCtx, {
    type: 'bar',
    data: allocationData,
    options: allocationChartOptions
});

new Chart(satisfactionCtx, {
    type: 'line',
    data: satisfactionData,
    options: satisfactionChartOptions
});

new Chart(respondentsCtx, {
    type: 'bar',
    data: respondentsData,
    options: respondentsChartOptions
});
