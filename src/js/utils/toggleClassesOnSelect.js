const toggleClassesOnSelect = (currentElement, { card, selected, callToAction: { defaultMess, selectedMess } }) => {
  const currentCard = currentElement.querySelector(card)
  currentCard.classList.toggle(selected)
  currentElement.querySelector(defaultMess).classList.toggle('disable')
  currentElement.querySelector(selectedMess).classList.toggle('active')
}

export { toggleClassesOnSelect }