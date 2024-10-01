import { d as db } from '../../../chunks/client_DSYSRTwb.mjs';
import { updateDoc, doc } from 'firebase/firestore';
export { renderers } from '../../../renderers.mjs';

async function PUT ({ request, params }) {
  const { userId } = params;
  const { communityId } = await request.json();

  try {
    await updateDoc(doc(db, "users", userId), {
      communityId: communityId,
    });

    return new Response(JSON.stringify({ message: "Usuario actualizado con éxito" }), { status: 200 })
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return new Response(JSON.stringify({ message: "Error al actualizar usuario" }), { status: 500 })
  }
}

async function GET ({ params }) {
  const { userId } = params;

  try {
    const doc = await db.collection("users").doc(userId).get();
    const data = doc.data();

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    return new Response(JSON.stringify({ message: "Error al obtener usuario" }), { status: 500 })
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
