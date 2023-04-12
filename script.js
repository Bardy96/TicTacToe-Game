const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const startCells = [
    '','','',
    '','','',
    '','',''
]

const createBoard = () => { 
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        gameBoard.append(cellElement)
    })
 }

 createBoard()