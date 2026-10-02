/**
 * =============================================================================
 * OFICINA REMOTA OFICIAL — MOTOR DE DATOS DECLARATIVO
 * script-vacantes.js  |  Versión 4.3 Producción
 * =============================================================================
 * ARQUITECTURA: Todos los datos de la plataforma viven en arrays de objetos
 * planos. El DOM se construye mediante bucles. Agregar, quitar o editar una
 * app, vacante o sección requiere únicamente modificar la matriz de datos;
 * las funciones de renderizado NO necesitan parchearse.
 *
 * ENCODING: Los caracteres especiales del español están escapados en
 * Unicode (\\uXXXX) para máxima resiliencia en cualquier servidor de hosting.
 * =============================================================================
 */

'use strict';

/* ─────────────────────────────────────────────────────────────────────────────
   1. MATRIZ DE DATOS — APPS DE STREAMING (TAB: STREAMERS)
   Cada objeto define una tarjeta completa. Para agregar una app, añade un
   objeto nuevo aquí y el renderizador se encargará del resto.
───────────────────────────────────────────────────────────────────────────── */
const STREAMING_APPS = [
  {
    id: 'cafe',
    nombre: 'Caf\u00e9 App',
    icono: 'FOTOS DE APPS/CAFE APP.png',
    badge: 'female',
    badgeTexto: 'Solo Mujeres',
    descripcion: 'Plataforma premium de streaming social con sistema de salas tem\u00e1ticas y monetizaci\u00f3n por regalos virtuales en tiempo real.',
    pasos: [
      'Descarga la app oficial desde la tienda de tu dispositivo.',
      'Ingresa el c\u00f3digo oficial de nuestra agencia al registrarte.',
      'Completa la verificaci\u00f3n facial en un \u00e1rea bien iluminada.'
    ],
    enlaceDescarga: 'https://forms.gle/dyhyQHQmk7MWGsio8'
  },
  {
    id: 'salsa',
    nombre: 'Salsa App',
    icono: 'FOTOS DE APPS/SALSA APP.jpg',
    badge: 'female',
    badgeTexto: 'Solo Mujeres',
    descripcion: 'App de transmisi\u00f3n en vivo enfocada en creadoras de contenido de video con alta retenci\u00f3n de audiencia internacional.',
    pasos: [
      'Haz clic en el enlace oficial de vinculaci\u00f3n.',
      'Registra tu n\u00famero con el c\u00f3digo de \u00e1rea del pa\u00eds.'
    ],
    enlaceDescarga: 'https://forms.gle/dyhyQHQmk7MWGsio8'
  },
  {
    id: 'mango',
    nombre: 'Mango App',
    icono: 'FOTOS DE APPS/MANGO APP.jpg',
    badge: 'female',
    badgeTexto: 'Solo Mujeres',
    descripcion: 'Transmisiones interactivas a nivel mundial con sistema de regalos virtuales cambiables por cripto (USDT).',
    pasos: [],
    enlaceDescarga: 'https://forms.gle/dyhyQHQmk7MWGsio8'
  },
  {
    id: 'tango',
    nombre: 'Tango App',
    icono: 'FOTOS DE APPS/TANGO APP.jpg',
    badge: 'female',
    badgeTexto: 'Solo Mujeres',
    descripcion: 'L\u00edder internacional en transmisiones en vivo independientes con amplio ecosistema de monetizaci\u00f3n.',
    pasos: [],
    enlaceDescarga: 'https://forms.gle/dyhyQHQmk7MWGsio8'
  },
  {
    id: 'livchat',
    nombre: 'Liv Chat App',
    icono: 'FOTOS DE APPS/LIV CHAT APP.jpg',
    badge: 'female',
    badgeTexto: 'Solo Mujeres',
    descripcion: 'Videollamadas 1 a 1 din\u00e1micas de entretenimiento digital con audiencias de alto poder adquisitivo.',
    pasos: [],
    enlaceDescarga: 'https://forms.gle/dyhyQHQmk7MWGsio8'
  },
  {
    id: 'chamet',
    nombre: 'Chamet App',
    icono: 'FOTOS DE APPS/CHAMET APP.jpg',
    badge: 'female',
    badgeTexto: 'Solo Mujeres',
    descripcion: 'Plataforma global de alto flujo para video hosts profesionales con bonificaciones por rendimiento semanal.',
    pasos: [],
    enlaceDescarga: 'https://forms.gle/dyhyQHQmk7MWGsio8'
  },
  {
    id: 'hiti',
    nombre: 'HiTi App',
    icono: 'FOTOS DE APPS/HITI APP.jpg',
    badge: 'female',
    badgeTexto: 'Solo Mujeres',
    descripcion: 'Interacci\u00f3n casual y chats de voz estables con comunidades internacionales activas las 24 horas.',
    pasos: [],
    enlaceDescarga: 'https://forms.gle/dyhyQHQmk7MWGsio8'
  },
  {
    id: 'poppo',
    nombre: 'Poppo App',
    icono: 'FOTOS DE APPS/POPPO APP.jpg',
    badge: 'female',
    badgeTexto: 'Solo Mujeres',
    descripcion: 'Nueva plataforma en crecimiento acelerado con excelentes bonos por rendimiento y captaci\u00f3n de nuevas operadoras.',
    pasos: [],
    enlaceDescarga: 'https://forms.gle/dyhyQHQmk7MWGsio8'
  },
  {
    id: 'superlive',
    nombre: 'Superlive App',
    icono: 'FOTOS DE APPS/SUPERLIVE APP.jpg',
    badge: 'female',
    badgeTexto: 'Solo Mujeres',
    descripcion: 'Transmisiones en vivo optimizadas para audiencias internacionales de alto valor con sistema de rankings competitivos.',
    pasos: [],
    enlaceDescarga: 'https://forms.gle/dyhyQHQmk7MWGsio8'
  },
  {
    id: 'olamet',
    nombre: 'Olamet App',
    icono: 'FOTOS DE APPS/OLAMET APP.jpg',
    badge: 'female',
    badgeTexto: 'Solo Mujeres',
    descripcion: 'Comunidad global integrada para creadoras de contenido de video streaming con pagos diarios acumulables.',
    pasos: [],
    enlaceDescarga: 'https://forms.gle/dyhyQHQmk7MWGsio8'
  },
  {
    id: 'wow',
    nombre: 'WOW App',
    icono: 'FOTOS DE APPS/WOW APP.jpg',
    badge: 'female',
    badgeTexto: 'Solo Mujeres',
    descripcion: 'Plataforma de entretenimiento digital con sistema de recompensas progresivas y comunidad latinoamericana activa.',
    pasos: [],
    enlaceDescarga: 'https://forms.gle/dyhyQHQmk7MWGsio8'
  }
];

/* ─────────────────────────────────────────────────────────────────────────────
   2. MATRIZ DE DATOS — VACANTES FREELANCE (TAB: FREELANCE)
───────────────────────────────────────────────────────────────────────────── */
const VACANTES_FREELANCE = [
  {
    id: 'boleteria',
    nombre: 'Boletera Freelancer',
    badge: 'both',
    badgeTexto: 'Hombres y Mujeres',
    descripcion: 'Vendedor independiente de boletera a\u00e9rea comercial externa. Sin horarios r\u00edgidos ni contratos de subordinaci\u00f3n.',
    bullets: [
      'Sin horarios establecidos, gestionado a tu propio ritmo.',
      'Comisiones directas por volumen de ventas emitidas de manera oficial.'
    ],
    enlaceAccion: 'https://forms.gle/dyhyQHQmk7MWGsio8',
    textoBoton: 'Postularme ahora'
  },
  {
    id: 'novelas',
    nombre: 'Redactor de Novelas',
    badge: 'both',
    badgeTexto: 'Hombres y Mujeres',
    descripcion: 'Escritura creativa independiente de historias cortas y novelas digitales para plataformas m\u00f3viles internacionales.',
    bullets: [],
    enlaceAccion: 'https://forms.gle/dyhyQHQmk7MWGsio8',
    textoBoton: 'Postularme ahora'
  },
  {
    id: 'ropa',
    nombre: 'Revendedor de Ropa Nacional',
    badge: 'both',
    badgeTexto: 'Hombres y Mujeres',
    descripcion: 'Comercializaci\u00f3n libre sin inversi\u00f3n inicial de cat\u00e1logos de indumentaria de confecci\u00f3n nacional.',
    bullets: [],
    enlaceAccion: 'https://forms.gle/dyhyQHQmk7MWGsio8',
    textoBoton: 'Postularme ahora'
  }
];

/* ─────────────────────────────────────────────────────────────────────────────
   3. MATRIZ DE DATOS — SUBAGENCIAS (TAB: SUBAGENCIAS)
───────────────────────────────────────────────────────────────────────────── */
const SUBAGENCIAS = [
  {
    id: 'admin-agencias',
    nombre: 'Administradoras de Agencia para Subagencia',
    badge: 'female',
    badgeTexto: 'Solo Mujeres',
    esEspecial: true,
    descripcion: 'Lidera y escala tu propio equipo de creadoras digitales bajo nuestra infraestructura global de alto rendimiento.',
    bullets: [
      'Acceso directo a p\u00e1neles administrativos m\u00e1ster.',
      'Compensaciones adicionales seg\u00fan el volumen total acumulado por tus reclutadas.'
    ],
    enlaceAccion: 'https://forms.gle/dyhyQHQmk7MWGsio8',
    textoBoton: 'Solicitar Panel de Subagencia'
  }
];

/* ─────────────────────────────────────────────────────────────────────────────
   4. MATRIZ DE DATOS — NEGOCIOS Y ALIADOS (TAB: ALIANZAS)
───────────────────────────────────────────────────────────────────────────── */
const ALIANZAS = [
  {
    id: 'inversionistas',
    nombre: 'Oportunidad para Inversionistas',
    badge: 'both',
    badgeTexto: 'Empresarial',
    esEspecial: false,
    descripcion: 'Financia el desarrollo de infraestructura de conectividad y expansi\u00f3n publicitaria de la agencia con rendimientos pactados.',
    bullets: [],
    enlaceAccion: 'mailto:landirianositeoficial@gmail.com',
    textoBoton: 'Contactar Direcci\u00f3n'
  },
  {
    id: 'influencers',
    nombre: 'Comunidad de Creadores & Influencers',
    badge: 'both',
    badgeTexto: 'Aliados',
    esEspecial: true,
    descripcion: 'Programa especial de divulgaci\u00f3n comercial. Recibe compensaciones econ\u00f3micas fijas y variables calculadas directamente seg\u00fan tu nivel de alcance e influencia comercial.',
    bullets: [],
    enlaceAccion: 'https://forms.gle/dyhyQHQmk7MWGsio8',
    textoBoton: 'Vincular mis Redes'
  }
];

/* ─────────────────────────────────────────────────────────────────────────────
   5. MATRIZ DE DATOS — COMUNIDAD Y PASARELAS (TAB: COMUNIDAD)
───────────────────────────────────────────────────────────────────────────── */
const COMUNIDAD_ITEMS = [
  {
    id: 'rifa',
    nombre: 'Prueba tu Suerte (Rifa Interna)',
    badge: 'both',
    badgeTexto: 'Exclusivo Operadores',
    esEspecial: false,
    descripcion: 'Espacio recreativo mensual para nuestra comunidad activa de freelancers y streamers. \u00a1Participa autom\u00e1ticamente con tus metas cumplidas!',
    bullets: [],
    tipoBoton: 'alerta',
    textoBoton: 'Ver Estado de Rifa',
    mensajeAlerta: 'Pr\u00f3ximamente disponible el sorteo mensual.'
  },
  {
    id: 'binance-section',
    nombre: 'Configuraci\u00f3n de Pagos en Binance',
    badge: 'both',
    badgeTexto: 'Obligatorio / Pagos',
    esEspecial: false,
    descripcion: 'Asegura el cobro de tus ingresos sin comisiones bancarias internacionales a trav\u00e9s de criptoactivos estables (USDT).',
    bullets: [],
    tipoBoton: 'registro',
    textoBoton: 'Descargar Instructivo Binance',
    enlaceAccion: 'https://forms.gle/dyhyQHQmk7MWGsio8'
  }
];

/* ─────────────────────────────────────────────────────────────────────────────
   6. CANALES DE INYECCIÓN FUTURA (FUTURE INJECTION SLOTS)
   Estos bloques están maquetados y estilizados, listos para recibir
   datos reales. Sólo modificar el array `hookData` activa el contenido.
───────────────────────────────────────────────────────────────────────────── */
const FUTURE_HOOKS = [
  {
    id: 'hook-donaciones',
    icono: '\uD83D\uDC9B',
    titulo: 'Donaciones',
    subtitulo: 'Canal de Apoyo Comunitario',
    descripcion: 'Este m\u00f3dulo estar\u00e1 activo pr\u00f3ximamente. Aqu\u00ed podr\u00e1s apoyar directamente el crecimiento de la plataforma y sus operadoras.'
  },
  {
    id: 'hook-alianzas',
    icono: '\uD83E\uDD1D',
    titulo: 'Alianzas Estrat\u00e9gicas',
    subtitulo: 'Programa de Partners Corporativos',
    descripcion: 'Espacio reservado para convenios corporativos y acuerdos de co-marca con empresas del sector de entretenimiento digital.'
  },
  {
    id: 'hook-inversiones',
    icono: '\uD83D\uDCC8',
    titulo: 'Inversiones Corporativas',
    subtitulo: 'Fondo de Expansi\u00f3n Global',
    descripcion: 'M\u00f3dulo de gesti\u00f3n de capital institucional. Los detalles del fondo estar\u00e1n disponibles en una pr\u00f3xima edici\u00f3n.'
  },
  {
    id: 'hook-eventos',
    icono: '\uD83C\uDF89',
    titulo: 'Eventos de Participaci\u00f3n Masiva',
    subtitulo: 'Convocatorias y Activaciones',
    descripcion: 'Secci\u00f3n dedicada a eventos, transmisiones masivas, hackathons y activaciones de marca a escala regional y global.'
  }
];

/* =============================================================================
   FUNCIONES DE RENDERIZADO
   Construyen el DOM a partir de las matrices de datos anteriores.
   NO modificar estas funciones para agregar contenido — edita los arrays.
============================================================================= */

/**
 * Genera el HTML de badge según el tipo.
 * @param {'female'|'both'} tipo
 * @param {string} texto
 */
function renderBadge(tipo, texto) {
  return `<span class="badge ${tipo}">${texto}</span>`;
}

/**
 * Genera el HTML de lista de pasos/bullets.
 * @param {string[]} items
 * @param {'ol'|'ul'} tag
 */
function renderLista(items, tag = 'ul') {
  if (!items || items.length === 0) return '';
  const liItems = items.map(i => `<li>${i}</li>`).join('');
  return `<${tag}>${liItems}</${tag}>`;
}

/**
 * Renderiza las tarjetas de apps de streaming en el panel #streamers.
 */
function renderStreamers() {
  const container = document.querySelector('#streamers .grid-layout');
  if (!container) return;

  container.innerHTML = STREAMING_APPS.map(app => `
    <div class="card" id="${app.id}">
      <div class="card-header">
        <img
          src="${app.icono}"
          alt="${app.nombre}"
          class="app-icon"
          loading="lazy"
          onerror="this.style.display='none'"
        >
        <div class="card-title-area">
          <h3>${app.nombre}</h3>
          ${renderBadge(app.badge, app.badgeTexto)}
        </div>
      </div>
      <div class="card-body">
        <p>${app.descripcion}</p>
        ${renderLista(app.pasos, 'ol')}
      </div>
      <div class="card-actions">
        <a
          href="${app.enlaceDescarga}"
          class="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >Descargar e Instalar</a>
        <button
          class="btn btn-secondary share-btn"
          data-anchor="${app.id}"
          title="Copiar enlace"
          aria-label="Copiar enlace a ${app.nombre}"
        >\uD83D\uDD17</button>
      </div>
    </div>
  `).join('');
}

/**
 * Renderiza las tarjetas de vacantes freelance en el panel #freelance.
 */
function renderFreelance() {
  const container = document.querySelector('#freelance .grid-layout');
  if (!container) return;

  container.innerHTML = VACANTES_FREELANCE.map(v => `
    <div class="card" id="${v.id}">
      <div class="card-header">
        <div class="card-title-area">
          <h3>${v.nombre}</h3>
          ${renderBadge(v.badge, v.badgeTexto)}
        </div>
      </div>
      <div class="card-body">
        <p>${v.descripcion}</p>
        ${renderLista(v.bullets, 'ul')}
      </div>
      <div class="card-actions">
        <a
          href="${v.enlaceAccion}"
          class="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >${v.textoBoton}</a>
        <button
          class="btn btn-secondary share-btn"
          data-anchor="${v.id}"
          title="Copiar enlace"
          aria-label="Copiar enlace a ${v.nombre}"
        >\uD83D\uDD17</button>
      </div>
    </div>
  `).join('');
}

/**
 * Renderiza las tarjetas de subagencias en el panel #subagencias.
 */
function renderSubagencias() {
  const container = document.querySelector('#subagencias .grid-layout');
  if (!container) return;

  container.innerHTML = SUBAGENCIAS.map(s => `
    <div class="card ${s.esEspecial ? 'special-box' : ''}" id="${s.id}">
      <div class="card-header">
        <div class="card-title-area">
          <h3>${s.nombre}</h3>
          ${renderBadge(s.badge, s.badgeTexto)}
        </div>
      </div>
      <div class="card-body">
        <p>${s.descripcion}</p>
        ${renderLista(s.bullets, 'ul')}
      </div>
      <div class="card-actions">
        <a
          href="${s.enlaceAccion}"
          class="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >${s.textoBoton}</a>
        <button
          class="btn btn-secondary share-btn"
          data-anchor="${s.id}"
          title="Copiar enlace"
          aria-label="Copiar enlace a ${s.nombre}"
        >\uD83D\uDD17</button>
      </div>
    </div>
  `).join('');
}

/**
 * Renderiza las tarjetas de alianzas en el panel #alianzas.
 */
function renderAlianzas() {
  const container = document.querySelector('#alianzas .grid-layout');
  if (!container) return;

  container.innerHTML = ALIANZAS.map(a => `
    <div class="card ${a.esEspecial ? 'special-box' : ''}" id="${a.id}">
      <div class="card-header">
        <div class="card-title-area">
          <h3>${a.nombre}</h3>
          ${renderBadge(a.badge, a.badgeTexto)}
        </div>
      </div>
      <div class="card-body">
        <p>${a.descripcion}</p>
        ${renderLista(a.bullets, 'ul')}
      </div>
      <div class="card-actions">
        <a
          href="${a.enlaceAccion}"
          class="btn btn-primary"
          ${a.enlaceAccion.startsWith('mailto:') ? '' : 'target="_blank" rel="noopener noreferrer"'}
        >${a.textoBoton}</a>
        <button
          class="btn btn-secondary share-btn"
          data-anchor="${a.id}"
          title="Copiar enlace"
          aria-label="Copiar enlace a ${a.nombre}"
        >\uD83D\uDD17</button>
      </div>
    </div>
  `).join('');
}

/**
 * Renderiza las tarjetas de comunidad en el panel #comunidad.
 */
function renderComunidad() {
  const container = document.querySelector('#comunidad .grid-layout');
  if (!container) return;

  container.innerHTML = COMUNIDAD_ITEMS.map(item => {
    let botonHTML = '';
    if (item.tipoBoton === 'alerta') {
      botonHTML = `<button class="btn btn-primary" onclick="alert('${item.mensajeAlerta}')">${item.textoBoton}</button>`;
    } else {
      botonHTML = `<a href="${item.enlaceAccion}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">${item.textoBoton}</a>`;
    }
    return `
      <div class="card ${item.esEspecial ? 'special-box' : ''}" id="${item.id}">
        <div class="card-header">
          <div class="card-title-area">
            <h3>${item.nombre}</h3>
            ${renderBadge(item.badge, item.badgeTexto)}
          </div>
        </div>
        <div class="card-body">
          <p>${item.descripcion}</p>
        </div>
        <div class="card-actions">
          ${botonHTML}
          <button
            class="btn btn-secondary share-btn"
            data-anchor="${item.id}"
            title="Copiar enlace"
            aria-label="Copiar enlace"
          >\uD83D\uDD17</button>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Renderiza los canales de inyección futura (hooks de expansión modular).
 * Cada bloque es un contenedor estilizado listo para recibir innerHTML.
 */
function renderFutureHooks() {
  const container = document.getElementById('future-hooks-grid');
  if (!container) return;

  container.innerHTML = FUTURE_HOOKS.map(hook => `
    <div class="card future-hook-card" id="${hook.id}" data-hook-ready="true">
      <div class="hook-status-bar">
        <span class="hook-status-badge">Pr\u00f3ximamente</span>
      </div>
      <div class="card-header">
        <div class="hook-icon-wrapper" aria-hidden="true">${hook.icono}</div>
        <div class="card-title-area">
          <h3>${hook.titulo}</h3>
          <span class="hook-subtitle">${hook.subtitulo}</span>
        </div>
      </div>
      <div class="card-body hook-body" data-inject-target="${hook.id}">
        <p>${hook.descripcion}</p>
      </div>
      <div class="card-actions hook-actions" data-inject-actions="${hook.id}">
        <button class="btn btn-hook" disabled aria-disabled="true">Disponible Pronto</button>
      </div>
    </div>
  `).join('');
}

/* =============================================================================
   SISTEMA DE TABS — NAVEGACIÓN
============================================================================= */

/**
 * Inicializa el sistema de tabs. Maneja la activación de paneles
 * y el estado visual de los botones.
 */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;

      // Desactivar todos
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      // Activar el seleccionado
      btn.classList.add('active');
      const targetPanel = document.getElementById(targetTab);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Activar tab según hash de URL al cargar (deep-linking)
  const hashTarget = window.location.hash.replace('#', '');
  if (hashTarget) {
    const targetCard = document.getElementById(hashTarget);
    if (targetCard) {
      // Determinar a qué panel pertenece y activarlo
      const parentPanel = targetCard.closest('.tab-panel');
      if (parentPanel) {
        const panelId = parentPanel.id;
        const relatedBtn = document.querySelector(`.tab-btn[data-tab="${panelId}"]`);
        if (relatedBtn) {
          tabBtns.forEach(b => b.classList.remove('active'));
          tabPanels.forEach(p => p.classList.remove('active'));
          relatedBtn.classList.add('active');
          parentPanel.classList.add('active');
        }
      }
      // Scroll suave al elemento
      setTimeout(() => {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.style.outline = '2px solid #E2F052';
        setTimeout(() => { targetCard.style.outline = ''; }, 2500);
      }, 300);
    }
  }
}

/* =============================================================================
   SISTEMA DE DEEP-LINKING / COMPARTIR (BOTONES 🔗)
============================================================================= */

/**
 * Copia al portapapeles la URL con el anchor (#id) de la tarjeta
 * y muestra un toast de confirmación visual al usuario.
 */
function initShareButtons() {
  // Delegación de eventos en el documento (funciona con contenido dinámico)
  document.addEventListener('click', e => {
    const btn = e.target.closest('.share-btn');
    if (!btn) return;

    const anchor = btn.dataset.anchor;
    if (!anchor) return;

    const url = `${window.location.origin}${window.location.pathname}#${anchor}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => showToast('\u00a1Enlace copiado!')).catch(() => {
        fallbackCopy(url);
      });
    } else {
      fallbackCopy(url);
    }
  });
}

/** Fallback de copia para navegadores sin Clipboard API */
function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast('\u00a1Enlace copiado!');
  } catch {
    showToast('Copia manual: ' + text);
  }
  document.body.removeChild(ta);
}

/** Muestra un toast flotante de notificación */
function showToast(mensaje) {
  const existing = document.getElementById('oro-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'oro-toast';
  toast.textContent = mensaje;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  document.body.appendChild(toast);

  // Forzar reflow y aplicar clase visible
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('visible');
    });
  });

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

/* =============================================================================
   PUNTO DE ENTRADA — DOMContentLoaded
============================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Renderizar todos los paneles de contenido dinámico
  renderStreamers();
  renderFreelance();
  renderSubagencias();
  renderAlianzas();
  renderComunidad();
  renderFutureHooks();

  // 2. Inicializar navegación de tabs
  initTabs();

  // 3. Inicializar sistema de compartir / deep-linking
  initShareButtons();
});
