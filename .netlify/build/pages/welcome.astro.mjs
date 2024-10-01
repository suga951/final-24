/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C8GAmOa0.mjs';
import { $ as $$DarkModeToggle } from '../chunks/DarkModeToggle_j959aXaU.mjs';
export { renderers } from '../renderers.mjs';

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AlertAR - Bienvenido" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DarkModeToggle", $$DarkModeToggle, {})} ${maybeRenderHead()}<main class="flex items-center justify-center min-h-screen bg-transparent dark:bg-transparent"> <article class="max-w-md w-full mx-4 p-8 bg-transparent dark:bg-transparent rounded-none shadow-none text-center"> <!-- Logo --> <div class="flex justify-center mb-6"> <img src="/assets/img/logo.webp" alt="AlertAR Logo" class="w-24 h-24"> </div> <header> <h1 class="text-3xl font-bold text-black dark:text-gray-100 mb-4">
Bienvenido
</h1> <p class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-8">
Solo falta que te unas a tu comunidad 😊
</p> </header> <div class="flex flex-col items-center space-y-4"> <!-- <a
          href="/create-comunity"
          class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-48 focus:outline-none focus:shadow-outline"
        >
          Crear Comunidad
        </a> --> <a href="/join-community" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-48 focus:outline-none focus:shadow-outline">
Unirse a Comunidad
</a> </div> </article> </main> ` })}`;
}, "/home/suga/Dev/final-24/src/pages/welcome.astro", void 0);

const $$file = "/home/suga/Dev/final-24/src/pages/welcome.astro";
const $$url = "/welcome";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Welcome,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
