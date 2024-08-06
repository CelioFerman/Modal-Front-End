

const OpenModalButton = document.querySelector('#openModal')
const closeModalButton = document.querySelector('#closeModal');
const toMarkButton = document.querySelector('#toMark');
const markOffButton = document.querySelector('#markOff');
const recordButton = document.querySelector('#toRecord')
const modalBody = document.querySelector('#modalBody')

const toggleModal = () => {
    [fade, modal].forEach((el) => el.classList.toggle('hide'));
}

const markAll = () => {

}

[
    OpenModalButton,
    closeModalButton,
    fade
].forEach((el) => {el.addEventListener('click', () => toggleModal());
});







