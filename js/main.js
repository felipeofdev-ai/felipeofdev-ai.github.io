// Demo functionality
const API_BASE = 'http://localhost:8000/api/v2';

// Tab switching
document.querySelectorAll('.demo-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        
        document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.demo-content').forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.querySelector(`[data-content="${target}"]`).classList.add('active');
        
        if (target === 'graph') initNetworkGraph();
    });
});

// Run trace
async function runTrace() {
    const source = document.getElementById('traceSource').value;
    const hops = document.getElementById('traceHops').value;
    const amount = document.getElementById('traceAmount').value;
    
    showLoading();
    
    // Simulated trace result
    setTimeout(() => {
        const result = {
            source_id: source,
            paths: [
                {from: source, to: 'pix_001', data: {amount: 5000, channel: 'pix', risk: 0.2}},
                {from: 'pix_001', to: 'crypto_001', data: {amount: 4800, channel: 'bridge', risk: 0.5}}
            ],
            total_paths: 2
        };
        
        displayTraceResults(result);
        hideLoading();
    }, 1000);
}

function displayTraceResults(result) {
    const container = document.getElementById('traceResults');
    container.innerHTML = `
        <div style="margin-bottom: 1rem;">
            <strong>Source:</strong> ${result.source_id}<br>
            <strong>Total Paths:</strong> ${result.total_paths}
        </div>
        <div class="paths">
            ${result.paths.map((p, i) => `
                <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem;">
                    <strong>Path ${i + 1}:</strong> ${p.from} → ${p.to}<br>
                    Amount: R$ ${p.data.amount.toLocaleString()}<br>
                    Channel: ${p.data.channel}<br>
                    Risk: ${p.data.risk.toFixed(2)}
                </div>
            `).join('')}
        </div>
    `;
}

// Risk analysis
async function runRiskAnalysis() {
    const entity = document.getElementById('riskEntity').value;
    const days = document.getElementById('riskDays').value;
    
    showLoading();
    
    setTimeout(() => {
        const result = {
            entity_id: entity,
            risk_level: 'MEDIUM',
            risk_score: 0.45,
            metrics: {
                transaction_count: 25,
                total_volume: 125000,
                high_risk_count: 3
            }
        };
        
        displayRiskResults(result);
        hideLoading();
    }, 1000);
}

function displayRiskResults(result) {
    const container = document.getElementById('riskResults');
    const riskColor = result.risk_level === 'HIGH' ? '#ef4444' : 
                      result.risk_level === 'MEDIUM' ? '#f59e0b' : '#10b981';
    
    container.innerHTML = `
        <div style="background: ${riskColor}; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4>Risk Level: ${result.risk_level}</h4>
            <p>Score: ${result.risk_score.toFixed(2)}</p>
        </div>
        <div>
            <strong>Metrics:</strong><br>
            Transactions: ${result.metrics.transaction_count}<br>
            Volume: R$ ${result.metrics.total_volume.toLocaleString()}<br>
            High Risk: ${result.metrics.high_risk_count}
        </div>
    `;
}

// Network graph
function initNetworkGraph() {
    const container = document.getElementById('networkGraph');
    const nodes = new vis.DataSet([
        {id: 1, label: 'Bank', color: '#2196F3'},
        {id: 2, label: 'PIX', color: '#9C27B0'},
        {id: 3, label: 'Crypto', color: '#4CAF50'},
        {id: 4, label: 'Entity', color: '#FF9800'}
    ]);
    
    const edges = new vis.DataSet([
        {from: 1, to: 2, arrows: 'to'},
        {from: 2, to: 3, arrows: 'to'},
        {from: 1, to: 4, arrows: 'to'}
    ]);
    
    const data = {nodes, edges};
    const options = {
        physics: {enabled: true},
        nodes: {shape: 'dot', size: 30}
    };
    
    new vis.Network(container, data, options);
}

// AI explanation
async function generateAIExplanation() {
    showLoading();
    
    setTimeout(() => {
        const result = {
            summary: "Financial flow analysis completed successfully",
            narrative: "The trace reveals a typical PIX-to-crypto conversion pattern...",
            recommendations: ["Verify wallet ownership", "Check transaction frequency"]
        };
        
        document.getElementById('aiResults').innerHTML = `
            <div style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 0.5rem;">
                <h4>${result.summary}</h4>
                <p style="margin: 1rem 0;">${result.narrative}</p>
                <strong>Recommendations:</strong>
                <ul>
                    ${result.recommendations.map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>
        `;
        
        hideLoading();
    }, 1500);
}

// Utilities
function showLoading() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

function copyCode(id) {
    const code = document.getElementById(id).textContent;
    navigator.clipboard.writeText(code);
    alert('Code copied!');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initNetworkGraph();
});
