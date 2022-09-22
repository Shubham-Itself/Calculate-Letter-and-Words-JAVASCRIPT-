const textArea = document.querySelector('#textarea')
let storeChar = document.querySelector('.char')
let storeWord = document.querySelector('.word')


textArea.addEventListener('input' , function(){
    var text = this.value
    let char = text.length
    
    storeChar.innerHTML = char


    text = text.trim()
    let word = text.split(" ")
    let wordLength = word.length
    
    storeWord.innerHTML = wordLength



})


