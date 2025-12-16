const btn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');

btn.addEventListener('click', () => {
    surprise.classList.toggle('hidden');
    btn.textContent = surprise.classList.contains('hidden') ? "Click for Surprise" : "Hide Surprise";
});
