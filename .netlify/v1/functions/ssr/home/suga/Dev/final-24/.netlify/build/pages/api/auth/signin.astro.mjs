import { a as app } from '../../../chunks/server_1hFA-0b5.mjs';
import { getAuth } from 'firebase-admin/auth';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies }) => {
  const auth = getAuth(app);

  // Obtener el token de autorización desde los headers
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response(JSON.stringify({ message: "No token found" }), { status: 401 });
  }

  try {
    // Verificar el token con Firebase Admin
    await auth.verifyIdToken(idToken);
  } catch (error) {
    console.error("Error verifying token:", error);
    return new Response(JSON.stringify({ message: "Invalid token" }), { status: 401 });
  }

  // Crear una cookie de sesión
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: 60 * 60 * 24 * 5 * 1000, // Cookie para 5 días
  });

  // Guardar la cookie de sesión en el navegador
  cookies.set("__session", sessionCookie, {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "Lax",
  });

  // Devolver la URL de redirección en JSON
  return new Response(JSON.stringify({ url: "/home" }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
