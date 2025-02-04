function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt","Mayk Brito gay no modo light")
  } else {
    // se tiver dark mode, adicionar imagem dark
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt","Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo")
  }

  
  
}