import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBUrKAT4ZTTAQjgVLuf83oGe2hI5LfGhPk",
    authDomain: "food-panda-application-2a839.firebaseapp.com",
    projectId: "food-panda-application-2a839",
    storageBucket: "food-panda-application-2a839.firebasestorage.app",
    messagingSenderId: "354197474968",
    appId: "1:354197474968:web:e1051ccd600a6c3fc78aed",
    measurementId: "G-PZKVKPFKN5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let email = document.querySelector("#l-email").value;
    let pass = document.querySelector("#l-pass").value;

    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      Swal.fire({
        title: "Login Success",
        icon: "success",
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Something went wrong!",
        footer: `<a href="./admin sign up.html">sign up</a>`,
      });
    });
});


