// /**
//  * Created by itc_user1 on 12/27/2016.
//  */
// //this works ish
// var memory_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L',];
// var memory_values = [];
// var memory_tile_ids = [];
// var tiles_flipped = 0;
//
// Array.prototype.memory_tile_shuffle = function() {
//     var i = this.length, j, temp;
//     while (--i > 0) {
//         j = Math.floor(Math.random() * (i + 1));
//         temp = this[j];
//         this[j] = this[i];
//         this[i] = temp;
//     }
// };
// function newBoard() {
//     tiles_flipped = 0;
//     var output = '';
//     memory_array.memory_tile_shuffle();
//     for (var i = 0; i < memory_array.length; i++) {
//         output += '<div id = "tile_'+i+'" onclick = "memoryFlipTile(this,\''+ memory_array[i] + '\')"></div>';
//     }
//     document.getElementById('memory_board').innerHTML = output;
// }
// function memoryFlipTile(tile, val) {
//     if (tile.innerHTML === "" && memory_values.length < 2) {
//         tile.style.background = '#FFF';
//         tile.innerHTML = val;
//         if (memory_values.length === 0) {
//             memory_values.push(val);
//             memory_tile_ids.push(tile.id);
//         }
//         else if (memory_values.length === 1) {
//             memory_values.push(val);
//             memory_tile_ids.push(tile.id);
//             if(memory_values[0] == memory_values[1]) {
//                 tiles_flipped += 2;
//
//                 memory_values = [];
//                 memory_tile_ids = [];
//
//                 if (tiles_flipped == memory_array.length) {
//                     alert("board cleared... generating new board");
//                     document.getElementById('memory_board').innerHTML = "";
//                 }
//                 else {
//                     function flip2Back() {
//                         var tile_1 = document.getElementById(memory_tile_ids[0]);
//                         var tile_2 = document.getElementById(memory_tile_ids[1]);
//                         tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
//                         tile_2.innerHTML = "";
//
//                         memory_values = [];
//                         memory_tile_ids = [];
//                     }
//                     setTimeout(flip2Back, 1000)
//                     }
//                 }
//             }
//         }
// }
// function init() {
//     newBoard();
//     memoryFlipTile();
// }
//
// // function generateMemoryBoard() {
// //     var memoryBoard = document.createElement('div');
// //     memoryBoard.style.width = "300px";
// //     memoryBoard.style.height = "400px";
// //     memoryBoard.id = "board";
// //     document.body.appendChild(memoryBoard);
// //
// //     var tiles = [];
// //     var num_cols = 3;
// //     var num_rows = 4;
// //
// //     for (var i = 0; i < num_rows; i++) {
// //         num_rows = document.createElement('div');
// //         num_rows.classList.add("rows");
// //         memoryBoard.appendChild(num_rows);
// //         for (var j = 0; j < num_cols; j++) {
// //             var num_cols = document.createElement('div');
// //             num_cols.classList.add("cols");
// //             num_cols.addEventListener("mousedown", onClick);
// //             num_cols.addEventListener("mouseup", offClick);
// //             num_cols.addEventListener("mousemove", draw);
// //             // numCols.addEventListener("click", postStamp);
// //             num_rows.appendChild(num_cols);
// //
// //         }
// // }
// // }
//
// // //generate images array
// // function generateCardImageArray() {
// //     for(var i = 0; i < 12; i++){
// //         var cardImages = document.createElement('img');
// //         cardImages.src = "./images" + i + ".jpg";
// //         cardImages.classList.add("imagesArray");
// //         document.body.appendChild(cardImages);
// //
// //     }
// // }
// //
// // //in order to make cards not turn back over immediately, do setInterval(someCode, 1000)
// // function shuffleCards(o) {
// //     for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
// //     return o; //not totally sure what this does. Should probably figure it out.
// //     //or yourArray.sort(function() { return 0.5 - Math.random() });
// // }
// //
// // function startNewGame() {
// //     shuffleCards()
// //     cards_flipped = 0;
// //     if (cards_flipped === 2) {
// //
// //     }
// //     //if two cards are not matched, --> //in order to make cards not turn back over immediately, do setInterval(someCode, 1000)
// // }
// // //functions: 1 .create tile constructor function
// // function init() {
// //     generateMemoryBoard() //prob replace this with tile constructor function
// //     generateCardImageArray()
// //     startNewGame()
// // }