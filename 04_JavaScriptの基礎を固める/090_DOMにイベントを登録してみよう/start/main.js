const btn = document.querySelector('#btn');

function hello() {
    this.style.color = 'red';
}
btn.addEventListener('click', hello);
// btn.removeEventListener("click", hello);
