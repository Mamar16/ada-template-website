let chart;

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

function loadStock(symbol) {
    // Clear previous error
    document.getElementById('errorMessage').style.display = 'none';
    
    // Validate input
    if (!symbol || symbol.trim() === '') {
        showError('Please enter a stock symbol');
        return;
    }
    
    // Check if data is loaded
    if (!window.STOCK_DATA) {
        showError('Stock data is still loading... Please try again in a moment');
        return;
    }
    
    // Get data
    const upperSymbol = symbol.toUpperCase().trim();
    const data = window.STOCK_DATA[upperSymbol];
    
    if (!data || data.length === 0) {
        showError(`Stock symbol "${upperSymbol}" not found. Please check the symbol and try again.`);
        return;
    }
    
    // Prepare chart data
    const labels = data.map(d => d.date);
    const volumes = data.map(d => d.volume);
    
    // Calculate statistics
    const maxVolume = Math.max(...volumes);
    const minVolume = Math.min(...volumes);
    const avgVolume = (volumes.reduce((a, b) => a + b, 0) / volumes.length).toFixed(0);
    
    // Destroy old chart if exists
    if (chart) {
        chart.destroy();
    }
    
    // Get canvas context
    const ctx = document.getElementById("chart").getContext("2d");
    
    // Create new chart
    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: `Trading Volume - ${upperSymbol}`,
                data: volumes,
                backgroundColor: '#0366d6',
                borderColor: '#0256c7',
                borderWidth: 1,
                borderRadius: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: `Trading Volume for ${upperSymbol}`
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Volume'
                    },
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                }
            }
        }
    });
    
    // Show chart and info
    document.getElementById('chartContainer').style.display = 'block';
    
    // Update stock info
    const infoDiv = document.getElementById('stockInfo');
    infoDiv.innerHTML = `
        <strong>${upperSymbol} Statistics</strong><br>
        Records: ${data.length} trading days<br>
        Max Volume: ${maxVolume.toLocaleString()}<br>
        Min Volume: ${minVolume.toLocaleString()}<br>
        Avg Volume: ${avgVolume.toLocaleString()}
    `;
    infoDiv.style.display = 'block';
}

// Event listener for load button
document.getElementById("loadBtn").addEventListener("click", () => {
    const symbol = document.getElementById("stockSearch").value;
    loadStock(symbol);
});

// Allow Enter key to load stock
document.getElementById("stockSearch").addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        const symbol = document.getElementById("stockSearch").value;
        loadStock(symbol);
    }
});
