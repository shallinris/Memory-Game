/**
 * Created by itc_user1 on 12/28/2016.
 */

var MemoryCardGame = {};
MemoryCardGame.imageArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
MemoryCardGame.cards_flipped = "";
MemoryCardGame.num_cards_flipped = 0;
MemoryCardGame.card1=null;
MemoryCardGame.card2 = null;

function turnCardsOver(e) {
    MemoryCardGame.cards_flipped = e.target;
    if (MemoryCardGame.num_cards_flipped === 0) {
        MemoryCardGame.num_cards_flipped++; //why ++ here?
        MemoryCardGame.card1 = this;
        MemoryCardGame.card1.style.backgroundImage = MemoryCardGame.card1.getAttribute("data-img");
    }

    else {
        MemoryCardGame.card2 = this;
        MemoryCardGame.card2.style.backgroundImage = MemoryCardGame.card2.getAttribute("data-img");
        MemoryCardGame.num_cards_flipped++;

        if (MemoryCardGame.num_cards_flipped === 2) {
            if (MemoryCardGame.card1.getAttribute("data-img") === MemoryCardGame.card2.getAttribute("data-img")) {
                MemoryCardGame.num_cards_flipped = 0;
            }
            else {
                function flipBack() {
                    MemoryCardGame.card1.style.backgroundImage = "url('./images/texture.jpg')";
                    MemoryCardGame.card2.style.backgroundImage = "url('./images/texture.jpg')";
                    MemoryCardGame.num_cards_flipped = 0;
                }

                setTimeout(flipBack, 1000);
            }
        }
        console.log(MemoryCardGame.num_cards_flipped);
    }
}

MemoryCardGame.generateMemoryBoard = (function() {
    var memoryBoard = document.createElement('div');
    memoryBoard.style.width = "800px";
    memoryBoard.style.height = "900px";
    memoryBoard.id = "board";


    var num_cols = 4;
    var num_rows = 3;
    for (var i = 0; i < num_rows; i++) {
        numRows = document.createElement('div');
        numRows.classList.add("rows");

        for (var j = 0; j < num_cols; j++) {
            var numCols = document.createElement('div');
            numCols.classList.add("cardBacks");
            numCols.id = "cards"+j+i; //think about what this is. is it j * i?
            numCols.addEventListener("click", turnCardsOver);
            numRows.appendChild(numCols);
        }
        memoryBoard.appendChild(numRows);
    }
    document.body.appendChild(memoryBoard);
})();


 function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

}
MemoryCardGame.imageArray = shuffle(MemoryCardGame.imageArray);
console.log(MemoryCardGame.imageArray); //this does actually work now

function assignShuffledCardsToDivs() {
    //first assign randomized images to card divs
    for (var i = 0; i < MemoryCardGame.imageArray.length; i++) {
         document.getElementsByClassName("cardBacks")[i].setAttribute("data-img", "url(./images/"+MemoryCardGame.imageArray[i]+".jpg)");
        
        
    }
}

function startNewGame() {
    assignShuffledCardsToDivs();
    //something needs to go here?
}

function init() {
    assignShuffledCardsToDivs();
    startNewGame();
    
}
init();

    

