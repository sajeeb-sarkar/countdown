console.log(new Date().getUTCMonth())

const flipCard = document.querySelector('.flip-card') as HTMLElement

function tomorrowDate() {
  let nowDate = new Date()
  const year = nowDate.getFullYear()
  const month = nowDate.getMonth() + 1
  const day = nowDate.getDate() + 1

  return `${year}/${'0'}${month}/${'0'}${day}`
}

const countToDate = new Date(tomorrowDate()) as any


setInterval(() => {
  const currentDate = new Date() as any
  const timeBetweenDate = Math.ceil((countToDate - currentDate) / 1000)
  flipAllCards(timeBetweenDate)
  
}, 250)

function flipAllCards(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)

  flip(document.querySelector('[data-hours-tens]'), Math.floor(hours / 10))
  flip(document.querySelector('[data-hours-ones]'), hours % 10)
  flip(document.querySelector('[data-minutes-tens]'), Math.floor(minutes / 10))
  flip(document.querySelector('[data-minutes-ones]'), minutes % 10)
  flip(document.querySelector('[data-seconds-tens]'), Math.floor(seconds / 10))
  flip(document.querySelector('[data-seconds-ones]'), seconds % 10)
}


function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector('.top') as any
  const startNumber = parseInt(topHalf.textContent)

  if(newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector('.bottom') as any
  const topFlip = document.createElement('div') as any
  topFlip.classList.add('top-flip')
  const bottomFlip = document.createElement('div') as any
  bottomFlip.classList.add('bottom-flip')

  topHalf.textContent = startNumber 
  bottomHalf.textContent = startNumber 
  topFlip.textContent = startNumber 
  bottomFlip.textContent = newNumber


  topFlip.addEventListener('animationstart', e => {
    topHalf.textContent = newNumber
  })

  topFlip.addEventListener('animationend', e => {
    topFlip.remove()
  })

  bottomFlip.addEventListener('animationend', e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })

  flipCard.append(topFlip,bottomFlip)
}



