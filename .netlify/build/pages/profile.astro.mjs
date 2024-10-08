/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C8GAmOa0.mjs';
import { $ as $$NavBar } from '../chunks/NavBar_CffJ0oAe.mjs';
export { renderers } from '../renderers.mjs';

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AlertAR - Perfil." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-screen bg-blue-100 relative p-2 sm:p-4"> <!-- Sección para actualizar perfil --> <section class="bg-white p-3 sm:p-6 rounded-lg shadow-md w-full max-w-lg mb-16"> <h2 class="text-lg sm:text-2xl font-semibold text-center mb-3 sm:mb-4">Editar Perfil</h2> <!-- Foto de perfil --> <div class="flex flex-col items-center mb-4 sm:mb-1"> <img src="/assets/icons/profile-icon.webp" alt="Perfil" class="w-16 h-16 sm:w-16 sm:h-16 rounded-full mb-2 sm:mb-3"> <button class="bg-blue-500 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-blue-600 text-xs sm:text-base">Cambiar foto de perfil</button> </div> <!-- Formulario para actualizar datos --> <form class="space-y-3 sm:space-y-4"> <!-- Nombre --> <div> <label for="name" class="block text-xs sm:text-sm font-medium text-gray-700">Nombre</label> <input type="text" id="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-xs sm:text-sm" placeholder="Tu nombre"> </div> <!-- Dirección --> <div> <label for="address" class="block text-xs sm:text-sm font-medium text-gray-700">Dirección</label> <input type="text" id="address" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-xs sm:text-sm" placeholder="Tu dirección"> </div> <!-- Código Postal --> <div> <label for="postalCode" class="block text-xs sm:text-sm font-medium text-gray-700">Código Postal</label> <input type="text" id="postalCode" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-xs sm:text-sm" placeholder="Tu código postal"> </div> <!-- Edad --> <div> <label for="age" class="block text-xs sm:text-sm font-medium text-gray-700">Edad</label> <input type="number" id="age" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-xs sm:text-sm" placeholder="Tu edad"> </div> <!-- Botón de Guardar Cambios --> <div class="text-center"> <button type="submit" class="bg-blue-500 text-white py-1 sm:py-2 px-4 sm:px-6 rounded-lg hover:bg-blue-600 text-xs sm:text-base">Guardar Cambios</button> </div> </form> </section> <!-- Barra de Navegación --> ${renderComponent($$result2, "NavBar", $$NavBar, {})} </div> ` })}`;
}, "/home/suga/Dev/final-24/src/pages/profile.astro", void 0);

const $$file = "/home/suga/Dev/final-24/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
