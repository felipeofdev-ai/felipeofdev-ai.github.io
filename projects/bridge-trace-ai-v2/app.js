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
                analyze: "Analyze Risk"
            },
            ai: {
                generate: "Generate Compliance Report"
            }
        },
        arch: {
            label: "System Design",
            title: "Enterprise Architecture",
            subtitle: "Clean architecture with clear layer separation following industry best practices",
            layer1: "Presentation Layer",
            layer2: "Application Layer",
            layer3: "Domain Layer",
            layer4: "Infrastructure Layer"
        },
        footer: {
            tagline: "Ultimate Enterprise Financial Intelligence Platform",
            resources: "Resources",
            docs: "Documentation",
            api: "API Reference",
            guide: "Deployment Guide",
            product: "Product",
            features: "Features",
            demo: "Live Demo",
            arch: "Architecture",
            rights: "All rights reserved",
            disclaimer: "Educational project using 100% synthetic data"
        },
        loading: "Processing..."
    },
    pt: {
        selectLanguage: "Selecione Seu Idioma",
        nav: {
            features: "Funcionalidades",
            demo: "Demonstração",
            architecture: "Arquitetura",
            github: "GitHub"
        },
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
        features: {
            label: "Capacidades",
            title: "Funcionalidades Ultimate Enterprise",
            subtitle: "Plataforma pronta para produção construída para escalabilidade, segurança e observabilidade",
            f1: {
                title: "Rastreamento Multi-Hop",
                desc: "Pathfinding avançado através de cadeias complexas de transações com profundidade configurável",
                l1: "Profundidade 1-10 hops",
                l2: "Filtragem por valor",
                l3: "Pontuação de risco"
            },
            f2: {
                title: "Análise de Risco com IA",
                desc: "Avaliação comportamental com ML e detecção de anomalias em tempo real",
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
                desc: "Autenticação JWT, criptografia e logging completo de auditoria",
                l1: "Tokens JWT",
                l2: "Hashing Bcrypt",
                l3: "Logs de auditoria"
            },
            f5: {
                title: "Observabilidade Completa",
                desc: "Métricas Prometheus, dashboards Grafana, logging estruturado",
                l1: "Métricas em tempo real",
                l2: "Dashboards customizados",
                l3: "Rastreamento distribuído"
            },
            f6: {
                title: "Alta Performance",
                desc: "Python assíncrono, cache Redis, queries otimizadas",
                l1: "Async/await",
                l2: "Cache Redis",
                l3: "Otimização de queries"
            }
        },
        demo: {
            label: "Plataforma ao Vivo",
            title: "Demonstrações Interativas",
            subtitle: "Experimente todas as funcionalidades em tempo real com dados sintéticos de produção",
            tab1: "Rastreamento de Transações",
            tab2: "Análise de Risco",
            tab3: "Grafo de Rede",
            tab4: "Relatórios IA",
            trace: {
                title: "Configurar Rastreamento",
                source: "Entidade Origem",
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
                analyze: "Analisar Risco"
            },
            ai: {
                generate: "Gerar Relatório de Compliance"
            }
        },
        arch: {
            label: "Design do Sistema",
            title: "Arquitetura Enterprise",
            subtitle: "Arquitetura limpa com separação clara de camadas seguindo melhores práticas da indústria",
            layer1: "Camada de Apresentação",
            layer2: "Camada de Aplicação",
            layer3: "Camada de Domínio",
            layer4: "Camada de Infraestrutura"
        },
        footer: {
            tagline: "Plataforma Ultimate Enterprise de Inteligência Financeira",
            resources: "Recursos",
            docs: "Documentação",
            api: "Referência da API",
            guide: "Guia de Implantação",
            product: "Produto",
            features: "Funcionalidades",
            demo: "Demo ao Vivo",
            arch: "Arquitetura",
            rights: "Todos os direitos reservados",
            disclaimer: "Projeto educacional usando 100% dados sintéticos"
        },
        loading: "Processando..."
    }
};

let currentLang = 'en';

// Initialize language
function initLanguage() {
    const saved = localStorage.getItem('bridgetrace-lang');
    if (saved) {
        currentLang = saved;
        applyLanguage(currentLang);
        document.getElementById('langModal').classList.remove('active');
    } else {
        document.getElementById('langModal').classList.add('active');
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('bridgetrace-lang', lang);
    applyLanguage(lang);
    document.getElementById('langModal').classList.remove('active');
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'pt' : 'en';
    setLanguage(newLang);
}

function applyLanguage(lang) {
    document.getElementById('currentLang').textContent = lang.toUpperCase();
    
    // Apply translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedTranslation(key, lang);
        if (value) el.textContent = value;
    });
    
    // Apply option translations
    document.querySelectorAll('[data-i18n-option]').forEach(el => {
        const key = el.getAttribute('data-i18n-option');
        const value = getNestedTranslation(key, lang);
        if (value) el.textContent = value;
    });
}

function getNestedTranslation(key, lang) {
    return key.split('.').reduce((obj, k) => obj?.[k], translations[lang]);
}

// ==============
// ANIMATIONS
// ==============
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate elements on scroll
    document.querySelectorAll('[data-animate]').forEach(el => {
        const delay = el.getAttribute('data-delay') || 0;
        
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleClass: 'animated'
            },
            delay: delay / 1000
        });
    });
    
    // Navbar scroll effect
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {className: 'scrolled', targets: '.navbar'}
    });
    
    // Counter animation for stats
    animateCounters();
}

function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseFloat(el.getAttribute('data-count'));
        
        ScrollTrigger.create({
            trigger: el,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(el, {
                    textContent: target,
                    duration: 2,
                    ease: 'power1.out',
                    snap: { textContent: 0.01 },
                    onUpdate: function() {
                        el.textContent = parseFloat(this.targets()[0].textContent).toFixed(target < 10 ? 2 : 0);
                    }
                });
            },
            once: true
        });
    });
}

// ==============
// HERO GRAPH
// ==============
let heroNetwork;

function initHeroGraph() {
    const container = document.getElementById('heroGraph');
    
    const nodes = new vis.DataSet([
        { id: 1, label: 'Bank\n$250K', color: { background: '#6366f1', border: '#4f46e5' }, size: 30, font: { color: '#fff' } },
        { id: 2, label: 'PIX\n$180K', color: { background: '#06b6d4', border: '#0891b2' }, size: 28, font: { color: '#fff' } },
        { id: 3, label: 'Corp', color: { background: '#10b981', border: '#059669' }, size: 26, font: { color: '#fff' } },
        { id: 4, label: 'Crypto', color: { background: '#f59e0b', border: '#d97706' }, size: 25, font: { color: '#fff' } },
        { id: 5, label: 'Bank', color: { background: '#8b5cf6', border: '#7c3aed' }, size: 24, font: { color: '#fff' } },
        { id: 6, label: 'Account', color: { background: '#ef4444', border: '#dc2626' }, size: 22, font: { color: '#fff' } }
    ]);
    
    const edges = new vis.DataSet([
        { from: 1, to: 2, arrows: 'to', label: '$45K', color: '#6366f1', width: 2 },
        { from: 1, to: 3, arrows: 'to', label: '$85K', color: '#6366f1', width: 3 },
        { from: 2, to: 4, arrows: 'to', label: '$32K', color: '#06b6d4', width: 2 },
        { from: 3, to: 5, arrows: 'to', label: '$52K', color: '#10b981', width: 2 },
        { from: 4, to: 6, arrows: 'to', label: '$18K', color: '#f59e0b', width: 2 },
        { from: 5, to: 6, arrows: 'to', label: '$28K', color: '#8b5cf6', width: 2 }
    ]);
    
    const options = {
        nodes: {
            shape: 'circle',
            borderWidth: 3,
            shadow: true,
            font: { size: 12 }
        },
        edges: {
            smooth: { type: 'cubicBezier' },
            shadow: true,
            font: { size: 10, color: '#94a3b8' }
        },
        physics: {
            barnesHut: {
                gravitationalConstant: -8000,
                springConstant: 0.04,
                springLength: 150
            }
        }
    };
    
    heroNetwork = new vis.Network(container, { nodes, edges }, options);
}

// ==============
// DEMO FUNCTIONS
// ==============
let traceNetwork;
let riskChart;
let networkGraph;

function switchDemoTab(tab) {
    // Update tabs
    document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.demo-panel').forEach(p => p.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(`demo-${tab}`).classList.add('active');
    
    // Initialize the selected demo
    if (tab === 'graph' && !networkGraph) {
        initNetworkGraph();
    }
}

function executeTrace() {
    // Prevent any default behaviors
    event?.preventDefault();
    event?.stopPropagation();
    
    showLoading();
    
    setTimeout(() => {
        const source = document.getElementById('traceSource').value;
        const hops = document.getElementById('traceHops').value;
        const amount = document.getElementById('traceAmount').value;
        
        // Update metrics with smooth animation
        const nodesValue = Math.floor(Math.random() * 30) + 10;
        const pathsValue = Math.floor(Math.random() * 15) + 5;
        const riskValue = (Math.random() * 0.7 + 0.3).toFixed(2);
        
        animateValue('traceNodes', 0, nodesValue, 800);
        animateValue('tracePaths', 0, pathsValue, 800);
        animateValue('traceRisk', 0, parseFloat(riskValue), 800, true);
        
        // Create trace graph
        createTraceGraph();
        hideLoading();
    }, 1500);
}

// Helper function to animate counter values
function animateValue(id, start, end, duration, isDecimal = false) {
    const element = document.getElementById(id);
    if (!element) return;
    
    const range = end - start;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = start + (range * progress);
        element.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function createTraceGraph() {
    const container = document.getElementById('traceGraph');
    if (!container) {
        console.error('traceGraph container not found');
        return;
    }
    
    // Force container to have proper dimensions
    container.style.minHeight = '500px';
    container.style.width = '100%';
    container.style.position = 'relative';
    
    // Destroy previous network if exists
    if (traceNetwork) {
        try {
            traceNetwork.destroy();
        } catch(e) {
            console.warn('Error destroying previous network:', e);
        }
        traceNetwork = null;
    }
    
    // Clear container
    container.innerHTML = '';
    
    // Wait for DOM to update
    setTimeout(() => {
        const nodes = new vis.DataSet([
            { id: 1, label: 'Source\nBank', level: 0, size: 35, color: { background: '#6366f1', border: '#4f46e5' }, font: { color: '#fff', size: 14 } },
            { id: 2, label: 'PIX\nTransfer', level: 1, size: 30, color: { background: '#06b6d4', border: '#0891b2' }, font: { color: '#fff', size: 13 } },
            { id: 3, label: 'Bank\nAccount', level: 1, size: 28, color: { background: '#10b981', border: '#059669' }, font: { color: '#fff', size: 13 } },
            { id: 4, label: 'Crypto\nWallet', level: 2, size: 32, color: { background: '#f59e0b', border: '#d97706' }, font: { color: '#fff', size: 13 } },
            { id: 5, label: 'Corporate\nEntity', level: 2, size: 30, color: { background: '#ef4444', border: '#dc2626' }, font: { color: '#fff', size: 13 } },
            { id: 6, label: 'Destination\nBank', level: 3, size: 33, color: { background: '#8b5cf6', border: '#7c3aed' }, font: { color: '#fff', size: 14 } }
        ]);
        
        const edges = new vis.DataSet([
            { from: 1, to: 2, arrows: { to: { enabled: true, scaleFactor: 1.2 } }, label: '$25,000', width: 3, color: { color: '#6366f1', highlight: '#818cf8' }, smooth: { type: 'cubicBezier' } },
            { from: 1, to: 3, arrows: { to: { enabled: true, scaleFactor: 1.2 } }, label: '$18,000', width: 2.5, color: { color: '#10b981', highlight: '#34d399' }, smooth: { type: 'cubicBezier' } },
            { from: 2, to: 4, arrows: { to: { enabled: true, scaleFactor: 1.2 } }, label: '$15,000', width: 2.5, color: { color: '#06b6d4', highlight: '#22d3ee' }, smooth: { type: 'cubicBezier' } },
            { from: 3, to: 5, arrows: { to: { enabled: true, scaleFactor: 1.2 } }, label: '$12,000', width: 2, color: { color: '#f59e0b', highlight: '#fbbf24' }, smooth: { type: 'cubicBezier' } },
            { from: 4, to: 6, arrows: { to: { enabled: true, scaleFactor: 1.2 } }, label: '$10,000', width: 2, color: { color: '#ef4444', highlight: '#f87171' }, smooth: { type: 'cubicBezier' } }
        ]);
        
        const options = {
            layout: {
                hierarchical: {
                    direction: 'LR',
                    levelSeparation: 250,
                    nodeSpacing: 150,
                    treeSpacing: 200,
                    sortMethod: 'directed'
                }
            },
            physics: {
                enabled: false
            },
            interaction: {
                dragNodes: true,
                dragView: true,
                zoomView: true,
                hover: true,
                tooltipDelay: 200
            },
            nodes: {
                shape: 'dot',
                scaling: {
                    min: 20,
                    max: 40
                },
                font: {
                    face: 'Inter, sans-serif',
                    align: 'center',
                    multi: true
                },
                borderWidth: 2,
                shadow: {
                    enabled: true,
                    color: 'rgba(0,0,0,0.3)',
                    size: 10,
                    x: 2,
                    y: 2
                }
            },
            edges: {
                font: {
                    size: 12,
                    color: '#94a3b8',
                    strokeWidth: 0,
                    face: 'Inter, sans-serif'
                },
                arrowStrikethrough: false,
                chosen: true
            },
            height: '500px',
            width: '100%'
        };
        
        try {
            traceNetwork = new vis.Network(container, { nodes, edges }, options);
            
            // Fit network after initialization
            traceNetwork.once('stabilizationIterationsDone', function() {
                traceNetwork.fit({
                    animation: {
                        duration: 1000,
                        easingFunction: 'easeInOutQuad'
                    }
                });
            });
            
            // Add click handler for nodes
            traceNetwork.on('click', function(params) {
                if (params.nodes.length > 0) {
                    const nodeId = params.nodes[0];
                    console.log('Node clicked:', nodeId);
                }
            });
            
        } catch(e) {
            console.error('Error creating network:', e);
            container.innerHTML = '<div style="color: #ef4444; padding: 2rem; text-align: center;">Error rendering graph. Please try again.</div>';
        }
    }, 100);
}

function executeRiskAnalysis() {
    showLoading();
    
    setTimeout(() => {
        createRiskChart();
        hideLoading();
    }, 1500);
}

function createRiskChart() {
    const ctx = document.getElementById('riskChart').getContext('2d');
    
    if (riskChart) riskChart.destroy();
    
    riskChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Volume', 'Frequency', 'Anomalies', 'Diversity', 'Temporal', 'Patterns'],
            datasets: [{
                label: 'Risk Score',
                data: [72, 68, 55, 82, 61, 75],
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                borderColor: '#6366f1',
                borderWidth: 3,
                pointBackgroundColor: '#6366f1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { color: '#94a3b8' },
                    grid: { color: '#334155' },
                    pointLabels: { color: '#f1f5f9', font: { size: 14 } }
                }
            },
            plugins: {
                legend: {
                    labels: { color: '#f1f5f9', font: { size: 14 } }
                }
            }
        }
    });
}

function initNetworkGraph() {
    const container = document.getElementById('networkGraph');
    
    const nodes = new vis.DataSet([
        { id: 1, label: 'Central\nBank', size: 35, color: { background: '#6366f1' }, font: { color: '#fff' } },
        { id: 2, label: 'PIX_A', size: 28, color: { background: '#06b6d4' }, font: { color: '#fff' } },
        { id: 3, label: 'PIX_B', size: 25, color: { background: '#06b6d4' }, font: { color: '#fff' } },
        { id: 4, label: 'Corp_X', size: 30, color: { background: '#10b981' }, font: { color: '#fff' } },
        { id: 5, label: 'Crypto_1', size: 26, color: { background: '#f59e0b' }, font: { color: '#fff' } },
        { id: 6, label: 'Bank_A', size: 28, color: { background: '#8b5cf6' }, font: { color: '#fff' } },
        { id: 7, label: 'Bank_B', size: 24, color: { background: '#8b5cf6' }, font: { color: '#fff' } },
        { id: 8, label: 'User', size: 22, color: { background: '#ef4444' }, font: { color: '#fff' } }
    ]);
    
    const edges = new vis.DataSet([
        { from: 1, to: 2, label: '$45K', width: 3 },
        { from: 1, to: 3, label: '$32K', width: 2 },
        { from: 2, to: 4, label: '$28K', width: 2 },
        { from: 3, to: 5, label: '$35K', width: 3 },
        { from: 4, to: 6, label: '$22K', width: 2 },
        { from: 5, to: 7, label: '$18K', width: 2 },
        { from: 6, to: 8, label: '$15K', width: 2 },
        { from: 1, to: 6, label: '$50K', width: 3 }
    ]);
    
    const options = {
        physics: {
            barnesHut: {
                gravitationalConstant: -10000,
                springLength: 200
            }
        }
    };
    
    networkGraph = new vis.Network(container, { nodes, edges }, options);
}

function generateAIReport() {
    showLoading();
    
    setTimeout(() => {
        const output = document.getElementById('aiOutput');
        const timestamp = new Date().toLocaleString(currentLang === 'pt' ? 'pt-BR' : 'en-US');
        
        const reports = {
            en: `
                <h3 style="color: #6366f1; margin-bottom: 1.5rem;">
                    <i class="fas fa-file-contract"></i> Compliance Report - Transaction Analysis
                </h3>
                <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid #6366f1; padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 0.5rem;">
                    <h4 style="margin-bottom: 0.75rem;"><i class="fas fa-info-circle"></i> Executive Summary</h4>
                    <p style="color: #9ca3af; line-height: 1.8;">
                        Analysis identified a transaction chain originating from <strong>bank_001</strong> with propagation 
                        through <strong>7 distinct entities</strong>. Total volume: <strong style="color: #10b981;">$487,250.00</strong> 
                        over a 14-day period.
                    </p>
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="margin-bottom: 1rem;"><i class="fas fa-exclamation-triangle" style="color: #f59e0b;"></i> Risk Factors</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 0.875rem; background: rgba(245, 158, 11, 0.1); border-left: 3px solid #f59e0b; margin-bottom: 0.75rem; border-radius: 0.375rem;">
                            <strong>High Volume:</strong> Transaction of $185,000 exceeds 380% of historical average
                        </li>
                        <li style="padding: 0.875rem; background: rgba(239, 68, 68, 0.1); border-left: 3px solid #ef4444; margin-bottom: 0.75rem; border-radius: 0.375rem;">
                            <strong>Atypical Timing:</strong> 5 transactions during unusual hours (02:00-04:00 UTC)
                        </li>
                    </ul>
                </div>
                <div style="background: rgba(99, 102, 241, 0.05); padding: 1.5rem; border-radius: 0.5rem;">
                    <p style="color: #9ca3af; font-size: 0.875rem;">
                        Report generated: ${timestamp}<br>
                        Classification: <strong style="color: #f59e0b;">MEDIUM-HIGH RISK</strong>
                    </p>
                </div>
            `,
            pt: `
                <h3 style="color: #6366f1; margin-bottom: 1.5rem;">
                    <i class="fas fa-file-contract"></i> Relatório de Compliance - Análise de Transação
                </h3>
                <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid #6366f1; padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 0.5rem;">
                    <h4 style="margin-bottom: 0.75rem;"><i class="fas fa-info-circle"></i> Resumo Executivo</h4>
                    <p style="color: #9ca3af; line-height: 1.8;">
                        Análise identificou uma cadeia de transações originada em <strong>bank_001</strong> com propagação 
                        através de <strong>7 entidades distintas</strong>. Volume total: <strong style="color: #10b981;">R$ 487.250,00</strong> 
                        em um período de 14 dias.
                    </p>
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="margin-bottom: 1rem;"><i class="fas fa-exclamation-triangle" style="color: #f59e0b;"></i> Fatores de Risco</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 0.875rem; background: rgba(245, 158, 11, 0.1); border-left: 3px solid #f59e0b; margin-bottom: 0.75rem; border-radius: 0.375rem;">
                            <strong>Alto Volume:</strong> Transação de R$ 185.000 excede 380% da média histórica
                        </li>
                        <li style="padding: 0.875rem; background: rgba(239, 68, 68, 0.1); border-left: 3px solid #ef4444; margin-bottom: 0.75rem; border-radius: 0.375rem;">
                            <strong>Timing Atípico:</strong> 5 transações em horários incomuns (02:00-04:00 UTC)
                        </li>
                    </ul>
                </div>
                <div style="background: rgba(99, 102, 241, 0.05); padding: 1.5rem; border-radius: 0.5rem;">
                    <p style="color: #9ca3af; font-size: 0.875rem;">
                        Relatório gerado em: ${timestamp}<br>
                        Classificação: <strong style="color: #f59e0b;">RISCO MÉDIO-ALTO</strong>
                    </p>
                </div>
            `
        };
        
        output.innerHTML = reports[currentLang];
        hideLoading();
    }, 2000);
}

// ==============
// SLIDER UPDATE
// ==============
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('traceHops');
    if (slider) {
        slider.addEventListener('input', (e) => {
            e.target.nextElementSibling.textContent = e.target.value;
        });
    }
});

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
    
    // Execute Trace Button - ENHANCED ANTI-SCROLL
    const btnExecuteTrace = document.getElementById('btnExecuteTrace');
    if (btnExecuteTrace) {
        // Remove any existing listeners
        btnExecuteTrace.onclick = null;
        
        // Add new listener with comprehensive event handling
        btnExecuteTrace.addEventListener('click', function(event) {
            // Prevent all default behaviors
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            
            // Execute trace
            executeTrace();
            
            // Return false to be extra sure
            return false;
        }, { capture: true, once: false });
        
        // Also prevent form submission if button is in a form
        const parentForm = btnExecuteTrace.closest('form');
        if (parentForm) {
            parentForm.addEventListener('submit', function(event) {
                event.preventDefault();
                return false;
            });
        }
    }
    
    // Smooth scroll for navigation links (excluding trace button)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Skip if this is somehow attached to our trace button
        if (anchor.id === 'btnExecuteTrace') return;
        
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
