<<<<<<< HEAD
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

=======
import { getAuth } from "firebase-admin/auth"
import { app } from "../../../firebase/server"

export const POST = async ({ request, redirect }) => {
  const auth = getAuth(app)

  /* Get form data */
  const formData = await request.formData()

  const email = formData.get("email")?.toString()
  const password = formData.get("password")?.toString()
  const name = formData.get("name")?.toString()

  if (!email || !password || !name) {
    return new Response(
      "Falta uno o más campos",
      { status: 400 }
    )
  }

  /* Create user */
>>>>>>> arsabot-rs
  try {
    await auth.createUser({
      email,
      password,
      displayName: name,
<<<<<<< HEAD
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
  return redirect("/");
};
=======
    })
  } catch (error) {
    console.log(error)
    return new Response(
      "Something went wrong",
      { status: 400 }
    )
  }
  return redirect("/user-created")
}
>>>>>>> arsabot-rs
