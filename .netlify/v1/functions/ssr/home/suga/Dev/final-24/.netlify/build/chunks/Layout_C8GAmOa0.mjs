import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, f as renderSlot, b as createAstro } from './astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/public/assets/img/logo.webp"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gradient-to-b from-blue-600 to-blue-200 text-black dark:bg-gradient-to-b dark:from-blue-800 dark:to-black dark:text-white h-80"> <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/suga/Dev/final-24/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
