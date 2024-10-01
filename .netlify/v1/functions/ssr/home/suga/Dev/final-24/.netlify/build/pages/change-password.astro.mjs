/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C8GAmOa0.mjs';
import { $ as $$DarkModeToggle } from '../chunks/DarkModeToggle_j959aXaU.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ChangePasswordForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<container class="flex flex-col min-h-screen"> <!-- Contenido Principal --> <div class="flex items-center justify-center flex-grow p-4"> <div class="bg-gradient-to-b from-blue-300 to-blue-700 dark:bg-gradient-to-b dark:from-gray-500 dark:to-blue-900 dark:text-white p-6 md:p-10 rounded-lg shadow-md w-full max-w-md relative"> <div class="flex justify-center mb-6"> <img src="/assets/img/change-password.webp" alt="Logo" class="w-24 h-24"> </div> <h2 class="text-center text-2xl mb-6">Restablecer Contraseña</h2> <form id="reset-password-form" method="POST" class="space-y-6"> <div class="mb-4"> <label for="password" class="block text-gray-700 dark:text-gray-300">Nueva contraseña:</label> <input type="password" id="password" name="password" class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline" required> </div> <div class="mb-4"> <label for="confirm-password" class="block text-gray-700 dark:text-gray-300">Confirmar nueva contraseña:</label> <input type="password" id="confirm-password" name="confirm-password" class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline" required> </div> <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline">
Restablecer Contraseña
</button> <p id="error-message" class="text-center text-red-500 mt-4" style="display:none;">
Las contraseñas no coinciden
</p> </form> </div> </div> <!-- Footer --> <footer class="text-center text-sm text-gray-600 dark:text-gray-300 p-4">
Examen de Desarrollo de Aplicación de Alarma Vecinal con Chat - 2024 <br>
Integrantes: Alexis, Agustín, Marcos, Rodrigo, Triana <br>
© 2024 - Todos los derechos reservados
</footer> </container>`;
}, "/home/suga/Dev/final-24/src/components/ChangePasswordForm.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ChangePassword = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AlertAR - Restablecer Contrase\xF1a." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", "<main> ", " ", ' </main> <script src="/scripts/changePasswordVerify.js" defer><\/script> '])), maybeRenderHead(), renderComponent($$result2, "ThemeIcon", $$DarkModeToggle, {}), renderComponent($$result2, "ChangePasswordForm", $$ChangePasswordForm, {})) })}`;
}, "/home/suga/Dev/final-24/src/pages/change-password.astro", void 0);

const $$file = "/home/suga/Dev/final-24/src/pages/change-password.astro";
const $$url = "/change-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ChangePassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
