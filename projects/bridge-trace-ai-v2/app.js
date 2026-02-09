// ===================================
// BRIDGETRACE AI - ULTIMATE APP.JS
// i18n, Animations, Interactive Demos
// ===================================

// ==============
// i18n SUPPORT
// ==============
const translations = {
    en: {
        selectLanguage: "Select Your Language",
        nav: { features: "Features", demo: "Demo", architecture: "Architecture", github: "GitHub" },
        hero: {
            badge: "Ultimate Enterprise Edition",
            title1: "Financial Intelligence",
            title2: "Redefined",
            subtitle: "Advanced traceability platform for financial flows across Banking, PIX, and Blockchain using AI-powered Graph Theory and Real-time Risk Analysis",
            stat1: "% Uptime",
            stat2: "ms Latency",
            stat3: "K+ TPS",
            tryDemo: "Try Live Demo",
            viewCode: "View Source Code"
        },
        demo: {
            tab1: "Transaction Tracing",
            tab2: "Risk Analysis",
            tab3: "Network Graph",
            tab4: "AI Reports",
            trace: {
                execute: "Execute Trace",
                nodes: "Nodes",
                paths: "Paths",
                risk: "Risk"
            }
        },
        loading: "Processing..."
    },
    pt: {
        selectLanguage: "Selecione Seu Idioma",
        nav: { features: "Funcionalidades", demo: "Demonstração", architecture: "Arquitetura", github: "GitHub" },
        hero: {
            badge: "Edição Ultimate Enterprise",
            title1: "Inteligência Financeira",
            title2: "Redefinida",
            subtitle: "Plataforma avançada de rastreabilidade para fluxos financeiros através de Banking, PIX e Blockchain usando Graph Theory com IA e Análise de Risco em Tempo Real",
            stat1: "% Uptime",
            stat2: "ms Latência",
            stat3: "K+ TPS",
            tryDemo: "Testar Demo ao Vivo",
            viewCode: "Ver Código Fonte"
        },
        demo: {
            tab1: "Rastreamento de Transações",
            tab2: "Análise de Risco",
            tab3: "Grafo de Rede",
            tab4: "Relatórios IA",
            trace: {
                execute: "Executar Rastreamento",
                nodes: "Nós",
                paths: "Caminhos",
                risk: "Risco"
            }
        },
        loading: "Processando..."
    }
};

let currentLang = 'en';

// ==============
// LANGUAGE
// ==============
function initLanguage() {
    const saved = localStorage.getItem('bridgetrace-lang');
    if (saved) {
        currentLang = saved;
        applyLanguage(currentLang);
        document.getElementById('langModal')?.classList.remove('active');
    } else {
        document.getElementById('langModal')?.classList.add('active');
    }
}

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = key.split('.').reduce((o, k) => o?.[k], translations[lang]);
        if (value) el.textContent = value;
    });
}

// ==============
// ANIMATIONS
// ==============
function initAnimations() {
    if (!window.gsap) return;
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('[data-animate]').forEach(el => {
        gsap.to(el, {
            scrollTrigger: { trigger: el, start: 'top 80%' },
            toggleClass: 'animated'
        });
    });
}

// ==============
// HERO GRAPH
// ==============
function initHeroGraph() {
    const container = document.getElementById('heroGraph');
    if (!container || !window.vis) return;

    const nodes = new vis.DataSet([
        { id: 1, label: 'Bank', color: '#6366f1' },
        { id: 2, label: 'PIX', color: '#06b6d4' },
        { id: 3, label: 'Crypto', color: '#f59e0b' }
    ]);

    const edges = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 2, to: 3 }
    ]);

    new vis.Network(container, { nodes, edges }, {});
}

// ==============
// DEMO
// ==============
let traceNetwork;

function executeTrace() {
    showLoading();

    setTimeout(() => {
        document.getElementById('traceNodes').textContent = Math.floor(Math.random() * 20 + 10);
        document.getElementById('tracePaths').textContent = Math.floor(Math.random() * 10 + 5);
        document.getElementById('traceRisk').textContent = (Math.random() * 0.5 + 0.3).toFixed(2);
        createTraceGraph();
        hideLoading();
    }, 1200);
}

function createTraceGraph() {
    const container = document.getElementById('traceGraph');
    if (!container || !window.vis) return;

    const nodes = new vis.DataSet([
        { id: 1, label: 'Source' },
        { id: 2, label: 'PIX' },
        { id: 3, label: 'Bank' }
    ]);

    const edges = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 2, to: 3 }
    ]);

    traceNetwork = new vis.Network(container, { nodes, edges }, { physics: false });
}

// ==============
// FIX 🔥
// Prevent form submit (Transaction Trace)
// ==============
document.addEventListener('DOMContentLoaded', () => {
    const traceForm = document.getElementById('traceForm');
    if (traceForm) {
        traceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            executeTrace();
        });
    }
});

// ==============
// UTILITIES
// ==============
function showLoading() {
    document.getElementById('loadingOverlay')?.classList.add('active');
}

function hideLoading() {
    document.getElementById('loadingOverlay')?.classList.remove('active');
}

// ==============
// INIT
// ==============
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initAnimations();
    initHeroGraph();
});
