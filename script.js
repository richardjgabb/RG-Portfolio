const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slideIn');
        } else {
            entry.target.classList.remove('slideIn');
        }
    })
})

const projectImage = document.querySelectorAll('.hidden');
projectImage.forEach(card => {
    observer.observe(card);
})