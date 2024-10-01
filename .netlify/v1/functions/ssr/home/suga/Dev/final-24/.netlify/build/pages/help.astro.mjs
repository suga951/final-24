/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C8GAmOa0.mjs';
import { $ as $$NavBar } from '../chunks/NavBar_CffJ0oAe.mjs';
export { renderers } from '../renderers.mjs';

const $$Help = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AlertAR - Ayuda." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-screen bg-blue-100 relative"> <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl"> <h2 class="text-3xl font-semibold text-center mb-8">Ayuda y Tutoriales</h2> <section class="mb-8"> <h3 class="text-2xl font-semibold mb-4">Cómo usar la aplicación</h3> <p class="text-gray-700 leading-relaxed">
Para empezar a usar la aplicación, sigue estos pasos:
</p> <ol class="list-decimal list-inside mt-4 text-gray-700"> <li>Regístrate o inicia sesión utilizando tu dirección de correo electrónico y contraseña.</li> <li>Únete a un grupo de vecinos según tu ubicación geográfica o crea uno si aún no existe.</li> <li>Una vez dentro del grupo, podrás ver las alertas y reportes generados por otros usuarios.</li> <li>Utiliza el botón "Alertar" para notificar a tus vecinos en caso de una emergencia o situación sospechosa.</li> <li>Para configurar tus datos personales, visita tu perfil y actualiza la información según sea necesario.</li> </ol> </section> <section class="mb-8"> <h3 class="text-2xl font-semibold mb-4">Cómo generar un reporte</h3> <p class="text-gray-700 leading-relaxed">
Generar un reporte es fácil. A continuación te explicamos cómo hacerlo:
</p> <ol class="list-decimal list-inside mt-4 text-gray-700"> <li>Presiona el botón "+" en la pantalla principal para desplegar el menú de emergencias.</li> <li>Selecciona la opción de generar un reporte.</li> <li>Describe el incidente, agregando detalles importantes como la hora, fecha y ubicación del evento.</li> <li>Si es posible, añade fotos o videos del incidente para proporcionar más contexto.</li> <li>Presiona "Enviar" y tu reporte será compartido con todos los miembros del grupo de vecinos.</li> </ol> </section> <section> <h3 class="text-2xl font-semibold mb-4">Preguntas Frecuentes</h3> <p class="text-gray-700 leading-relaxed">
Si tienes alguna duda adicional, consulta nuestras preguntas frecuentes o contacta con nuestro equipo de soporte.
</p> </section> </div> ${renderComponent($$result2, "NavBar", $$NavBar, {})} </div> ` })}`;
}, "/home/suga/Dev/final-24/src/pages/help.astro", void 0);

const $$file = "/home/suga/Dev/final-24/src/pages/help.astro";
const $$url = "/help";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Help,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
