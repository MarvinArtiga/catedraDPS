// Importar la función necesaria desde el SDK de Firebase
import { initializeApp } from "firebase/app";

// Tu configuración de Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCOcOyR9b2-DJCD2wMaMf-U5GesAUDNti0",
  authDomain: "blurrlogin.firebaseapp.com",
  projectId: "blurrlogin",
  storageBucket: "blurrlogin.appspot.com",
  messagingSenderId: "986118133904",
  appId: "1:986118133904:web:4455275d48ee21d9e16015"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la aplicación inicializada
export default app;
