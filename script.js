const transparentCards = document.querySelectorAll('.hidden')

transparentCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.remove('hidden');
        console.log('moused')
    })
    card.addEventListener('mouseout', () => {
        card.classList.add('hidden');
        console.log('moused')
    })
})
