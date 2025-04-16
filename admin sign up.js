import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

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

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let aname = document.querySelector("#s-name").value;
    let aemail = document.querySelector("#s-email").value;
    let apass = document.querySelector("#s-pass").value;
    let acpass = document.querySelector("#s-cpass").value;

    if (apass !== acpass) {
        document.querySelector("#error-message").textContent = "Passwords do not match.";
        return;
    }
    document.querySelector("#error-message").textContent = "";

    createUserWithEmailAndPassword(auth, aemail, apass)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User created:", user);
            alert("Account created successfully!"); 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.querySelector("#error-message").textContent = errorMessage;
            console.log("Error:", errorCode, errorMessage);
        });
});


