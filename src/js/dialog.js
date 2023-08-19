const modal = document.querySelector('.feedback__dialog')
const modalMessage = document.querySelector('.feedback__dialog--message')
const openDialog = document.querySelector('.feedback__btn')

const closeDialog = document.getElementById('closeDialog')
const closeDialogMessage = document.getElementById('closeDialogMessage')

closeDialog.addEventListener('click', () => {
  modal.classList.add('feedback__dialog--close')
  modal.close()
})

closeDialogMessage.addEventListener('click', () => {
  modalMessage.close()
})

openDialog.addEventListener('click', openModalAndLockScroll)
modalMessage.addEventListener('close', returnScroll)
modal.addEventListener('close', returnScroll)
openDialog.addEventListener('close', returnScroll)

function openModalAndLockScroll() {
  modal.showModal()
  modal.classList.remove('feedback__dialog--close')
  document.body.classList.add('stop--scroll')
}

function returnScroll() {
  document.body.classList.remove('stop--scroll')
}

modal.addEventListener('click', closeOnBackDropClick)

modalMessage.addEventListener('click', closeOnBackDropClick)

function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget
  const isClickedOnBackDrop = target === dialogElement
  if (isClickedOnBackDrop) {
    dialogElement.close()
    modal.classList.add('feedback__dialog--close')
  }
}
