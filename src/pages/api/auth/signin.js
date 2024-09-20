import { app } from '../../../firebase/server';
import { getAuth } from "firebase-admin/auth";

export const POST = async ({ request, cookies, redirect }) => {
  const auth = getAuth(app);
  
  // Obtener el token de autorización desde los headers
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];  
  if (!idToken) {
    return new Response("No token found", { status: 401 });
  }

  try {
    // Verificar el token con Firebase Admin
    await auth.verifyIdToken(idToken);
  } catch (error) {
    console.error("Error verifying token:", error); // Log para depuración
    return new Response("Invalid token", { status: 401 });
  }

  // Crear una cookie de sesión que dura 5 días
  const fiveDays = 60 * 60 * 24 * 5 * 1000;
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: fiveDays,
  });

  // Guardar la cookie de sesión en el navegador
  cookies.set("__session", sessionCookie, {
    path: "/",
    httpOnly: true,  // Asegurar que solo el servidor puede acceder a la cookie
    secure: true,    // Usar HTTPS para la cookie
    sameSite: "Lax"  // Proteger contra CSRF
  });

  // Redirigir al chat si el inicio de sesión fue exitoso
  return redirect("/chat");
};
