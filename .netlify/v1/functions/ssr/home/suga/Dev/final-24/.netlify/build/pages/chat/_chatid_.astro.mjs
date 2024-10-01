/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_BAo5IgvU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_C8GAmOa0.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
/* empty css                                       */
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore, query, collection, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { a as app, b as auth } from '../../chunks/client_DSYSRTwb.mjs';
import { $ as $$NavBar } from '../../chunks/NavBar_CffJ0oAe.mjs';
export { renderers } from '../../renderers.mjs';

const db = getFirestore(app);
function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    onAuthStateChanged(auth, (user2) => {
      if (user2) {
        setUser(user2);
      } else {
        setUser(null);
      }
    });
  }, []);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const sendMessage = async () => {
    if (newMessage.trim() === "") return;
    await addDoc(collection(db, "messages"), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp()
    });
    setNewMessage("");
  };
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-between py-10 min-h-screen", children: user && /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "chat-box flex-grow overflow-y-auto max-h-[60vh]", children: [
      messages.map((msg) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `message flex flex-col ${msg.data.uid === user.uid ? "items-end" : "items-start"}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-900 mb-1", children: msg.data.displayName }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: `message flex flex-row p-3 gap-3 rounded-[20px] items-center ${msg.data.uid === user.uid ? "bg-blue-500 text-white" : "bg-white text-black"}`,
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      className: "w-10 h-10 rounded-full mr-3",
                      src: msg.data.photoURL,
                      alt: "User Avatar"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { children: msg.data.text })
                ]
              }
            )
          ]
        },
        msg.id
      )),
      /* @__PURE__ */ jsx("div", { ref: chatEndRef })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "input-container flex mt-4", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          value: newMessage,
          onChange: (e) => setNewMessage(e.target.value),
          placeholder: "Escribe un mensaje...",
          className: "flex-grow p-2 border border-gray-300 rounded-l",
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-blue-500 rounded-r text-white p-3",
          onClick: sendMessage,
          children: "Enviar"
        }
      )
    ] })
  ] }) });
}

const $$Astro = createAstro();
const $$chatId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$chatId;
  const { chatId } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Chat #${chatId}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="absolute top-4 left-4"> <a href="/home" class="text-blue-200 dark:text-blue-300 font-semibold hover:no-underline"> <span class="mr-2 text-lg">&larr;</span> Volver
</a> </nav> ${renderComponent($$result2, "App", App, { "client:load": true, "communityId": chatId, "client:component-hydration": "load", "client:component-path": "@/components/ChatApp.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "NavBar", $$NavBar, {})} ` })}`;
}, "/home/suga/Dev/final-24/src/pages/chat/[chatId].astro", void 0);

const $$file = "/home/suga/Dev/final-24/src/pages/chat/[chatId].astro";
const $$url = "/chat/[chatId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$chatId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
