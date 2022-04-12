;(function () {
  const listElements = document.querySelectorAll('.menu_item--show')
  const list = document.querySelector('.menu_links')
  const menu = document.querySelector('.menu_hamburguer')

  const addClick = () => {
    listElements.forEach(element => {
      element.addEventListener('click', () => {
        let subMenu = element.children[1]
        let height = 0
        element.classList.toggle('menu_item--active')

        console.log(menu.clientHeight)

        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight
        }

        subMenu.style.height = `${height}px`
      })
    })
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
      deleteStyleHeight()
      if (list.classList.contains('menu_links--show'))
        list.classList.remove('menu_links--show')
    } else {
      addClick()
    }
  })

  if (window.innerWidth <= 800) {
    addClick()
  }
  menu.addEventListener('click', () =>
    list.classList.toggle('menu_links--show')
  )
})()

var botao = document.getElementById('btn')
botao.addEventListener('click', function () {
  window.alert('Formulário enviado com sucesso!')
})
