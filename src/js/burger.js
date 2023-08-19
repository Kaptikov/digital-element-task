const burger = document?.querySelector('[data-burger]')

burger?.addEventListener('click', () => {
  burger?.classList.toggle('burger--active')
})
