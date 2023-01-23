const disableCard = (nodeList, { card, disable, callToAction: { defaultMess, disableMess } }) => {
  Array.from(nodeList).forEach((elem) => {
    if (elem.querySelector(card).classList.contains(disable)) {
      elem.style.pointerEvents = 'none'
      elem.querySelector(defaultMess).classList.toggle('disable')
      elem.querySelector(disableMess).classList.toggle('active')
    }
  })
}


export { disableCard }