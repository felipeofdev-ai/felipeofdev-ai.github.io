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

function executeRiskAnalysis() {
  alert("Risk analysis engine will be connected to backend in production.");
}

function generateAIReport() {
  const output = document.getElementById("aiOutput");
  if (!output) return;

  output.innerHTML = `
    <h3>AI Compliance Report</h3>
    <p><strong>Risk Level:</strong> Medium</p>
    <p>Detected transaction concentration, rapid fund dispersion and exchange exposure.</p>
    <p>Recommended actions: enhanced monitoring, KYC review, pattern correlation.</p>
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
