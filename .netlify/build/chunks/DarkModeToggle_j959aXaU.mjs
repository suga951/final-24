import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                   */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$DarkModeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="switch-container" data-astro-cid-tcsrer47> <div class="sun-moon-container" data-astro-cid-tcsrer47> <span class="sun" data-astro-cid-tcsrer47>&#9728;</span> <!-- unicode para el sol--> <label class="switch" data-astro-cid-tcsrer47> <input type="checkbox" id="themeToggle" data-astro-cid-tcsrer47> <div class="slider" data-astro-cid-tcsrer47></div> </label> <span class="moon" data-astro-cid-tcsrer47>&#9790;</span> <!-- Unicode para la luna --> </div> </div>  <script src="/scripts/toggleDarkMode.js" defer><\/script>'])), maybeRenderHead());
}, "/home/suga/Dev/final-24/src/components/DarkModeToggle.astro", void 0);

export { $$DarkModeToggle as $ };
