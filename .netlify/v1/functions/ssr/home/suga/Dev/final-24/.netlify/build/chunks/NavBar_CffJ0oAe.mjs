import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<nav class="w-full fixed bottom-0 lg:top-0 lg:bottom-auto bg-blue-600 text-white flex justify-around items-center py-4 shadow-md lg:flex-row flex-row z-10" data-astro-cid-ymhdp2rl> <a href="/home" class="flex flex-col items-center transition duration-300 hover:text-blue-200 hover:border-b-2 hover:border-blue-200 active:text-blue-300 active:border-b-2 active:border-blue-300" data-link="/home" data-astro-cid-ymhdp2rl> <img src="/assets/icons/home.webp" alt="Inicio" class="w-6 h-6 mb-1" data-astro-cid-ymhdp2rl> <span class="text-xs" data-astro-cid-ymhdp2rl>Inicio</span> </a> <a href="/help" class="flex flex-col items-center transition duration-300 hover:text-blue-200 hover:border-b-2 hover:border-blue-200 active:text-blue-300 active:border-b-2 active:border-blue-300" data-link="/help" data-astro-cid-ymhdp2rl> <img src="/assets/icons/help-icon.webp" alt="Ayuda" class="w-6 h-6 mb-1" data-astro-cid-ymhdp2rl> <span class="text-xs" data-astro-cid-ymhdp2rl>Ayuda</span> </a> <a href="/profile" class="flex flex-col items-center transition duration-300 hover:text-blue-200 hover:border-b-2 hover:border-blue-200 active:text-blue-300 active:border-b-2 active:border-blue-300" data-link="/profile" data-astro-cid-ymhdp2rl> <img src="/assets/icons/profile-icon.webp" alt="Perfil" class="w-6 h-6 mb-1" data-astro-cid-ymhdp2rl> <span class="text-xs" data-astro-cid-ymhdp2rl>Perfil</span> </a> <a href="#" class="flex flex-col items-center transition duration-300 hover:text-blue-200 hover:border-b-2 hover:border-blue-200 active:text-blue-300 active:border-b-2 active:border-blue-300" id="logout-link" data-astro-cid-ymhdp2rl> <img src="/assets/icons/logout-icon.webp" alt="Cerrar Sesi\xF3n" class="w-6 h-6 mb-1" data-astro-cid-ymhdp2rl> <span class="text-xs" data-astro-cid-ymhdp2rl>Cerrar Sesi\xF3n</span> </a> </nav> <script defer>
    const links = document.querySelectorAll('nav a');
    const currentLocation = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('text-blue-300', 'border-b-2', 'border-blue-300', 'active-icon');
        }
    });

    // Funci\xF3n para hacer logout
    document.getElementById('logout-link').addEventListener('click', async (event) => {
        event.preventDefault();
        const response = await fetch('/api/auth/signout');
        if (response.redirected) {
            window.location.href = response.url;
        }
    });
<\/script> `])), maybeRenderHead());
}, "/home/suga/Dev/final-24/src/components/NavBar.astro", void 0);

export { $$NavBar as $ };
