// ===================================
// BRIDGETRACE AI - ULTIMATE APP.JS
// Fixed scroll issue + Enhanced modules
// i18n, Animations, Interactive Demos
// ===================================

// ==============
// i18n SUPPORT
// ==============
const translations = {
    en: {
        selectLanguage: "Select Your Language",
        nav: {
            features: "Features",
            demo: "Demo",
            architecture: "Architecture",
            github: "GitHub"
        },
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
        features: {
            label: "Capabilities",
            title: "Ultimate Enterprise Features",
            subtitle: "Production-ready platform built for scalability, security, and observability",
            f1: {
                title: "Multi-Hop Tracing",
                desc: "Advanced pathfinding through complex transaction chains with configurable depth",
                l1: "1-10 hop depth",
                l2: "Value filtering",
                l3: "Risk scoring"
            },
            f2: {
                title: "AI Risk Analysis",
                desc: "ML-powered behavioral assessment with real-time anomaly detection",
                l1: "Pattern analysis",
                l2: "Anomaly detection",
                l3: "Predictive scoring"
            },
            f3: {
                title: "Unified Graph",
                desc: "Comprehensive modeling across banking, PIX, and blockchain networks",
                l1: "Multi-domain",
                l2: "Real-time sync",
                l3: "Cross-network"
            },
            f4: {
                title: "Enterprise Security",
                desc: "JWT authentication, encryption, and complete audit logging",
                l1: "JWT tokens",
                l2: "Bcrypt hashing",
                l3: "Audit logs"
            },
            f5: {
                title: "Full Observability",
                desc: "Prometheus metrics, Grafana dashboards, structured logging",
                l1: "Real-time metrics",
                l2: "Custom dashboards",
                l3: "Distributed tracing"
            },
            f6: {
                title: "High Performance",
                desc: "Async Python, Redis caching, optimized queries",
                l1: "Async/await",
                l2: "Redis cache",
                l3: "Query optimization"
            }
        },
        demo: {
            label: "Live Platform",
            title: "Interactive Demonstrations",
            subtitle: "Experience all features in real-time with production-grade synthetic data",
            tab1: "Transaction Tracing",
            tab2: "Risk Analysis",
            tab3: "Network Graph",
            tab4: "AI Reports",
            trace: {
                title: "Configure Trace",
                source: "Source Entity",
                hops: "Maximum Hops",
                amount: "Minimum Amount ($)",
                execute: "Execute Trace",
                nodes: "Nodes",
                paths: "Paths",
                risk: "Risk"
            },
            risk: {
                title: "Risk Assessment",
                entity: "Entity ID",
                period: "Analysis Period",
                days7: "Last 7 days",
                days30: "Last 30 days",
                days90: "Last 90 days",
                execute: "Run Risk Analysis",
                score: "Risk Score",
                level: "Risk Level",
                exposure: "Exposure Risk",
                structural: "Structural Risk",
                velocity: "Velocity Risk",
                low: "Low Risk",
                medium: "Medium Risk",
                high: "High Risk"
            },
            graph: {
                title: "Network Topology",
                reset: "Reset View",
                physics: "Toggle Physics",
                centrality: "Centrality Analysis",
                desc: "Interactive graph showing relationships between entities. Node size represents transaction centrality. Colors indicate entity types: Banking (blue), PIX (cyan), Crypto (orange)."
            },
            report: {
                title: "AI-Generated Report",
                generate: "Generate Report",
                executive: "Executive Summary",
                findings: "Key Risk Findings",
                patterns: "Suspicious Patterns",
                actions: "Recommended Actions"
            }
        },
        architecture: {
            label: "Technical Details",
            title: "Enterprise Architecture",
            subtitle: "Production-ready stack designed for security, scale, and maintainability",
            backend: "Backend Stack",
            frontend: "Frontend Stack",
            infrastructure: "Infrastructure"
        },
        footer: {
            tagline: "Enterprise Financial Intelligence Platform",
            subtitle: "Production-ready architecture with AI-powered analytics",
            made: "Built with",
            and: "and",
            by: "by"
        }
    },
    pt: {
        selectLanguage: "Selecione seu Idioma",
        nav: {
            features: "Recursos",
            demo: "Demonstração",
            architecture: "Arquitetura",
            github: "GitHub"
        },
        hero: {
            badge: "Edição Enterprise Definitiva",
            title1: "Inteligência Financeira",
            title2: "Redefinida",
            subtitle: "Plataforma avançada de rastreabilidade para fluxos financeiros em Banking, PIX e Blockchain usando Teoria de Grafos e Análise de Risco em tempo real com IA",
            stat1: "% Uptime",
            stat2: "ms Latência",
            stat3: "K+ TPS",
            tryDemo: "Experimentar Demo",
            viewCode: "Ver Código Fonte"
        },
        features: {
            label: "Capacidades",
            title: "Recursos Enterprise Definitivos",
            subtitle: "Plataforma pronta para produção construída para escalabilidade, segurança e observabilidade",
            f1: {
                title: "Rastreamento Multi-Hop",
                desc: "Pathfinding avançado através de cadeias de transações complexas com profundidade configurável",
                l1: "Profundidade 1-10 hops",
                l2: "Filtro de valor",
                l3: "Pontuação de risco"
            },
            f2: {
                title: "Análise de Risco com IA",
                desc: "Avaliação comportamental alimentada por ML com detecção de anomalias em tempo real",
                l1: "Análise de padrões",
                l2: "Detecção de anomalias",
                l3: "Pontuação preditiva"
            },
            f3: {
                title: "Grafo Unificado",
                desc: "Modelagem abrangente através de redes bancárias, PIX e blockchain",
                l1: "Multi-domínio",
                l2: "Sincronização em tempo real",
                l3: "Cross-network"
            },
            f4: {
                title: "Segurança Enterprise",
                desc: "Autenticação JWT, criptografia e log de auditoria completo",
                l1: "Tokens JWT",
                l2: "Hash Bcrypt",
                l3: "Logs de auditoria"
            },
            f5: {
                title: "Observabilidade Completa",
                desc: "Métricas Prometheus, dashboards Grafana, logging estruturado",
                l1: "Métricas em tempo real",
                l2: "Dashboards personalizados",
                l3: "Rastreamento distribuído"
            },
            f6: {
                title: "Alta Performance",
                desc: "Python assíncrono, cache Redis, queries otimizadas",
                l1: "Async/await",
                l2: "Cache Redis",
                l3: "Otimização de consultas"
            }
        },
        demo: {
            label: "Plataforma ao Vivo",
            title: "Demonstrações Interativas",
            subtitle: "Experimente todos os recursos em tempo real com dados sintéticos de nível de produção",
            tab1: "Rastreamento de Transações",
            tab2: "Análise de Risco",
            tab3: "Grafo de Rede",
            tab4: "Relatórios IA",
            trace: {
                title: "Configurar Rastreamento",
                source: "Entidade de Origem",
                hops: "Máximo de Hops",
                amount: "Valor Mínimo (R$)",
                execute: "Executar Rastreamento",
                nodes: "Nós",
                paths: "Caminhos",
                risk: "Risco"
            },
            risk: {
                title: "Avaliação de Risco",
                entity: "ID da Entidade",
                period: "Período de Análise",
                days7: "Últimos 7 dias",
                days30: "Últimos 30 dias",
                days90: "Últimos 90 dias",
                execute: "Executar Análise de Risco",
                score: "Pontuação de Risco",
                level: "Nível de Risco",
                exposure: "Risco de Exposição",
                structural: "Risco Estrutural",
                velocity: "Risco de Velocidade",
                low: "Risco Baixo",
                medium: "Risco Médio",
                high: "Risco Alto"
            },
            graph: {
                title: "Topologia da Rede",
                reset: "Resetar Visualização",
                physics: "Alternar Física",
                centrality: "Análise de Centralidade",
                desc: "Grafo interativo mostrando relacionamentos entre entidades. O tamanho dos nós representa centralidade de transações. Cores indicam tipos de entidade: Banking (azul), PIX (ciano), Crypto (laranja)."
            },
            report: {
                title: "Relatório Gerado por IA",
                generate: "Gerar Relatório",
                executive: "Resumo Executivo",
                findings: "Principais Descobertas de Risco",
                patterns: "Padrões Suspeitos",
                actions: "Ações Recomendadas"
            }
        },
        architecture: {
            label: "Detalhes Técnicos",
            title: "Arquitetura Enterprise",
            subtitle: "Stack pronto para produção projetado para segurança, escala e manutenibilidade",
            backend: "Stack Backend",
            frontend: "Stack Frontend",
            infrastructure: "Infraestrutura"
        },
        footer: {
            tagline: "Plataforma Enterprise de Inteligência Financeira",
            subtitle: "Arquitetura pronta para produção com analytics alimentados por IA",
            made: "Construído com",
            and: "e",
            by: "por"
        }
    }
};

let currentLang = 'en';
let traceNetwork, networkGraph, riskChart;

// ==============
// LANGUAGE FUNCTIONS
// ==============
function initLanguage() {
    const savedLang = localStorage.getItem('bridgetrace-lang');
    if (savedLang) {
        currentLang = savedLang;
        applyLanguage();
        document.getElementById('langModal').style.display = 'none';
    } else {
        document.getElementById('langModal').style.display = 'flex';
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('bridgetrace-lang', lang);
    applyLanguage();
    document.getElementById('langModal').style.display = 'none';
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    localStorage.setItem('bridgetrace-lang', currentLang);
    applyLanguage();
}

function applyLanguage() {
    const t = translations[currentLang];
    document.getElementById('currentLang').textContent = currentLang.toUpperCase();
    
    // Apply all translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;
        
        for (const k of keys) {
            value = value[k];
        }
        
        if (value) {
            el.textContent = value;
        }
    });
}

// ==============
// ANIMATIONS
// ==============
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Scroll-triggered animations
    gsap.utils.toArray('[data-animate="fade-up"]').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 80%'
            },
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });
    
    gsap.utils.toArray('[data-animate="fade-in"]').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 80%'
            },
            opacity: 0,
            duration: 1.2,
            ease: 'power2.out'
        });
    });
    
    gsap.utils.toArray('[data-animate="scale-up"]').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%'
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
    });
}

// ==============
// HERO GRAPH
// ==============
function initHeroGraph() {
    const container = document.getElementById('heroGraph');
    if (!container) return;
    
    const nodes = new vis.DataSet([
        { id: 1, label: '', shape: 'dot', size: 20, color: { background: '#6366f1', border: '#818cf8' } },
        { id: 2, label: '', shape: 'dot', size: 15, color: { background: '#06b6d4', border: '#22d3ee' } },
        { id: 3, label: '', shape: 'dot', size: 18, color: { background: '#10b981', border: '#34d399' } },
        { id: 4, label: '', shape: 'dot', size: 12, color: { background: '#f59e0b', border: '#fbbf24' } },
        { id: 5, label: '', shape: 'dot', size: 16, color: { background: '#ef4444', border: '#f87171' } },
        { id: 6, label: '', shape: 'dot', size: 14, color: { background: '#8b5cf6', border: '#a78bfa' } },
        { id: 7, label: '', shape: 'dot', size: 10, color: { background: '#ec4899', border: '#f472b6' } }
    ]);
    
    const edges = new vis.DataSet([
        { from: 1, to: 2, color: { color: 'rgba(99, 102, 241, 0.3)' }, width: 2 },
        { from: 1, to: 3, color: { color: 'rgba(6, 182, 212, 0.3)' }, width: 2 },
        { from: 2, to: 4, color: { color: 'rgba(16, 185, 129, 0.3)' }, width: 1.5 },
        { from: 3, to: 5, color: { color: 'rgba(245, 158, 11, 0.3)' }, width: 1.5 },
        { from: 4, to: 6, color: { color: 'rgba(239, 68, 68, 0.3)' }, width: 1 },
        { from: 5, to: 7, color: { color: 'rgba(139, 92, 246, 0.3)' }, width: 1 }
    ]);
    
    const options = {
        nodes: {
            borderWidth: 2,
            borderWidthSelected: 3
        },
        edges: {
            smooth: {
                type: 'continuous',
                roundness: 0.5
            }
        },
        physics: {
            enabled: true,
            stabilization: {
                enabled: true,
                iterations: 100
            },
            barnesHut: {
                gravitationalConstant: -2000,
                centralGravity: 0.3,
                springLength: 150,
                springConstant: 0.04
            }
        },
        interaction: {
            hover: false,
            zoomView: false,
            dragView: false
        }
    };
    
    new vis.Network(container, { nodes, edges }, options);
}

// ==============
// DEMO TABS
// ==============
function switchDemoTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.demo-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Update demo panels
    document.querySelectorAll('.demo-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(`demo-${tabName}`).classList.add('active');
}

// ==============
// MODULE 1: TRANSACTION TRACE (REFINED)
// ==============
function executeTrace(event) {
    // CRITICAL: Prevent any default behavior
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    showLoading();
    
    setTimeout(() => {
        const source = document.getElementById('traceSource').value;
        const hops = parseInt(document.getElementById('traceHops').value);
        const amount = parseFloat(document.getElementById('traceAmount').value);
        
        // GRAPH THEORY SIMULATION
        // Simulate nodes based on hop depth and network density
        const baseNodes = Math.floor(hops * 3.5); // Average branching factor
        const variability = Math.floor(Math.random() * hops * 2);
        const totalNodes = baseNodes + variability;
        
        // Simulate paths (some paths merge, so fewer than nodes)
        const totalPaths = Math.max(1, Math.floor(totalNodes * 0.6));
        
        // Calculate initial risk score based on:
        // - Network complexity (more nodes = potentially higher risk)
        // - Amount threshold (lower threshold catches more suspicious flows)
        const complexityFactor = Math.min(totalNodes / 50, 1);
        const amountFactor = Math.max(0, 1 - (amount / 10000));
        const initialRisk = (complexityFactor * 0.6 + amountFactor * 0.4).toFixed(2);
        
        // Update metrics
        document.getElementById('traceNodes').textContent = totalNodes;
        document.getElementById('tracePaths').textContent = totalPaths;
        document.getElementById('traceRisk').textContent = initialRisk;
        
        // Store trace data for Risk Analysis module
        window.traceData = {
            nodes: totalNodes,
            paths: totalPaths,
            risk: parseFloat(initialRisk),
            hops: hops,
            amount: amount,
            source: source
        };
        
        // Create trace graph
        createTraceGraph(totalNodes, hops);
        hideLoading();
    }, 1500);
    
    return false; // Extra safety
}

function createTraceGraph(nodeCount, depth) {
    const container = document.getElementById('traceGraph');
    
    // Generate semantic nodes
    const nodeTypes = [
        { type: 'Bank', color: '#6366f1', label: 'Bank' },
        { type: 'PIX', color: '#06b6d4', label: 'PIX' },
        { type: 'Crypto', color: '#f59e0b', label: 'Crypto' },
        { type: 'Corp', color: '#10b981', label: 'Corp' }
    ];
    
    const nodes = new vis.DataSet([
        { id: 1, label: 'Source', level: 0, color: { background: '#6366f1' }, font: { color: '#fff' } }
    ]);
    
    const edges = new vis.DataSet([]);
    
    // Generate nodes hierarchically
    let nodeId = 2;
    const nodesPerLevel = Math.ceil(nodeCount / depth);
    
    for (let level = 1; level <= depth && nodeId <= nodeCount; level++) {
        const levelNodes = Math.min(nodesPerLevel, nodeCount - nodeId + 1);
        
        for (let i = 0; i < levelNodes; i++) {
            const nodeType = nodeTypes[Math.floor(Math.random() * nodeTypes.length)];
            const id = nodeId++;
            
            nodes.add({
                id: id,
                label: `${nodeType.label}_${id}`,
                level: level,
                color: { background: nodeType.color },
                font: { color: '#fff' }
            });
            
            // Connect to previous level
            const parentId = level === 1 ? 1 : Math.floor(Math.random() * (id - levelNodes)) + 1;
            const amount = Math.floor(Math.random() * 50) + 10;
            
            edges.add({
                from: parentId,
                to: id,
                arrows: 'to',
                label: `$${amount}K`,
                width: Math.max(2, amount / 20)
            });
        }
    }
    
    const options = {
        layout: {
            hierarchical: {
                direction: 'LR',
                levelSeparation: 200,
                nodeSpacing: 150
            }
        },
        physics: false,
        edges: {
            smooth: {
                type: 'cubicBezier',
                forceDirection: 'horizontal',
                roundness: 0.4
            }
        }
    };
    
    traceNetwork = new vis.Network(container, { nodes, edges }, options);
}

// ==============
// MODULE 2: RISK ANALYSIS (CRITICAL ENHANCEMENT)
// ==============
function executeRiskAnalysis(event) {
    // CRITICAL: Prevent any default behavior
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    showLoading();
    
    setTimeout(() => {
        calculateRiskScore();
        createRiskChart();
        hideLoading();
    }, 1500);
    
    return false;
}

function calculateRiskScore() {
    // Use data from Transaction Trace if available
    const traceData = window.traceData || {
        nodes: 25,
        paths: 12,
        risk: 0.55
    };
    
    const entity = document.getElementById('riskEntity').value;
    const period = document.getElementById('riskPeriod').value;
    
    // FACTOR 1: EXPOSURE RISK (45%)
    // Based on entity concentration and trace complexity
    const entityConcentration = traceData.nodes > 30 ? 0.8 : traceData.nodes / 40;
    const pathDiversity = Math.min(traceData.paths / 20, 1);
    const exposureRisk = (entityConcentration * 0.7 + (1 - pathDiversity) * 0.3);
    
    // FACTOR 2: STRUCTURAL RISK (35%)
    // Based on network position and centrality
    const networkCentrality = traceData.nodes > 20 ? 0.75 : 0.45;
    const hubRisk = Math.random() * 0.3 + 0.4; // Simulated hub detection
    const structuralRisk = (networkCentrality * 0.6 + hubRisk * 0.4);
    
    // FACTOR 3: VELOCITY RISK (20%)
    // Based on transaction frequency (simulated by period)
    const periodMultiplier = period === '7' ? 1.2 : period === '30' ? 1.0 : 0.8;
    const baseVelocity = traceData.risk || 0.5;
    const velocityRisk = Math.min(baseVelocity * periodMultiplier, 1);
    
    // FINAL RISK CALCULATION
    const finalRisk = (
        exposureRisk * 0.45 +
        structuralRisk * 0.35 +
        velocityRisk * 0.20
    );
    
    // Determine risk level and color
    let riskLevel, riskColor;
    if (finalRisk < 0.40) {
        riskLevel = currentLang === 'en' ? 'Low Risk' : 'Risco Baixo';
        riskColor = '#10b981'; // green
    } else if (finalRisk < 0.70) {
        riskLevel = currentLang === 'en' ? 'Medium Risk' : 'Risco Médio';
        riskColor = '#f59e0b'; // yellow/orange
    } else {
        riskLevel = currentLang === 'en' ? 'High Risk' : 'Risco Alto';
        riskColor = '#ef4444'; // red
    }
    
    // Update UI with smooth transitions
    const scoreEl = document.getElementById('riskScoreValue');
    const levelEl = document.getElementById('riskLevelValue');
    const exposureEl = document.getElementById('exposureValue');
    const structuralEl = document.getElementById('structuralValue');
    const velocityEl = document.getElementById('velocityValue');
    
    // Animate score
    animateValue(scoreEl, 0, finalRisk, 1000, 2);
    
    // Update level with color
    levelEl.textContent = riskLevel;
    levelEl.style.color = riskColor;
    levelEl.style.fontWeight = '700';
    
    // Update breakdown
    animateValue(exposureEl, 0, exposureRisk, 1000, 2);
    animateValue(structuralEl, 0, structuralRisk, 1000, 2);
    animateValue(velocityEl, 0, velocityRisk, 1000, 2);
    
    // Store for AI Reports
    window.riskData = {
        score: finalRisk,
        level: riskLevel,
        exposure: exposureRisk,
        structural: structuralRisk,
        velocity: velocityRisk,
        entity: entity,
        period: period
    };
}

function animateValue(element, start, end, duration, decimals = 0) {
    const range = end - start;
    const increment = range / (duration / 16); // ~60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = current.toFixed(decimals);
    }, 16);
}

function createRiskChart() {
    const ctx = document.getElementById('riskChart').getContext('2d');
    
    if (riskChart) riskChart.destroy();
    
    const riskData = window.riskData || {};
    
    riskChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: currentLang === 'en' 
                ? ['Volume', 'Frequency', 'Anomalies', 'Diversity', 'Temporal', 'Patterns']
                : ['Volume', 'Frequência', 'Anomalias', 'Diversidade', 'Temporal', 'Padrões'],
            datasets: [{
                label: currentLang === 'en' ? 'Risk Score' : 'Pontuação de Risco',
                data: [
                    (riskData.exposure || 0.5) * 100,
                    (riskData.velocity || 0.5) * 100,
                    Math.random() * 30 + 40,
                    (riskData.structural || 0.5) * 100,
                    Math.random() * 30 + 40,
                    (riskData.score || 0.5) * 100
                ],
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                borderColor: '#ef4444',
                borderWidth: 2,
                pointBackgroundColor: '#ef4444',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#ef4444'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        color: '#94a3b8'
                    },
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)'
                    },
                    pointLabels: {
                        color: '#e2e8f0',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// ==============
// MODULE 3: NETWORK GRAPH (VISUAL IMPACT)
// ==============
function initNetworkGraph() {
    const container = document.getElementById('networkGraph');
    if (!container) return;
    
    // Generate realistic network with centrality
    const nodes = new vis.DataSet([
        // High centrality hubs
        { id: 1, label: 'HUB_001', size: 35, color: { background: '#6366f1', border: '#818cf8' }, title: 'Centrality: 0.92<br>Risk: High<br>Connections: 15' },
        { id: 2, label: 'HUB_002', size: 30, color: { background: '#ef4444', border: '#f87171' }, title: 'Centrality: 0.85<br>Risk: High<br>Connections: 12' },
        
        // Banking entities
        { id: 3, label: 'Bank_A', size: 20, color: { background: '#06b6d4', border: '#22d3ee' }, title: 'Type: Banking<br>Centrality: 0.65' },
        { id: 4, label: 'Bank_B', size: 18, color: { background: '#06b6d4', border: '#22d3ee' }, title: 'Type: Banking<br>Centrality: 0.58' },
        { id: 5, label: 'Bank_C', size: 15, color: { background: '#06b6d4', border: '#22d3ee' }, title: 'Type: Banking<br>Centrality: 0.45' },
        
        // PIX entities
        { id: 6, label: 'PIX_101', size: 22, color: { background: '#10b981', border: '#34d399' }, title: 'Type: PIX<br>Centrality: 0.71' },
        { id: 7, label: 'PIX_102', size: 16, color: { background: '#10b981', border: '#34d399' }, title: 'Type: PIX<br>Centrality: 0.52' },
        
        // Crypto entities
        { id: 8, label: 'Crypto_X', size: 25, color: { background: '#f59e0b', border: '#fbbf24' }, title: 'Type: Crypto<br>Centrality: 0.78' },
        { id: 9, label: 'Crypto_Y', size: 14, color: { background: '#f59e0b', border: '#fbbf24' }, title: 'Type: Crypto<br>Centrality: 0.48' },
        
        // Corporate entities
        { id: 10, label: 'Corp_Alpha', size: 17, color: { background: '#8b5cf6', border: '#a78bfa' }, title: 'Type: Corporate<br>Centrality: 0.55' },
        { id: 11, label: 'Corp_Beta', size: 12, color: { background: '#8b5cf6', border: '#a78bfa' }, title: 'Type: Corporate<br>Centrality: 0.38' },
        { id: 12, label: 'Corp_Gamma', size: 13, color: { background: '#8b5cf6', border: '#a78bfa' }, title: 'Type: Corporate<br>Centrality: 0.41' }
    ]);
    
    // Edges with varying weights
    const edges = new vis.DataSet([
        { from: 1, to: 3, width: 4, color: { color: 'rgba(99, 102, 241, 0.6)' } },
        { from: 1, to: 6, width: 5, color: { color: 'rgba(99, 102, 241, 0.6)' } },
        { from: 1, to: 8, width: 3, color: { color: 'rgba(99, 102, 241, 0.6)' } },
        { from: 2, to: 4, width: 4, color: { color: 'rgba(239, 68, 68, 0.6)' } },
        { from: 2, to: 7, width: 3, color: { color: 'rgba(239, 68, 68, 0.6)' } },
        { from: 3, to: 6, width: 3, color: { color: 'rgba(6, 182, 212, 0.4)' } },
        { from: 3, to: 10, width: 2, color: { color: 'rgba(6, 182, 212, 0.4)' } },
        { from: 4, to: 7, width: 2, color: { color: 'rgba(6, 182, 212, 0.4)' } },
        { from: 4, to: 11, width: 2, color: { color: 'rgba(6, 182, 212, 0.4)' } },
        { from: 6, to: 8, width: 3, color: { color: 'rgba(16, 185, 129, 0.4)' } },
        { from: 7, to: 9, width: 2, color: { color: 'rgba(16, 185, 129, 0.4)' } },
        { from: 8, to: 10, width: 2, color: { color: 'rgba(245, 158, 11, 0.4)' } },
        { from: 9, to: 12, width: 2, color: { color: 'rgba(245, 158, 11, 0.4)' } },
        { from: 1, to: 2, width: 6, color: { color: 'rgba(239, 68, 68, 0.8)' } }
    ]);
    
    const options = {
        nodes: {
            borderWidth: 2,
            borderWidthSelected: 4,
            font: {
                color: '#ffffff',
                size: 12
            },
            shadow: true
        },
        edges: {
            smooth: {
                type: 'continuous'
            },
            shadow: true
        },
        physics: {
            enabled: true,
            barnesHut: {
                gravitationalConstant: -3000,
                centralGravity: 0.3,
                springLength: 200,
                springConstant: 0.05
            },
            stabilization: {
                iterations: 150
            }
        },
        interaction: {
            hover: true,
            tooltipDelay: 100,
            hideEdgesOnDrag: true
        }
    };
    
    networkGraph = new vis.Network(container, { nodes, edges }, options);
    
    // Highlight on click
    networkGraph.on('click', function(params) {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            networkGraph.selectNodes([nodeId]);
            
            // Highlight connected nodes
            const connectedNodes = networkGraph.getConnectedNodes(nodeId);
            networkGraph.selectNodes([nodeId, ...connectedNodes]);
        }
    });
}

// ==============
// MODULE 4: AI REPORTS (STORYTELLING)
// ==============
function generateAIReport(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    showLoading();
    
    setTimeout(() => {
        const reportContent = document.getElementById('reportContent');
        const traceData = window.traceData || { nodes: 25, paths: 12, risk: 0.55 };
        const riskData = window.riskData || { score: 0.65, level: 'Medium Risk' };
        
        const report = generateReportContent(traceData, riskData);
        
        // Progressive text reveal
        reportContent.innerHTML = '';
        let charIndex = 0;
        
        const revealInterval = setInterval(() => {
            if (charIndex < report.length) {
                reportContent.innerHTML = report.substring(0, charIndex + 1);
                charIndex += 10; // Faster reveal
            } else {
                clearInterval(revealInterval);
                hideLoading();
            }
        }, 10);
    }, 1000);
    
    return false;
}

function generateReportContent(traceData, riskData) {
    const lang = currentLang;
    
    if (lang === 'en') {
        return `
<div class="report-section">
    <div class="report-icon"><i class="fas fa-file-alt"></i></div>
    <h3>Executive Summary</h3>
    <p>Comprehensive financial flow analysis completed on ${new Date().toLocaleDateString()}. The transaction tracing module identified <strong>${traceData.nodes} entities</strong> across <strong>${traceData.paths} distinct pathways</strong>, revealing a network risk score of <strong>${(traceData.risk * 100).toFixed(0)}%</strong>.</p>
    <p>Risk assessment indicates an overall <strong>${riskData.level}</strong> classification based on multi-factor analysis including exposure concentration, structural positioning, and velocity patterns.</p>
</div>

<div class="report-section">
    <div class="report-icon alert"><i class="fas fa-exclamation-triangle"></i></div>
    <h3>Key Risk Findings</h3>
    <ul class="risk-findings">
        <li><strong>Network Centralization:</strong> Identified ${Math.floor(traceData.nodes * 0.15)} high-centrality nodes acting as financial hubs. These entities facilitate ${Math.floor(traceData.paths * 0.6)} of total transaction paths.</li>
        <li><strong>Cross-Domain Flows:</strong> Detected ${Math.floor(traceData.paths * 0.3)} inter-network transactions spanning Banking, PIX, and Blockchain domains, requiring enhanced KYC verification.</li>
        <li><strong>Exposure Risk:</strong> Concentration index shows ${(riskData.exposure * 100).toFixed(0)}% exposure to high-risk entities within ${traceData.paths} monitored pathways.</li>
        <li><strong>Structural Anomalies:</strong> ${(riskData.structural * 100).toFixed(0)}% structural risk identified through graph centrality analysis and money flow pattern detection.</li>
    </ul>
</div>

<div class="report-section">
    <div class="report-icon warning"><i class="fas fa-search"></i></div>
    <h3>Suspicious Patterns Detected</h3>
    <ul class="pattern-list">
        <li><strong>Layering Behavior:</strong> Multiple intermediary nodes detected in ${Math.floor(traceData.paths * 0.25)} transaction chains, consistent with layering techniques used in money laundering schemes.</li>
        <li><strong>Rapid Value Transfer:</strong> Velocity analysis shows ${(riskData.velocity * 100).toFixed(0)}% of transactions occurring within compressed timeframes, indicating potential structuring activity.</li>
        <li><strong>Smurfing Indicators:</strong> Pattern analysis suggests fragmented transaction behavior across ${Math.floor(traceData.nodes * 0.2)} entities to avoid reporting thresholds.</li>
        <li><strong>Geographic Anomalies:</strong> Cross-border flows identified with insufficient documentation for AML compliance verification.</li>
    </ul>
</div>

<div class="report-section">
    <div class="report-icon success"><i class="fas fa-check-circle"></i></div>
    <h3>Recommended Actions</h3>
    <ol class="action-list">
        <li><strong>Enhanced Due Diligence:</strong> Initiate EDD procedures for all entities classified as high-centrality nodes (${Math.floor(traceData.nodes * 0.15)} entities requiring review).</li>
        <li><strong>Transaction Monitoring:</strong> Implement real-time monitoring on ${traceData.paths} identified pathways with automated alert triggers for velocity anomalies.</li>
        <li><strong>Regulatory Reporting:</strong> File Suspicious Activity Reports (SARs) for entities demonstrating layering patterns and structural positioning consistent with ML/TF typologies.</li>
        <li><strong>Network Segmentation:</strong> Deploy graph-based isolation protocols to contain potential risk propagation across ${traceData.nodes} connected entities.</li>
        <li><strong>Compliance Review:</strong> Conduct quarterly reviews of KYC documentation for all cross-domain transaction participants to ensure AML regulation adherence.</li>
    </ol>
</div>

<div class="report-footer">
    <p><em>This report was generated using AI-powered graph analytics and multi-factor risk assessment algorithms. All findings should be reviewed by qualified compliance professionals before regulatory action.</em></p>
    <p><strong>Classification:</strong> Confidential | <strong>Generated:</strong> ${new Date().toLocaleString()} | <strong>System:</strong> BridgeTrace AI v2.0</p>
</div>
        `;
    } else {
        return `
<div class="report-section">
    <div class="report-icon"><i class="fas fa-file-alt"></i></div>
    <h3>Resumo Executivo</h3>
    <p>Análise abrangente de fluxo financeiro concluída em ${new Date().toLocaleDateString('pt-BR')}. O módulo de rastreamento de transações identificou <strong>${traceData.nodes} entidades</strong> através de <strong>${traceData.paths} caminhos distintos</strong>, revelando uma pontuação de risco de rede de <strong>${(traceData.risk * 100).toFixed(0)}%</strong>.</p>
    <p>A avaliação de risco indica uma classificação geral de <strong>${riskData.level}</strong> baseada em análise multifatorial incluindo concentração de exposição, posicionamento estrutural e padrões de velocidade.</p>
</div>

<div class="report-section">
    <div class="report-icon alert"><i class="fas fa-exclamation-triangle"></i></div>
    <h3>Principais Descobertas de Risco</h3>
    <ul class="risk-findings">
        <li><strong>Centralização de Rede:</strong> Identificados ${Math.floor(traceData.nodes * 0.15)} nós de alta centralidade atuando como hubs financeiros. Essas entidades facilitam ${Math.floor(traceData.paths * 0.6)} dos caminhos totais de transação.</li>
        <li><strong>Fluxos Cross-Domain:</strong> Detectadas ${Math.floor(traceData.paths * 0.3)} transações inter-rede abrangendo domínios Banking, PIX e Blockchain, requerendo verificação KYC aprimorada.</li>
        <li><strong>Risco de Exposição:</strong> Índice de concentração mostra ${(riskData.exposure * 100).toFixed(0)}% de exposição a entidades de alto risco dentro de ${traceData.paths} caminhos monitorados.</li>
        <li><strong>Anomalias Estruturais:</strong> ${(riskData.structural * 100).toFixed(0)}% de risco estrutural identificado através de análise de centralidade de grafo e detecção de padrões de fluxo monetário.</li>
    </ul>
</div>

<div class="report-section">
    <div class="report-icon warning"><i class="fas fa-search"></i></div>
    <h3>Padrões Suspeitos Detectados</h3>
    <ul class="pattern-list">
        <li><strong>Comportamento de Layering:</strong> Múltiplos nós intermediários detectados em ${Math.floor(traceData.paths * 0.25)} cadeias de transação, consistente com técnicas de layering usadas em esquemas de lavagem de dinheiro.</li>
        <li><strong>Transferência Rápida de Valor:</strong> Análise de velocidade mostra ${(riskData.velocity * 100).toFixed(0)}% das transações ocorrendo em intervalos de tempo comprimidos, indicando potencial atividade de estruturação.</li>
        <li><strong>Indicadores de Smurfing:</strong> Análise de padrões sugere comportamento de transação fragmentada através de ${Math.floor(traceData.nodes * 0.2)} entidades para evitar limites de reporte.</li>
        <li><strong>Anomalias Geográficas:</strong> Fluxos transfronteiriços identificados com documentação insuficiente para verificação de conformidade AML.</li>
    </ul>
</div>

<div class="report-section">
    <div class="report-icon success"><i class="fas fa-check-circle"></i></div>
    <h3>Ações Recomendadas</h3>
    <ol class="action-list">
        <li><strong>Due Diligence Aprimorado:</strong> Iniciar procedimentos EDD para todas entidades classificadas como nós de alta centralidade (${Math.floor(traceData.nodes * 0.15)} entidades requerendo revisão).</li>
        <li><strong>Monitoramento de Transações:</strong> Implementar monitoramento em tempo real nos ${traceData.paths} caminhos identificados com triggers de alerta automatizados para anomalias de velocidade.</li>
        <li><strong>Reporte Regulatório:</strong> Arquivar Relatórios de Atividade Suspeita (SARs) para entidades demonstrando padrões de layering e posicionamento estrutural consistente com tipologias ML/TF.</li>
        <li><strong>Segmentação de Rede:</strong> Implementar protocolos de isolamento baseados em grafo para conter potencial propagação de risco através de ${traceData.nodes} entidades conectadas.</li>
        <li><strong>Revisão de Conformidade:</strong> Conduzir revisões trimestrais de documentação KYC para todos participantes de transações cross-domain para garantir aderência à regulação AML.</li>
    </ol>
</div>

<div class="report-footer">
    <p><em>Este relatório foi gerado usando análise de grafos alimentada por IA e algoritmos de avaliação de risco multifatorial. Todas descobertas devem ser revisadas por profissionais de conformidade qualificados antes de ação regulatória.</em></p>
    <p><strong>Classificação:</strong> Confidencial | <strong>Gerado:</strong> ${new Date().toLocaleString('pt-BR')} | <strong>Sistema:</strong> BridgeTrace AI v2.0</p>
</div>
        `;
    }
}

// ==============
// UTILITIES
// ==============
function showLoading() {
    document.getElementById('loadingOverlay').classList.add('active');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.remove('active');
}

function toggleMobileMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

function resetGraphView() {
    if (networkGraph) networkGraph.fit();
}

function togglePhysics() {
    if (networkGraph) {
        const physics = networkGraph.physics.physicsEnabled;
        networkGraph.setOptions({ physics: { enabled: !physics } });
    }
}

// ==============
// INITIALIZATION
// ==============
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initAnimations();
    initHeroGraph();
    initNetworkGraph();
    
    // Initialize slider value display
    const traceHopsSlider = document.getElementById('traceHops');
    if (traceHopsSlider) {
        const updateSliderValue = () => {
            const value = traceHopsSlider.value;
            const valueDisplay = traceHopsSlider.nextElementSibling;
            if (valueDisplay) valueDisplay.textContent = value;
        };
        traceHopsSlider.addEventListener('input', updateSliderValue);
        updateSliderValue();
    }
    
    // Attach event listeners to buttons (prevent scroll issues)
    const executeTraceBtn = document.getElementById('executeTraceBtn');
    if (executeTraceBtn) {
        executeTraceBtn.addEventListener('click', executeTrace);
    }
    
    const executeRiskBtn = document.getElementById('executeRiskBtn');
    if (executeRiskBtn) {
        executeRiskBtn.addEventListener('click', executeRiskAnalysis);
    }
    
    const generateReportBtn = document.getElementById('generateReportBtn');
    if (generateReportBtn) {
        generateReportBtn.addEventListener('click', generateAIReport);
    }
    
    const resetGraphBtn = document.getElementById('resetGraphBtn');
    if (resetGraphBtn) {
        resetGraphBtn.addEventListener('click', (e) => {
            e.preventDefault();
            resetGraphView();
        });
    }
    
    const togglePhysicsBtn = document.getElementById('togglePhysicsBtn');
    if (togglePhysicsBtn) {
        togglePhysicsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            togglePhysics();
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Prevent all forms from submitting
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            return false;
        });
    });
});
