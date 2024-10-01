import { getAuth } from 'firebase-admin/auth';
import { a as app } from '../../../chunks/server_1hFA-0b5.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  const auth = getAuth(app);

  const formData = await request.formData();

  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();

  if (!email || !password || !name) {
    return new Response(
      "Falta uno o más campos",
      { status: 400 }
    )
  }

  try {
    await auth.createUser({
      email,
      password,
      displayName: name,
    });
  } catch (error) {
    console.log(error);

    if (error.code === "auth/email-already-exists") {
      return new Response(
        "Ya existe un usuario con este correo",
        { status: 400 }
      )
    }

  
    return new Response(
      "Algo salió mal",
      { status: 400 }
    )
  }

  return redirect("/user-created")
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
