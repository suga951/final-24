import { useState, useEffect } from "react"
import "../layouts/styles.css"
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import {
  getFirestore,
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore"
import { auth, app } from "../firebase/client"

const db = getFirestore(app)

function App ({ communityId }) {
  const [user, setUser] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  const sendMessage = async () => {
    if (newMessage.trim() === "") return
    await addDoc(collection(db, "messages"), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      communityId: communityId,
      timestamp: serverTimestamp(),
    })

    setNewMessage("")
  }

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth) // Cerrar sesión
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col justify-between py-10">
      {user ? (
        <div className="w-full max-w-md mx-auto">
          <div className="text-white mb-4">
            Sesion de {user.displayName}
            <button
              className="ml-4 bg-red-500 text-white p-2 rounded"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
          <div className="chat-box flex-grow flex-col-reverse overflow-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message flex ${msg.data.uid === user.uid ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`message flex flex-row p-3 gap-3 rounded-[20px] items-center ${msg.data.uid === user.uid
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                    }`}
                >
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={msg.data.photoURL}
                    alt="User Avatar"
                  />
                  <span>{msg.data.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Escribe un mensaje..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage()
                }
              }}
            />
            <button
              className="bg-blue-500 rounded-full text-white p-3"
              onClick={sendMessage}
            >
              Enviar
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-white rounded-[10px] p-3"
          onClick={handleGoogleLogin}
        >
          Ingresar con Google
        </button>
      )}
    </div>
  )
}

export default App
