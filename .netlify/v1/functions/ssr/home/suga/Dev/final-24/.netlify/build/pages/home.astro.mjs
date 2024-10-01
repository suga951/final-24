/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_C8GAmOa0.mjs';
import { $ as $$NavBar } from '../chunks/NavBar_CffJ0oAe.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
/* empty css                                    */
import { $ as $$DarkModeToggle } from '../chunks/DarkModeToggle_j959aXaU.mjs';
export { renderers } from '../renderers.mjs';

const AlertButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScreenRed, setScreenRed] = useState(false);
  const [isShaking, setShaking] = useState(false);
  const handleButtonClick = () => {
    setScreenRed(true);
    const audio = new Audio("/assets/audio/siren.mp3");
    audio.play();
    setTimeout(() => {
      setModalOpen(true);
    }, 200);
  };
  const closeModal = () => {
    setModalOpen(false);
    setScreenRed(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        id: "alertButton",
        className: `flex flex-col items-center justify-center bg-red-500 text-white w-full h-40 md:h-64 rounded-full shadow-lg transition-all duration-200 hover:shadow-2xl ${isShaking ? "animate-shake" : ""}`,
        onMouseEnter: () => setShaking(true),
        onMouseLeave: () => setShaking(false),
        onClick: handleButtonClick,
        children: [
          /* @__PURE__ */ jsx("img", { className: "w-16 h-16 md:w-20 md:h-20", src: "../assets/icons/alarm-icon.webp", alt: "logo Alerta" }),
          /* @__PURE__ */ jsx("span", { className: "mt-2 md:mt-4", children: "Alertar" })
        ]
      }
    ),
    isModalOpen && /* @__PURE__ */ jsx(
      "section",
      {
        id: "alertModal",
        className: `fixed inset-0 flex items-center justify-center transition-all duration-300 ${isScreenRed ? "bg-red-500 bg-opacity-50" : "bg-gray-900 bg-opacity-50"} dark:bg-opacity-70`,
        children: /* @__PURE__ */ jsxs(
          "article",
          {
            id: "alertModalContent",
            className: "bg-white dark:bg-gray-800 dark:text-white p-6 md:p-10 rounded-lg shadow-2xl w-full max-w-md relative transition-transform duration-300 transform scale-100 opacity-100 z-9999",
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white",
                  id: "closeAlertModalBtn",
                  type: "button",
                  "aria-label": "Cerrar modal",
                  onClick: closeModal,
                  children: "Cerrar"
                }
              ),
              /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl mb-4", children: "Generar Alerta" }) }),
              /* @__PURE__ */ jsxs("form", { action: "/alert", method: "post", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "incident", className: "sr-only", children: "Descripción del Incidente" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      id: "incident",
                      name: "incident",
                      placeholder: "Descripción del incidente",
                      className: "shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "location", className: "sr-only", children: "Ubicación" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "location",
                      name: "location",
                      placeholder: "Ubicación",
                      className: "shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline",
                    children: "Enviar Alerta"
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          50% { transform: translateX(8px); }
          75% { transform: translateX(-8px); }
        }
        .animate-shake {
          animation: shake 0.2s infinite;
        }
      ` })
  ] });
};

function EmergencyMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "fixed left-1/2 transform -translate-x-1/2 z-50", style: { bottom: "90px" }, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "bg-cyan-500 rounded-full px-4 py-2 text-white text-xs flex items-center justify-center border border-black shadow-lg space-x-2",
        onClick: () => setIsOpen(!isOpen),
        children: [
          /* @__PURE__ */ jsx(FaPhoneAlt, {}),
          /* @__PURE__ */ jsx("span", { children: "Números de emergencia" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col space-y-2 slide-in ${isOpen ? "slide-in-open" : ""} shadow-lg`,
        children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:911",
              className: "bg-gradient-to-r from-blue-400 to-blue-600 text-white p-2 rounded-lg flex items-center justify-between w-48 h-12 border border-black shadow-md",
              children: [
                /* @__PURE__ */ jsx("span", { className: "flex-grow text-center", children: "Policía 911" }),
                /* @__PURE__ */ jsx(FaPhoneAlt, {})
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:100",
              className: "bg-gradient-to-r from-red-400 to-red-600 text-white p-2 rounded-lg flex items-center justify-between w-48 h-12 border border-black shadow-md",
              children: [
                /* @__PURE__ */ jsx("span", { className: "flex-grow text-center", children: "Bomberos 100" }),
                /* @__PURE__ */ jsx(FaPhoneAlt, {})
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:107",
              className: "bg-gradient-to-r from-green-400 to-green-600 text-white p-2 rounded-lg flex items-center justify-between w-48 h-12 border border-black shadow-md",
              children: [
                /* @__PURE__ */ jsx("span", { className: "flex-grow text-center", children: "SAME 107" }),
                /* @__PURE__ */ jsx(FaPhoneAlt, {})
              ]
            }
          )
        ]
      }
    )
  ] });
}

const $$Home = createComponent(($$result, $$props, $$slots) => {
  const communityId = 9182309816;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AlertAR - Inicio." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ThemeIcon", $$DarkModeToggle, {})} ${maybeRenderHead()}<main class="flex justify-center items-center min-h-screen"> ${renderComponent($$result2, "Navbar", $$NavBar, {})} <div class="container w-4/5 md:mt-0 mb-28"> <div class="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-1 items-center justify-center md:grid-areas-layout"> <!-- Boton de Reporte --> <a href="/reports" class="bg-blue-500 text-white flex flex-col items-center justify-center w-full h-28 md:h-44 rounded-full shadow-2xl transition-all duration-200 hover:shadow-lg md:row-start-1 md:col-start-1"> <img class="w-10 h-10 md:w-14 md:h-14" src="../assets/icons/report-icon.webp" alt="logo Reporte"> <span class="mt-2 md:mt-3 text-sm md:text-base">Reportes</span> </a> <!-- Boton de Chat --> <a${addAttribute(`/chat/${communityId}`, "href")} class="bg-green-500 text-white flex flex-col items-center justify-center w-full h-28 md:h-44 rounded-full shadow-2xl transition-all duration-200 hover:shadow-lg z--10 md:row-start-1 md:col-start-3"> <img class="w-10 h-10 md:w-14 md:h-14" src="../assets/icons/chat-icon.webp" alt="logo Chat"> <span class="mt-2 md:mt-3 text-sm md:text-base">Chat Vecinal</span> </a> <!-- Boton de Alerta --> ${renderComponent($$result2, "AlertButton", AlertButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/suga/Dev/final-24/src/components/AlertButton.jsx", "client:component-export": "default" })} </div> </div> ${renderComponent($$result2, "EmergencyMenu", EmergencyMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/EmergencyMenu", "client:component-export": "default" })} </main> ` })}`;
}, "/home/suga/Dev/final-24/src/pages/home.astro", void 0);

const $$file = "/home/suga/Dev/final-24/src/pages/home.astro";
const $$url = "/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
