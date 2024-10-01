import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_C42KkGeP.mjs';
import { onRequest } from './_noop-middleware.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/alert.astro.mjs');
const _page2 = () => import('./pages/api/auth/register.astro.mjs');
const _page3 = () => import('./pages/api/auth/signin.astro.mjs');
const _page4 = () => import('./pages/api/auth/signout.astro.mjs');
const _page5 = () => import('./pages/api/user/_userid_.astro.mjs');
const _page6 = () => import('./pages/change-password.astro.mjs');
const _page7 = () => import('./pages/chat/_chatid_.astro.mjs');
const _page8 = () => import('./pages/forgot-password.astro.mjs');
const _page9 = () => import('./pages/help.astro.mjs');
const _page10 = () => import('./pages/home.astro.mjs');
const _page11 = () => import('./pages/join-community.astro.mjs');
const _page12 = () => import('./pages/profile.astro.mjs');
const _page13 = () => import('./pages/reports.astro.mjs');
const _page14 = () => import('./pages/terms-and-conditions.astro.mjs');
const _page15 = () => import('./pages/user-created.astro.mjs');
const _page16 = () => import('./pages/welcome.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/alert.astro", _page1],
    ["src/pages/api/auth/register.js", _page2],
    ["src/pages/api/auth/signin.js", _page3],
    ["src/pages/api/auth/signout.js", _page4],
    ["src/pages/api/user/[userId].js", _page5],
    ["src/pages/change-password.astro", _page6],
    ["src/pages/chat/[chatId].astro", _page7],
    ["src/pages/forgot-password.astro", _page8],
    ["src/pages/help.astro", _page9],
    ["src/pages/home.astro", _page10],
    ["src/pages/join-community.astro", _page11],
    ["src/pages/profile.astro", _page12],
    ["src/pages/reports.astro", _page13],
    ["src/pages/terms-and-conditions.astro", _page14],
    ["src/pages/user-created.astro", _page15],
    ["src/pages/welcome.astro", _page16],
    ["src/pages/index.astro", _page17]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a9136b48-db9c-497d-b9a6-56c6a5d5fc2f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
