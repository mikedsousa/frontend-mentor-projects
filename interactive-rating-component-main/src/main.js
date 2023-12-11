const BUTTONS = document.querySelectorAll('.buttons1, .buttons2, .buttons3, .buttons4, .buttons5')
const MAIN = document.querySelector('.main')
const RATED = document.querySelector('.rated')
const SUBMIT = document.querySelector('#botao')
const SCORE = document.querySelector('.rate')

for (let i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].addEventListener('click', ()=> {
        console.log(BUTTONS[i].value)
       
        SUBMIT.addEventListener('click', () => {
            MAIN.classList.replace('show', 'hide')
            RATED.classList.replace('hide', 'show')

            SCORE.innerText = `You selected ${BUTTONS[i].value} out of 5` 

        })
        
        setTimeout(function() {
            
            RATED.classList.replace('show', 'hide')
            MAIN.classList.replace('hide', 'show')
          }, 5000)

    })

   
}

