function modal() {
    const card = document.querySelectorAll('.gifts__card');
    const modal = document.querySelector('.modal');
    const buttonClose = document.querySelector('.modal__close');
    card.forEach(item => {
        item.addEventListener('click', () => {
            modal.classList.add('show');
            document.body.classList.add('hidden');
        })
    })
    buttonClose.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.classList.remove('hidden');
    })
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.classList.remove('hidden');
        }
    })
}
export default modal;