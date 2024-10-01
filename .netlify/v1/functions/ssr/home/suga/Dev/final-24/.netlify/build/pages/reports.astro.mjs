/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as renderComponent } from '../chunks/astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C8GAmOa0.mjs';
import { $ as $$NavBar } from '../chunks/NavBar_CffJ0oAe.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ReportCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ReportCard;
  const { title, description, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white shadow-2xl rounded-lg p-4 mb-4 max-w-xs mx-auto h-auto"> <h3 class="font-bold text-xl mb-2">${title}</h3> <p class="text-gray-600 mb-4">${description}</p> <span class="text-sm text-gray-500">Fecha: ${date}</span> </div>`;
}, "/home/suga/Dev/final-24/src/components/ReportCard.astro", void 0);

const $$Reports = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AlertAR - Reportes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col justify-center items-center min-h-screen pt-16 pb-16"> ${renderComponent($$result2, "Navbar", $$NavBar, {})} <nav class="absolute top-4 left-4"> <a href="/home" class="text-blue-200 dark:text-blue-300 font-semibold hover:no-underline"> <span class="mr-2 text-lg">&larr;</span> Volver
</a> </nav> <div class="container mx-auto p-4"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> ${renderComponent($$result2, "Card", $$ReportCard, { "title": "Reporte de Actividad", "description": "Actividad inusual detectada en el barrio.", "date": "2024-09-20" })} ${renderComponent($$result2, "Card", $$ReportCard, { "title": "Alerta de Seguridad", "description": "Se ha reportado un robo en la calle principal lorem ipsum dolor sit amet lorem ipsum dolor sit amet.", "date": "2024-09-19" })} ${renderComponent($$result2, "Card", $$ReportCard, { "title": "Aviso Meteorol\xF3gico", "description": "Se esperan fuertes lluvias en las pr\xF3ximas horas.", "date": "2024-09-18" })} ${renderComponent($$result2, "Card", $$ReportCard, { "title": "Reuni\xF3n Comunitaria", "description": "\xDAnete a la reuni\xF3n sobre la seguridad del barrio.", "date": "2024-09-17" })} </div> </div> </main> ` })}`;
}, "/home/suga/Dev/final-24/src/pages/reports.astro", void 0);

const $$file = "/home/suga/Dev/final-24/src/pages/reports.astro";
const $$url = "/reports";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reports,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
