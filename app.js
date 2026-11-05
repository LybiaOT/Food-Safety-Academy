/*
 * Food Safety Academy — funciones de la página.
 * Esta web es una DEMOSTRACIÓN ESTÁTICA. No cobra ni registra usuarios.
 * No agregues contraseñas, claves secretas, listas de alumnos o datos privados aquí.
 */
'use strict';

// Los cursos y temarios son PROPUESTAS, no ofertas confirmadas.
const courses = {
  bpm: {
    name: 'Buenas Prácticas de Manufactura y NOM-251',
    description: 'Una introducción aplicada a los requisitos higiénicos y al control preventivo en establecimientos de alimentos.',
    topics: ['Conceptos y objetivos de BPM', 'Instalaciones, equipos y condiciones higiénicas', 'Higiene del personal y prevención de contaminación cruzada', 'Programas prerrequisito, registros y verificación', 'Introducción a la NOM-251-SSA1-2009']
  },
  haccp: {
    name: 'HACCP: análisis de peligros y puntos críticos',
    description: 'Comprende la lógica del análisis de peligros y los principios para estructurar controles basados en riesgo.',
    topics: ['Bases del análisis de peligros', 'Pasos preliminares y diagrama de flujo', 'Determinación de medidas de control y PCC', 'Límites críticos, monitoreo y acciones correctivas', 'Validación, verificación, documentación y registros']
  },
  auditorias: {
    name: 'Auditorías internas y sistemas de inocuidad',
    description: 'Desarrolla criterios para planear auditorías, evaluar evidencia y dar seguimiento a oportunidades de mejora.',
    topics: ['Propósito y principios de una auditoría interna', 'Plan de auditoría y listas de verificación', 'Entrevistas y evaluación de evidencia objetiva', 'Redacción de hallazgos y no conformidades', 'Acciones correctivas, seguimiento y cierre']
  },
  cip: {
    name: 'Limpieza, desinfección y fundamentos de CIP',
    description: 'Revisa factores clave para controlar la limpieza y verificar la eficacia de los procedimientos.',
    topics: ['Diferencia entre limpieza, desinfección y sanitización', 'Suciedades, agentes químicos y parámetros críticos', 'Fundamentos de sistemas CIP', 'Verificación de limpieza e interpretación de resultados', 'Registros, desviaciones y mejora continua']
  }
};

const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');
menuToggle?.addEventListener('click', () => {
  const open = !primaryNav.classList.contains('is-open');
  primaryNav.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
primaryNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Abrir menú');
  });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    primaryNav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }
});

// Filtros de catálogo
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.course-card');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filterButtons.forEach(btn => {
    const active = btn === button;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => {
    card.hidden = selected !== 'todos' && card.dataset.category !== selected;
  });
}));

// Ventana con temario. Se usa texto, nunca HTML ingresado por usuarios.
const dialog = document.getElementById('courseDialog');
const dialogTitle = document.getElementById('dialogTitle');
const dialogDescription = document.getElementById('dialogDescription');
const dialogTopics = document.getElementById('dialogTopics');
const dialogClose = document.getElementById('dialogClose');
const dialogCTA = document.getElementById('dialogCTA');
document.querySelectorAll('[data-course]').forEach(button => button.addEventListener('click', () => {
  const course = courses[button.dataset.course];
  if (!course || !dialog) return;
  dialogTitle.textContent = course.name;
  dialogDescription.textContent = course.description;
  dialogTopics.replaceChildren(...course.topics.map(topic => {
    const li = document.createElement('li');
    li.textContent = topic;
    return li;
  }));
  if (typeof dialog.showModal === 'function') dialog.showModal();
}));
dialogClose?.addEventListener('click', () => dialog?.close());
dialogCTA?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', event => {
  // Cierra solo cuando se hace clic fuera del contenido del diálogo.
  if (event.target === dialog) dialog.close();
});

// Formulario demostrativo: copia un texto, NO envía datos a ningún servidor.
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
form?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const topic = document.getElementById('contactTopic').value;
  const message = document.getElementById('contactMessage').value.trim();
  if (!name || !email || !message) return;
  const text = `FOOD SAFETY ACADEMY — CONSULTA\nNombre: ${name}\nCorreo: ${email}\nAsunto: ${topic}\nMensaje: ${message}`;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
    feedback.textContent = 'Consulta copiada. Cuando configuremos el correo de la academia podrás enviarla directamente.';
  } catch {
    // Si el navegador bloquea el portapapeles, ofrecer texto seleccionable.
    const temporary = document.createElement('textarea');
    temporary.className = 'copy-fallback';
    temporary.value = text;
    temporary.readOnly = true;
    form.append(temporary);
    temporary.focus();
    temporary.select();
    feedback.textContent = 'Copia el texto seleccionado. El envío de mensajes aún no está habilitado.';
  }
});

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
