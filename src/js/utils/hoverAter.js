const hoverAter = (sizeWindow, thisCard, thisItem, { afterHover }) => {
  if (sizeWindow.matches) {
    thisCard.classList.add(afterHover)
    thisItem.addEventListener('mouseleave', () => {
      thisCard.classList.remove(afterHover)
    })
  }
}

export { hoverAter }