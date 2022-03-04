const hamburgerLines = document.querySelector(".hamburger");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    hamburgerMenu.style.display = 'none'
    
    hamburgerLines.addEventListener('click', () => {
      if(hamburgerMenu.style.display === "block"){
        hamburgerMenu.style.display = "none"
      }else {
        hamburgerMenu.style.display = "block"
      }
    })
