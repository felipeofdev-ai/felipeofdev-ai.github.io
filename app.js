/* ======================================================
   BridgeTrace AI – app.js (Enterprise Safe Version)
   ====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("BridgeTrace AI initialized");

  initHeroGraph();
  initNetworkGraph();
});

/* ======================================================
   HERO GRAPH (Background Visual)
   ====================================================== */
function initHeroGraph() {
  const container = document.getElementById("heroGraph");
  if (!container || !window.vis) return;

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
    physics: {
      stabilization: true
    },
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
  if (!container || !window.vis) return;

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

  const options = {
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
  };

  new vis.Network(container, { nodes, edges }, options);
}

/* ======================================================
   DEMO FUNCTIONS (SAFE FALLBACKS)
   ====================================================== */
function switchDemoTab(tab) {
  document.querySelectorAll(".demo-panel").forEach(p => p.classList.remove("active"));
  document.getElementById(`demo-${tab}`)?.classList.add("active");

  document.querySelectorAll(".demo-tab").forEach(t => t.classList.remove("active"));
  document.querySelector(`[data-tab="${tab}"]`)?.classList.add("active");
}

let riskChartInstance = null;

function executeRiskAnalysis() {
  const canvas = document.getElementById("riskChart");
  if (!canvas || !window.Chart) return;

  const ctx = canvas.getContext("2d");

  // Synthetic time-series risk data (30 days)
  const days = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

  const riskValues = days.map(() =>
    Number((Math.random() * 0.4 + 0.3).toFixed(2))
  );

  const avgRisk =
    riskValues.reduce((a, b) => a + b, 0) / riskValues.length;

  const riskLevel =
    avgRisk > 0.75 ? "High" :
    avgRisk > 0.45 ? "Medium" : "Low";

  if (riskChartInstance) {
    riskChartInstance.destroy();
  }

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
          borderDash: [6, 6],
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        tooltip: {
          callbacks: {
            label: (ctx) =>
              `Risk Score: ${ctx.parsed.y.toFixed(2)}`
          }
        }
      },
      scales: {
        y: {
          min: 0,
          max: 1,
          title: {
            display: true,
            text: "Normalized Risk Score"
          }
        }
      }
    }
  });

  renderRiskInterpretation(avgRisk, riskLevel)
;
}
function renderRiskInterpretation(score, level) {
  const container = document.querySelector("#demo-risk .demo-output");
  if (!container) return;

  let interpretation = "";

  if (level === "High") {
    interpretation = `
      Elevated risk trend detected with sustained scores above alert threshold.
      Behavioral patterns are consistent with fund layering or rapid redistribution.
    `;
  } else if (level === "Medium") {
    interpretation = `
      Moderate risk exposure identified. Transaction behavior deviates from
      baseline but lacks strong indicators of malicious intent.
    `;
  } else {
    interpretation = `
      Low risk profile observed. Transaction flow and timing align with
      expected operational behavior.
    `;
  }

  let note = document.getElementById("riskNote");
  if (!note) {
    note = document.createElement("div");
    note.id = "riskNote";
    note.className = "risk-interpretation";
    container.appendChild(note);
  }

  note.innerHTML = `
    <h4>Risk Interpretation</h4>
    <p><strong>Overall Level:</strong> ${level}</p>
    <p>${interpretation}</p>
    <p class="tech-note">
      Score derived from temporal volatility, transaction frequency
      and relative value dispersion (synthetic model).
    </p>
  `;
}


function generateAIReport() {
  const output = document.getElementById("aiOutput");
  if (!output) return;

  const riskScore = 0.67;
  const riskLevel =
    riskScore > 0.75 ? "High" :
    riskScore > 0.45 ? "Medium" : "Low";

  output.innerHTML = `
    <div class="ai-report">

      <h3>AI Compliance Risk Report</h3>
      <p class="report-meta">
        Generated automatically • Synthetic Data • Graph Intelligence Engine
      </p>

      <hr>

      <h4>1. Executive Summary</h4>
      <p>
        The analyzed entity presents a <strong>${riskLevel} risk profile</strong>
        based on transaction flow topology, behavioral patterns and exposure
        to high-liquidity exit points.
      </p>

      <h4>2. Key Risk Indicators</h4>
      <ul>
        <li>Transaction fan-out above baseline threshold</li>
        <li>Value concentration followed by rapid dispersion</li>
        <li>Indirect exposure to centralized exchange nodes</li>
      </ul>

      <h4>3. Graph-Based Findings</h4>
      <p>
        Graph traversal identified multiple multi-hop paths originating
        from the source entity, converging through a shared intermediary
        before reaching liquidity endpoints.
      </p>

      <h4>4. Behavioral Analysis</h4>
      <p>
        Temporal analysis suggests non-random transaction timing with
        clustered execution windows, indicating potential automation
        or coordinated behavior.
      </p>

      <h4>5. Compliance Interpretation</h4>
      <p>
        While no direct violation is detected, the observed structure
        aligns with early-stage typologies associated with layering
        and risk obfuscation techniques.
      </p>

      <h4>6. Recommended Actions</h4>
      <ul>
        <li>Apply enhanced transaction monitoring</li>
        <li>Correlate with KYC / KYT datasets</li>
        <li>Flag entity for periodic risk reassessment</li>
      </ul>

      <h4>7. AI Explainability (Technical)</h4>
      <p class="tech-note">
        Risk score derived from weighted graph metrics (degree centrality,
        path depth, value entropy) combined with heuristic behavioral rules.
        No personal or real-world data was processed.
      </p>

      <div class="risk-score">
        <span>Computed Risk Score</span>
        <strong>${riskScore.toFixed(2)}</strong>
      </div>

    </div>
    
  `;
}

/* ======================================================
   UI HELPERS
   ====================================================== */
function toggleMobileMenu() {
  document.querySelector(".nav-links")?.classList.toggle("open");
}

function toggleLanguage() {
  console.warn("Language system not implemented yet");
}

function setLanguage(lang) {
  console.log("Language set to:", lang);
}
