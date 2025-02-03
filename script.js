const countDownDate = new Date(2025, 3, 25, 10, 0, 0).getTime(); // March 25, 2025 at 10:00:00

// Update the countdown every second
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        // If the date has passed
        countdownElement.innerHTML = "WEBSITE LAUNCHED!";
        clearInterval(x);
    } else {
        // Format the countdown display
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

updateCountdown();
const x = setInterval(updateCountdown, 1000);