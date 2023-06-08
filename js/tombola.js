
const numeriEstratti = []

const createTombola = function (numbers) {

    const tombolaDiv = document.getElementById('tabellaTombola')
    
    for (let i = 1; i <= numbers; i++) {
        cellaTombola = document.createElement('div')
        let tombolaNumber = document.createElement('h3')
        cellaTombola.classList.add('tombolaNumberStyle')
        tombolaNumber.innerText = i
        cellaTombola.appendChild(tombolaNumber)
        tombolaDiv.appendChild(cellaTombola)
    }
    
}

createTombola(76)

const EstrazioneNumero = (e) => {
    let n = Math.floor(Math.random() * 77);
    if (!numeriEstratti.includes(n) && n !== 0) {
        let numberOnTable = document.querySelectorAll('.tombolaNumberStyle h3')[n-1]
        console.log(numberOnTable);
        numberOnTable.classList.add('estratto')
        numeriEstratti.push(n)
        console.log(numeriEstratti);
        
    } else if(numeriEstratti.length === 76) {
        alert("Sono usciti tutti i numeri")
    } else EstrazioneNumero()
}

const estrazioneButton = document.querySelector('button')
estrazioneButton.addEventListener("click", EstrazioneNumero)
