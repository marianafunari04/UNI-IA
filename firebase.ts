// Importa o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
// Caso vá usar banco de dados depois, já pode importar:
// import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDEA5e1VA-beatJs5e04XTy0CTI_9jXuw",
  authDomain: "uni-ia.firebaseapp.com",
  projectId: "uni-ia",
  storageBucket: "uni-ia.firebasestorage.app",
  messagingSenderId: "383520334593",
  appId: "1:383520334593:web:19acce61dcd6a1e699f100",
  measurementId: "G-KHXQXYFF1V"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("✅ Firebase inicializado com sucesso:", app);

export { app, analytics };
