/* ----------------- Partículas de tecnologia (emojis) ----------------- */
const canvas = document.getElementById('techCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Emojis de tecnologia
const techEmojis = ['💻','🖥️','🖱️','⚙️','🧑‍💻','📱'];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 30 + 20;
        this.speedY = Math.random() * 1 + 0.5;
        this.text = techEmojis[Math.floor(Math.random() * techEmojis.length)];
        this.opacity = Math.random() * 0.3 + 0.1; // mais transparente
    }

    update() {
        this.y -= this.speedY;
        if (this.y < -50) {
            this.y = canvas.height + 50;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size}px Arial`;
        ctx.fillText(this.text, this.x, this.y);
        ctx.globalAlpha = 1;
    }
}

const particlesArray = [];
for (let i = 0; i < 50; i++) {
    particlesArray.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

animate();

/* ----------------- Menu responsivo ----------------- */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
