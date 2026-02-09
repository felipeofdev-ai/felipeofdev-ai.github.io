/* ======================================================
   BridgeTrace AI – app.js (Enterprise Stable Edition)
   ====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("BridgeTrace AI initialized");

  safeInit(initHeroGraph);
  safeInit(initNetworkGraph);
});

/* ======================================================
   SAFE INITIALIZER
   ====================================================== */
function safeInit(fn) {
  try {
    fn();
  } catch (e) {
    console.warn(`Module failed: ${fn.name}`, e);
  }
}

/* ======================================================
   HERO GRAPH (Background Visual)
   ====================================================== */
function initHeroGraph() {
  const container = document.getElementById("heroGraph");
  if (!container || typeof vis === "undefined") return;

  const nodes = new vis.DataSet([
    { id: 1, label: "Bank", color: "#4f46e5" },
    { id: 2, label: "PIX", color: "#06b6d4" },
    { id: 3, label: "Wallet", color: "#22c55e" },
    { id: 4, label: "Exchange", color: "#f59e0b" }
  ]);

  const edges = new vis.DataSet([
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 }
  ]);

  new vis.Network(container, { nodes, edges }, {
    physics: { stabilization: true },
    interaction: { hover: true },
    nodes: {
      shape: "dot",
      size: 14,
      font: { color: "#e5e7eb" }
    },
    edges: {
      color: "#64748b",
      smooth: true
    }
  });
}

/* ======================================================
   MAIN NETWORK GRAPH (Demo)
   ====================================================== */
function initNetworkGraph() {
  const container = document.getElementById("networkGraph");
  if (!container || typeof vis === "undefined") return;

  const nodes = new vis.DataSet([
    { id: "A", label: "Bank A", color: "#4f46e5" },
    { id: "B", label: "PIX Hub", color: "#06b6d4" },
    { id: "C", label: "Wallet C", color: "#22c55e" },
    { id: "D", label: "Wallet D", color: "#22c55e" },
    { id: "E", label: "Exchange", color: "#f59e0b" }
  ]);

  const edges = new vis.DataSet([
    { from: "A", to: "B", label: "$50k" },
    { from: "B", to: "C", label: "$12k" },
    { from: "B", to: "D", label: "$8k" },
    { from: "C", to: "E", label: "$10k" }
  ]);

  new vis.Network(container, { nodes, edges }, {
    physics: {
      enabled: true,
      barnesHut: {
        gravitationalConstant: -30000,
        springLength: 120
      }
    },
    nodes: {
      shape: "dot",
      size: 16,
      font: { color: "#e5e7eb" }
    },
    edges: {
      arrows: "to",
      font: { align: "middle" },
      color: "#94a3b8"
    }
  });
}

/* ======================================================
   DEMO TABS
   ====================================================== */
function switchDemoTab(tab) {
  document.querySelectorAll(".demo-panel").forEach(p => p.classList.remove("active"));
  document.getElementById(`demo-${tab}`)?.classList.add("active");

  document.querySelectorAll(".demo-tab").forEach(t => t.classList.remove("active"));
  document.querySelector(`[data-tab="${tab}"]`)?.classList.add("active");
}

/* ======================================================
   RISK ANALYSIS (Chart.js Safe)
   ====================================================== */
let riskChartInstance = null;

function executeRiskAnalysis() {
  const canvas = document.getElementById("riskChart");
  if (!canvas || typeof Chart === "undefined") return;

  const ctx = canvas.getContext("2d");

  const days = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
  const riskValues = days.map(() => +(Math.random() * 0.4 + 0.3).toFixed(2));

  const avgRisk = riskValues.reduce((a, b) => a + b, 0) / riskValues.length;
  const riskLevel = avgRisk > 0.75 ? "High" : avgRisk > 0.45 ? "Medium" : "Low";

  if (riskChartInstance) riskChartInstance.destroy();

  riskChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: days,
      datasets: [
        {
          label: "Risk Score",
          data: riskValues,
          tension: 0.35,
          fill: true
        },
        {
          label: "Alert Threshold",
          data: Array(30).fill(0.7),
          borderDash: [6, 6]
        }
      ]
    },
    options: {
      responsive: true,
      scales: { y: { min: 0, max: 1 } }
    }
  });

  renderRiskInterpretation(avgRisk, riskLevel);
}

function renderRiskInterpretation(score, level) {
  const container = document.querySelector("#demo-risk .demo-output");
  if (!container) return;

  container.innerHTML = `
    <div class="risk-interpretation">
      <h4>Risk Interpretation</h4>
      <p><strong>Overall Level:</strong> ${level}</p>
      <p>
        Score derived from synthetic behavioral and graph metrics.
        This demo does not process real user or financial data.
      </p>
    </div>
  `;
}

/* ======================================================
   AI REPORT
   ====================================================== */
function generateAIReport() {
  const output = document.getElementById("aiOutput");
  if (!output) return;

  output.innerHTML = `
    <div class="ai-report">
      <h3>AI Compliance Risk Report</h3>
      <p class="tech-note">
        Generated using synthetic data and graph heuristics.
        No real-world entities involved.
      </p>
    </div>
  `;
}

/* ======================================================
   UI HELPERS
   ====================================================== */
function toggleMobileMenu() {
  document.querySelector(".nav-links")?.classList.toggle("open");
}
