import { db } from "../client.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addUser() {
  try {
    await addDoc(collection(db, "users"), {
      name: "John",
      email: "gDkxI@example.com",
    });
    console.log("Doc added");
  } catch (error) {
    console.error("Error adding doc", error);
  }
}

async function getUsers() {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  } catch (error) {
    console.error("Error getting doc", error);
  }
}
