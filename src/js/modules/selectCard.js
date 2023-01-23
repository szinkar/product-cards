import { toggleClassesOnSelect } from '../utils/toggleClassesOnSelect.js'
import { hoverAter } from '../utils/hoverAter.js'

const selectCard = (
  e,
  { item, card, selected, callToAction: { defaultMess, selectedMess, btn, blockMess, blockMessChild }, afterHover },
  sizeWindow
) => {
  e.preventDefault()
  const currentItem = e.target.closest(item)
  const isBtnClicked = e.target.classList.contains(btn)
  const isMessClicked = e.target.classList.contains(blockMess)
  const isMessChildrenClicked = e.target.classList.contains(blockMessChild)
  if ((currentItem && !isMessClicked && !isMessChildrenClicked) || isBtnClicked) {
    const currentCard = currentItem.querySelector('.main__shell')

    toggleClassesOnSelect(currentItem, { card, selected, callToAction: { defaultMess, selectedMess } })
    hoverAter(sizeWindow, currentCard, currentItem, { afterHover })
  }
}


export { selectCard }