function burgerButton() {
    const burgerButton = document.querySelector('#burger-button');
    const overlay = document.querySelector('#overlay');
    burgerButton.addEventListener('click', () => {
    overlay.classList.toggle('show');
    burgerButton.classList.toggle('burger-button--close');
    document.body.classList.toggle('hidden');
});
}
export default burgerButton;