/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_C8GAmOa0.mjs';
export { renderers } from '../renderers.mjs';

const $$UserCreated$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-blue-700 dark:bg-gradient-to-b dark:from-blue-800 dark:to-black"> <div class="bg-white dark:bg-gray-800 text-center rounded-lg shadow-lg p-10"> <h1 class="text-2xl font-bold text-black dark:text-gray-100 mb-4">
¡Usuario Creado con Éxito!
</h1> <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
Tu cuenta ha sido creada exitosamente. Ahora puedes iniciar sesión.
</p> <a href="/welcome" class="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
Iniciar Sesión
</a> </div> </section>`;
}, "/home/suga/Dev/final-24/src/components/UserCreated.astro", void 0);

const $$UserCreated = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AlertAR - Registro exitoso." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "UserCreate", $$UserCreated$1, {})} ` })}`;
}, "/home/suga/Dev/final-24/src/pages/user-created.astro", void 0);

const $$file = "/home/suga/Dev/final-24/src/pages/user-created.astro";
const $$url = "/user-created";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$UserCreated,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
