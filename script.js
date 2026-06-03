// Alternancia de Pestañas Principales (Entregables)
function switchTab(event, tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.add('hidden'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active-tab-btn');
        btn.classList.add('text-slate-400', 'hover:text-white', 'hover:bg-slate-800/40');
        btn.style.borderColor = 'transparent';
    });

    const selectedContent = document.getElementById(tabId);
    if(selectedContent) selectedContent.classList.remove('hidden');

    event.currentTarget.classList.add('active-tab-btn');
    event.currentTarget.classList.remove('text-slate-400', 'hover:text-white', 'hover:bg-slate-800/40');
    event.currentTarget.style.borderColor = '#f59e0b';
    
    // Auto-activar primer elemento de sub-pestañas si se entra a SMART
    if(tabId === 'metas-smart') {
        const firstSmartBtn = document.querySelector('.smart-nav-btn');
        if(firstSmartBtn && !firstSmartBtn.classList.contains('smart-btn-active')) {
            firstSmartBtn.click();
        }
    }
}

// Despliegue del Menú Desplegable ATS
function toggleAtsMenu() {
    const submenu = document.getElementById('ats-submenu');
    const chevron = document.getElementById('ats-chevron');
    
    if (submenu.classList.contains('hidden')) {
        submenu.classList.remove('hidden');
        submenu.classList.add('flex');
        chevron.classList.add('rotate-180');
    } else {
        submenu.classList.add('hidden');
        submenu.classList.remove('flex');
        chevron.classList.remove('rotate-180');
    }
}

// Visualización de Expedientes ATS Planos
function showAtsCV(personId, buttonElement) {
    const viewport = document.getElementById('cv-viewport');
    viewport.classList.remove('hidden');

    const allCvs = document.querySelectorAll('.cv-content');
    allCvs.forEach(cv => cv.classList.add('hidden'));

    const allButtons = document.querySelectorAll('.ats-tab-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('ats-tab-active');
        btn.classList.add('bg-slate-900', 'text-slate-400');
    });

    const selectedCv = document.getElementById(`cv-${personId}`);
    if (selectedCv) {
        selectedCv.classList.remove('hidden');
        selectedCv.classList.add('animate-fade-in');
    }

    buttonElement.classList.add('ats-tab-active');
    buttonElement.classList.remove('bg-slate-900', 'text-slate-400');
}

// Controlador de Pestañas Internas para las Metas SMART
function showSmartContent(paneId, buttonElement) {
    const panes = document.querySelectorAll('.smart-pane');
    panes.forEach(pane => pane.classList.add('hidden'));

    const buttons = document.querySelectorAll('.smart-nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('smart-btn-active');
        btn.classList.add('bg-slate-900', 'text-slate-400');
    });

    const targetPane = document.getElementById(paneId);
    if (targetPane) targetPane.classList.remove('hidden');

    buttonElement.classList.add('smart-btn-active');
    buttonElement.classList.remove('bg-slate-900', 'text-slate-400');
}

// Simulación de Consola de Escaneo ATS
function runAtsSimulation() {
    const terminal = document.getElementById('terminal-content');
    terminal.innerHTML = '<p class="text-slate-500 animate-pulse">&gt; Escaneando estructuras sintácticas de texto plano...</p>';
    
    setTimeout(() => {
        terminal.innerHTML += '<p class="text-emerald-400"><i class="fa-solid fa-check mr-1"></i> [VALID] Sin trazos de gráficos vectoriales ni tablas complejas detectadas.</p>';
        terminal.innerHTML += '<p class="text-sky-400"><i class="fa-solid fa-circle-nodes mr-1"></i> COINCIDENCIAS: Java, Spring Boot, Angular, Docker, Networks detectados con éxito.</p>';
    }, 1200);
}

// Simulador de Audio del Elevator Pitch
let playing = false;
function toggleAudioWave() {
    const playIcon = document.getElementById('play-icon');
    const waveBars = document.querySelectorAll('#waveform-container div');

    if (!playing) {
        playing = true;
        playIcon.className = 'fa-solid fa-pause';
        waveBars.forEach((bar) => bar.classList.add('wave-bar-active'));
    } else {
        playing = false;
        playIcon.className = 'fa-solid fa-play ml-1';
        waveBars.forEach((bar) => bar.classList.remove('wave-bar-active'));
    }
}