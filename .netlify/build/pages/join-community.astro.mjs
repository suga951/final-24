/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C8GAmOa0.mjs';
export { renderers } from '../renderers.mjs';

const $$JoinCommunity = createComponent(async ($$result, $$props, $$slots) => {
  const comunidades = [
    {
      id: 1,
      nombre: "Comunidad de Palermo",
      codigoPostal: "1425",
      descripcion: "Comunidad activa en Palermo, Buenos Aires."
    },
    {
      id: 2,
      nombre: "Comunidad de Belgrano",
      codigoPostal: "1428",
      descripcion: "Vecinos de Belgrano."
    },
    {
      id: 3,
      nombre: "Comunidad de Recoleta",
      codigoPostal: "1425",
      descripcion: "Grupo de seguridad vecinal en Recoleta."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AlertAR - Unirse a una Comunidad." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col min-h-screen bg-gradient-to-b from-blue-300 to-blue-700 dark:bg-gradient-to-b dark:from-blue-800 dark:to-black"> <div class="flex flex-col items-center justify-center flex-grow p-4"> <div class="max-w-md w-full mx-4 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg"> <header class="text-center"> <h1 class="text-3xl font-bold text-black dark:text-gray-100 mb-4">
Unirse a una Comunidad
</h1> </header> <section id="comunidades-list" class="mt-6"> <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
Comunidades disponibles
</h2> <ul class="space-y-4"> ${comunidades.map((comunidad) => renderTemplate`<li class="p-4 bg-blue-100 dark:bg-gray-700 rounded-lg shadow-md"> <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2"> ${comunidad.nombre} </h3> <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">
Código Postal: ${comunidad.codigoPostal} </p> <p class="text-sm text-gray-600 dark:text-gray-300"> ${comunidad.descripcion} </p> <div class="flex justify-center"> <button type="button"${addAttribute(`${comunidad.id}`, "id")} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
Unirse
</button> </div> </li>`)} </ul> </section> </div> </div> </div> ` })} `;
}, "/home/suga/Dev/final-24/src/pages/join-community.astro", void 0);

const $$file = "/home/suga/Dev/final-24/src/pages/join-community.astro";
const $$url = "/join-community";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$JoinCommunity,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
