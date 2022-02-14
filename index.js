const title = document.querySelector('h1');

console.log(title);

title.addEventListener('click', () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank').focus();
})