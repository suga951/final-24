/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C8GAmOa0.mjs';
import { $ as $$NavBar } from '../chunks/NavBar_CffJ0oAe.mjs';
export { renderers } from '../renderers.mjs';

const $$Alert = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AlertAR - Alerta creada" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Alert", Alert, {})} ${renderComponent($$result2, "NavBar", $$NavBar, {})} ` })}`;
}, "/home/suga/Dev/final-24/src/pages/alert.astro", void 0);

const $$file = "/home/suga/Dev/final-24/src/pages/alert.astro";
const $$url = "/alert";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Alert,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
