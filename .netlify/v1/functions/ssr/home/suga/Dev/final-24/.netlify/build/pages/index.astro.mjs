/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as renderComponent } from '../chunks/astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C8GAmOa0.mjs';
import { $ as $$DarkModeToggle } from '../chunks/DarkModeToggle_j959aXaU.mjs';
import 'clsx';
/* empty css                                 */
import { a as app } from '../chunks/server_1hFA-0b5.mjs';
import { getAuth } from 'firebase-admin/auth';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$StartPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="flex flex-col min-h-screen" data-astro-cid-fb4xz3fc> <div class="flex flex-col items-center justify-center flex-grow p-4" data-astro-cid-fb4xz3fc> <div class="max-w-md w-full mx-4 p-8 bg-transparent dark:bg-transparent rounded-none shadow-none" data-astro-cid-fb4xz3fc> <!-- Logo --> <div class="flex justify-center mb-6 z-0" data-astro-cid-fb4xz3fc> <img src="assets/img/logo.webp" alt="AlertAR Logo" class="w-24 h-24" data-astro-cid-fb4xz3fc> </div> <h1 class="text-3xl font-bold text-center text-black dark:text-gray-100 mb-4" data-astro-cid-fb4xz3fc>\nAlert<span class="relative" data-astro-cid-fb4xz3fc>AR<img src="../../public/assets/img/argentina2.webp" class="flag-image" alt="Bandera Argentina" data-astro-cid-fb4xz3fc></span> </h1> <h2 class="text-lg font-medium text-center text-gray-700 dark:text-gray-300 mb-8" data-astro-cid-fb4xz3fc>\nTu barrio seguro\n</h2> <div class="flex flex-col items-center gap-4" data-astro-cid-fb4xz3fc> <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-48" id="openLoginModalBtn" data-astro-cid-fb4xz3fc>\nIniciar Sesi\xF3n\n</button> <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-48" id="openRegisterModalBtn" data-astro-cid-fb4xz3fc>\nRegistrarse\n</button> </div> </div> </div> <!-- Footer --> <footer class="text-center text-sm text-gray-600 dark:text-gray-300 p-4" data-astro-cid-fb4xz3fc>\nExamen Alarma con Chat en tiempo real - 2024 <br data-astro-cid-fb4xz3fc>\nIntegrantes: Alexis, Agust\xEDn, Marcos, Rodrigo <br data-astro-cid-fb4xz3fc> </footer> </div> <script src="/scripts/modal.js" defer><\/script>  <script src="/scripts/modal.js" defer><\/script>'])), maybeRenderHead());
}, "/home/suga/Dev/final-24/src/components/StartPage.astro", void 0);

const $$Astro = createAstro();
const $$LoginModal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LoginModal;
  const auth = getAuth(app);
  async function checkSession() {
    if (Astro2.cookies.has("__session")) {
      const sessionCookie = Astro2.cookies.get("__session")?.value;
      try {
        const decodedCookie = await auth.verifySessionCookie(sessionCookie);
        if (decodedCookie) {
          return Astro2.redirect("/chat");
        }
      } catch (error) {
        console.error("Error al verificar la cookie de sesi\xF3n:", error);
      }
    }
  }
  await checkSession();
  return renderTemplate`${maybeRenderHead()}<div id="loginModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center hidden dark:bg-opacity-70 z-50"> <section class="bg-gradient-to-b from-blue-300 to-blue-700 dark:bg-gradient-to-b dark:from-blue-800 dark:to-black dark:text-white p-6 md:p-10 rounded-2xl shadow-md w-full max-w-md relative max-h-[90vh] overflow-auto"> <header class="flex justify-end"> <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white" id="closeLoginModalBtn" type="button" aria-label="Cerrar">
Cerrar
</button> </header> <main> <section class="flex flex-col items-center justify-center mb-6"> <img src="/assets/icons/login-icon.webp" alt="Icono de inicio de sesión" class="w-12 h-12"> <h2 id="login-title" class="text-center text-2xl mb-4">Iniciar Sesión</h2> </section> <form id="loginForm"> <div class="mb-4"> <label for="login-email" class="sr-only">Correo Electrónico</label> <input type="email" id="login-email" name="email" placeholder="Correo Electrónico" class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <div class="mb-6 relative"> <label for="login-password" class="sr-only">Contraseña</label> <input type="password" id="login-password" name="password" placeholder="Contraseña" class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> <button type="button" id="togglePassword" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"> <img src="/assets/icons/eye-icon.svg" alt="Mostrar" id="eye-icon" class="w-5 h-5"> </button> </div> <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline">
Iniciar Sesión
</button> <div class="text-center mt-4"> <a href="/forgot-password" class="text-white hover:text-blue-700 text-sm">
¿Olvidaste tu contraseña?
</a> </div> </form> </main> <footer> <div class="text-center mb-4 mt-6"> <p class="text-gray-600">- O -</p> </div> <div class="flex flex-col gap-4 mb-6"> <button id="google" type="button" class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full w-full md:w-auto"> <img src="assets/img/google.webp" alt="Google icon" class="w-6 h-6 inline-block">
Iniciar con Google
</button> </div> </footer> </section> </div> `;
}, "/home/suga/Dev/final-24/src/components/LoginModal.astro", void 0);

const $$RegisterModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="registerModal" class="fixed hidden inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center overflow-y-auto dark:bg-opacity-70 z-50" aria-labelledby="register-title" role="dialog" aria-modal="true"> <article class="bg-gradient-to-b from-blue-300 to-blue-700 dark:bg-gradient-to-b dark:from-blue-800 dark:to-black dark:text-white p-4 sm:p-6 md:p-10 rounded-lg shadow-md w-full max-w-md relative max-h-[90vh] overflow-y-auto pb-10"> <button class="absolute top-4 right-4 text-gray-800 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white" id="closeRegisterModalBtn" type="button" aria-label="Cerrar modal">
Cerrar
</button> <header class="flex flex-col items-center justify-center mb-4 sm:mb-6"> <img src="/assets/icons/registration-icon.webp" alt="Icono de registro" class="w-12 h-12 sm:w-16 sm:h-16"> <h2 id="register-title" class="text-center text-xl sm:text-2xl mb-4">Registrarse</h2> </header> <form action="/api/auth/register" method="post" id="registerForm"> <div class="mb-3 sm:mb-4"> <label for="name" class="sr-only">Nombre y Apellido</label> <input type="text" id="name" name="name" placeholder="Nombre y Apellido" class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" required> </div> <div class="mb-3 sm:mb-4"> <label for="email" class="sr-only">Correo Electrónico</label> <input type="email" id="email" name="email" placeholder="Correo Electrónico" class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" required> </div> <div class="mb-3 sm:mb-4"> <label for="partido" class="sr-only">Partido</label> <input type="text" id="partido" name="partido" placeholder="Partido" class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" required> </div> <div class="mb-3 sm:mb-4 flex space-x-2 sm:space-x-4"> <label for="calle" class="sr-only">Calle</label> <input type="text" id="calle" name="calle" placeholder="Calle" class="shadow appearance-none border rounded-full w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" required> <label for="numero" class="sr-only">Número</label> <input type="text" id="numero" name="numero" placeholder="Número" class="shadow appearance-none border rounded-full w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" required> </div> <div class="mb-3 sm:mb-6 relative"> <label for="password" class="sr-only">Contraseña</label> <input type="password" id="register-password" name="password" placeholder="Contraseña" class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" required> <button type="button" id="regTogglePassword" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"> <img src="/assets/icons/eye-icon.svg" alt="Mostrar" id="reg-eye-icon" class="w-5 h-5"> </button> </div> <div class="mb-3 sm:mb-6 relative"> <label for="password-confirm" class="sr-only">Confirmar contraseña</label> <input type="password" id="register-password-confirm" name="password-confirm" placeholder="Confirmar contraseña" class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" required> <button type="button" id="toggleConfirmPassword" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"> <img src="/assets/icons/eye-icon.svg" alt="Mostrar" id="confirm-eye-icon" class="w-5 h-5"> </button> </div> <div id="password-error" class="text-red-500 text-xs hidden">Las contraseñas no coinciden.</div> <div class="mb-3 sm:mb-6"> <div class="flex items-center"> <input type="checkbox" id="terms" name="terms" class="h-4 w-4 rounded-md border-gray-300 focus:ring-blue-500 focus:ring-2" required> <label for="terms" class="ml-2 text-white text-xs sm:text-sm">
Acepto los <a href="/terms-and-conditions" class="text-blue-500 hover:text-blue-900">Términos y Condiciones</a> </label> </div> </div> <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline text-sm">
Registrarse
</button> </form> </article> </section> `;
}, "/home/suga/Dev/final-24/src/components/RegisterModal.astro", void 0);

const $$PoweredBy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-16 right-4 flex items-center space-x-2 bg-transparent dark:bg-transparent p-2 rounded-lg transform pointer-events-none"> <span class="text-sm text-gray-900 dark:text-gray-300 text-center">Powered by:</span> <img src="../../assets/img/logo-integrar.webp" alt="Fundación Integrar Logo" class="w-24 h-24 object-contain"> <span class="text-sm text-gray-900 dark:text-gray-300 mb-1 text-center">&</span> <img src="../../assets/img/logo-global-learning.webp" alt="Logo Global Learning" class="w-24 h-24 object-contain"> </div>`;
}, "/home/suga/Dev/final-24/src/components/PoweredBy.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AlertAR - Bienvenida." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "LoginModal", $$LoginModal, {})} ${renderComponent($$result2, "RegisterModal", $$RegisterModal, {})} ${renderComponent($$result2, "ThemeIcon", $$DarkModeToggle, {})} ${renderComponent($$result2, "StartPage", $$StartPage, {})} ${renderComponent($$result2, "PoweredBy", $$PoweredBy, {})} </main> ` })}`;
}, "/home/suga/Dev/final-24/src/pages/index.astro", void 0);

const $$file = "/home/suga/Dev/final-24/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
