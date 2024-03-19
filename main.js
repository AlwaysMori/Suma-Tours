// main.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

document.addEventListener("DOMContentLoaded", function () {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCSPrg39bcLvbg4iSZU_8NBftmflaBDZJs",
        authDomain: "nandaiot.firebaseapp.com",
        databaseURL: "https://nandaiot-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "nandaiot",
        storageBucket: "nandaiot.appspot.com",
        messagingSenderId: "347985361587",
        appId: "1:347985361587:web:cea436aacdc9871c714ec6",
        measurementId: "G-P0LBXE4TX0"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    // Handle form submission
    const orderForm = document.getElementById("orderForm");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form data
        const formData = {
            nama: document.getElementById("nama").value,
            email: document.getElementById("email").value,
            telepon: document.getElementById("telepon").value,
            tanggalPemesanan: document.getElementById("tanggal-pemesanan").value,
            pesan: document.getElementById("pesan").value
        };

        // Save data to Firebase Realtime Database
        const database = app.database();
        const ordersRef = database.ref("orders");
        ordersRef.push(formData)
            .then(() => {
                // Data successfully saved
                console.log("Order data has been saved to Firebase!");
                // You can add additional actions or redirect the user here
            })
            .catch((error) => {
                // Handle errors
                console.error("Error saving order data:", error);
            });
    });
});
