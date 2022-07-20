// Define constant variable which we use to generate random number in upperlimit
const yLength = 5;
const xLength = 7;

// We need to first handle the click event.
// Once we have function which calls upon td-click, we will manage code in that function
function starter() {
    let allCell = document.querySelectorAll('td');
    for (let singleCell of allCell) {
        singleCell.addEventListener('click', getTdId);
    }
}

// Fetch cell id with Nighbours id and call function for toggle the color
function getTdId(ev) {
    //alert('Hi this is click');
    // console.log(ev.target.id);
    let targettedCellId = ev.target.id;
    let yNumber = targettedCellId[2];
    let xNumber = targettedCellId[6];
    // console.log(yNumber, xNumber);
    // console.log(typeof (yNumber));
    // Now yNumber & xNumber are of string so we need to conver to it in Number for math addition procedure otherwiste it will combine numbers as string concatation
    yNumber = Number(yNumber);
    xNumber = Number(xNumber);
    // console.log(typeof (yNumber));
    toggleGroup(yNumber, xNumber);
    // Check for win
    // console.log(typeof (checkForWin()));
    if (checkForWin()) {
        displayMsg();
    }
}

function toggleGroup(yNumber, xNumber) {
    toggleCell(yNumber, xNumber);

    //Call for nightbour id toggle
    toggleCell(yNumber - 1, xNumber);
    toggleCell(yNumber + 1, xNumber);
    toggleCell(yNumber, xNumber - 1);
    toggleCell(yNumber, xNumber + 1);

}

// Add class 'on' to to-id
function toggleCell(y, x) {
    let toggleId = `y-${y}-x-${x}`;
    // console.log(toggleId);
    // Check if border cell clicks and having cells on top & right or left or bottom
    // So check first id is exists or not
    if (document.getElementById(toggleId)) {
        document.getElementById(toggleId).classList.toggle('on');
    }
}

function checkForWin() {
    let allTds = document.querySelectorAll('td');
    for (let singleTd of allTds) {
        if (singleTd.classList.contains('on')) {
            return false;
        }
    }
    return true;
}

function displayMsg() {
    alert('Bravo Man! You did it! Dilip is fan of you.');
}

// Load borad with some cells on at initial stage
function randomBoard() {
    for (let i = 0; i < 3; i++) {
        let xVar = randomNum(xLength);
        // console.log(typeof (xVar));
        let yVar = randomNum(yLength);
        toggleGroup(yVar, xVar);
    }

    // let dynamicID = `y-${yVar}-x-${xVar}`;
    // console.log(dynamicID);
    // document.getElementById(`y-${yVar}-x-${xVar}`).classList.toggle('on');
}

function randomNum(upperLimit) {
    let randomN = Math.floor(Math.random() * upperLimit);
    console.log(randomN);
    return randomN;
}

randomBoard();
starter();