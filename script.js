const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNo() {
    const noBtn = document.querySelector('.no-btn');
    const yesBtn = document.querySelector('.yes-btn');
    
    // Change no button text to next message
    noBtn.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Make yes button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize) || 17.6;
    yesBtn.style.fontSize = currentSize * 1.2 + 'px';
    yesBtn.style.padding = (currentSize * 1.2 * 0.7) + 'px ' + (currentSize * 1.2 * 1.7) + 'px';
}

function handleYes() {
    const messageEl = document.getElementById('message');
    messageEl.textContent = '🎉 Yay! You made me the happiest! 💕';
    document.querySelector('.button-group').style.display = 'none';
    
    // Simple confetti effect
    createConfetti();
}

function createConfetti() {
    const colors = ['#ff1744', '#ff5722', '#ffeb3b', '#4caf50', '#2196f3'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 3 + 2;
        confetti.animate([
            { transform: 'translateY(0)', opacity: 1 },
            { transform: 'translateY(' + window.innerHeight + 'px)', opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => confetti.remove(), duration * 1000);
    }
}
