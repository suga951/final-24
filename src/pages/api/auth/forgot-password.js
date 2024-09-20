// /src/pages/api/forgot-password.js
import { getAuth } from 'firebase-admin/auth';
import { app } from '../../../firebase/server';

export async function POST({ request }) {
  const auth = getAuth(app);

  const { email } = await request.json();

  if (!email) {
    return new Response(JSON.stringify({ error: 'Correo electrónico es requerido' }), { status: 400 });
  }

  try {
    // Enviar correo de restablecimiento
    await auth.generatePasswordResetLink(email);
    return new Response(JSON.stringify({ message: 'Correo de restablecimiento enviado' }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo de restablecimiento:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el correo de restablecimiento' }), { status: 500 });
  }
}
