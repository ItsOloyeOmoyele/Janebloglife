const likeButtons = document.querySelectorAll('.like');

likeButtons.forEach(item => {
    item.addEventListener('click', () => {
        item.innerHTML = `<i class='fa-solid fa-check'></i>Liked`
    })
})
