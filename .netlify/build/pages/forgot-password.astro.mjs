/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C8GAmOa0.mjs';
import { $ as $$DarkModeToggle } from '../chunks/DarkModeToggle_j959aXaU.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ForgotForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col min-h-screen justify-between"> <!-- Contenido Principal --> <main class="flex items-center justify-center p-4 flex-grow"> <section class="bg-gradient-to-b from-blue-300 to-blue-700 dark:bg-gradient-to-b dark:from-blue-800 dark:to-black dark:text-white p-6 md:p-10 rounded-lg shadow-md w-full max-w-md relative"> <!-- Botón para volver al inicio --> <nav class="absolute top-4 left-4"> <a href="/" class="text-blue-500 dark:text-blue-300 font-semibold hover:no-underline"> <span class="mr-2 text-lg">&larr;</span> Volver
</a> </nav> <!-- Logo --> <div class="flex justify-center mb-6"> <img src="/assets/img/reset-password.webp" alt="Logo" class="w-24 h-24"> </div> <h2 class="text-2xl font-semibold text-center text-gray-700 dark:text-gray-300 mb-6">
Recuperar Contraseña
</h2> <!-- Formulario --> <form id="forgot-password-form" method="POST" action="/api/forgot-password" class="space-y-6"> <div class="mb-4"> <label for="email" class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
Ingresa tu correo electrónico:
</label> <input type="email" id="email" name="email" required class="w-full py-2 px-3 border rounded-full bg-gray-100 text-gray-800 dark:text-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div class="flex justify-center"> <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full transition-colors duration-300">
Enviar correo de restablecimiento
</button> </div> </form> </section> </main> <!-- Footer --> <footer class="text-center text-sm text-gray-600 dark:text-gray-300 p-4">
Examen de Desarrollo de Aplicación de Alarma Vecinal con Chat - 2024 <br>
Integrantes: Alexis, Agustín, Marcos, Rodrigo, Triana <br>
© 2024 - Todos los derechos reservados
</footer> </div>`;
}, "/home/suga/Dev/final-24/src/components/ForgotForm.astro", void 0);

const $$ForgotPassword = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AlertAR - Recuperar Contrase\xF1a." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "ThemeIcon", $$DarkModeToggle, {})} ${renderComponent($$result2, "ForgotForm", $$ForgotForm, {})} </main> ` })}`;
}, "/home/suga/Dev/final-24/src/pages/forgot-password.astro", void 0);

const $$file = "/home/suga/Dev/final-24/src/pages/forgot-password.astro";
const $$url = "/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ForgotPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
