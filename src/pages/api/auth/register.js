import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server.js";

export const POST = async ({ req, redirect }) => {
  const auth = getAuth(app);

  const formData = await request.formData();

  const email = formData.get("email")?.toString();
  const password = formData.get("email")?.toString();
  const name = formData.get("name")?.toString();

  if (!email || !password || !name) {
    return new Response("Falta uno o mas campos", { status: 400 });
  }

  try {
    await auth.createUser({
      email,
      password,
      displayName: name,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
  return redirect("/");
};
