import * as flsFunctions from './modules/functions.js'
import { selectCard } from './modules/selectCard.js'
import { disableCard } from './modules/disableCard.js'

flsFunctions.isWebp()

const cards = document.querySelectorAll('.main__box')
const mediaQuery = window.matchMedia('(min-width: 1300px)')

const parameters = {
  item: '.main__box',
  card: '.main__shell',
  selected: 'main__shell_selected',
  disable: 'main__shell_disable',
  callToAction: {
    defaultMess: '.main__calltoaction-text_default',
    selectedMess: '.main__calltoaction-text_selected',
    disableMess: '.main__calltoaction-text_disabled',
    btn: 'main__calltoaction-btn',
    blockMess: 'main__calltoaction',
    blockMessChild: 'main__calltoaction-text',
  },
  afterHover: 'block',
}

document.addEventListener('click', (e) => selectCard(e, parameters, mediaQuery))
document.addEventListener('DOMContentLoaded', () => disableCard(cards,parameters))

