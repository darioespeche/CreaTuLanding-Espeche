// Importar las funciones necesarias desde Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración del proyecto en Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBbUXXHQ1m7PB4MZdhN1yQzfVrTJvWf0u",
  authDomain: "experienciaslocales-16b0b.firebaseapp.com",
  projectId: "experienciaslocales-16b0b",
  storageBucket: "experienciaslocales-16b0b.appspot.com",
  messagingSenderId: "63206453480",
  appId: "1:63206453480:web:5d5382fdfcd75fc3eb195d",
  measurementId: "G-XGNHFSZ77",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos Firestore
export const db = getFirestore(app);
console.log("✅ Firebase inicializado correctamente:", db);
