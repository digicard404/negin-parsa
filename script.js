const video = document.getElementById("weddingVideo");

document.addEventListener("click", () => {
    video.muted = false;   // صدا فعال می‌شود
    video.play();          // ادامه پلی
}, { once: true });         // فقط یک بار اجرا شود

// تاریخ مراسم:
let weddingDate = new Date("2025-12-17 18:00:00").getTime();

function updateTimer() {
    let now = new Date().getTime();
    let diff = weddingDate - now;

    if (diff <= 0) {
        document.getElementById("day").innerHTML = "0";
        document.getElementById("hour").innerHTML = "0";
        document.getElementById("min").innerHTML = "0";
        document.getElementById("sec").innerHTML = "0";
        return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
}

setInterval(updateTimer, 1000);


function sendRSVP(status) {
    let name = document.getElementById("guestName").value;

    if (!name.trim()) {
        alert("لطفاً اسم خود را وارد کنید 🌸");
        return;
    }

    // شماره واتساپ مقصد
    let phone = "989045519153"; // ← اینجا شماره عروس یا خودت +98

    let text = "";

    if (status === "yes") {
        text = `سلام، من ${name} هستم.\nبرای مراسم میام 🌸`;
    } else {
        text = `سلام، من ${name} هستم.\nمتاسفانه نمی‌تونم بیام 💐`;
    }

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
}