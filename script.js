const current = document.querySelector('.current');
const next = document.querySelector('.next');
const inp = document.querySelector('input');
let btn = document.querySelector('button');

btn.addEventListener('click', startCounter);

function startCounter() {
    let finalScore = parseInt(inp.value);
    if (inp.value === "") {
        return;
    }
    let currentScore = 0;
    current.textContent = 0;
    let interval = setInterval(function () {
        currentScore++;
        next.classList.add('animate');
        next.textContent = currentScore;
        setTimeout(() => {
            next.classList.remove('animate');
            current.textContent = currentScore;
        }, 500)
        if (currentScore >= finalScore) {
            clearInterval(interval);
        }
    }, 1000);
}

function animate() {

}
