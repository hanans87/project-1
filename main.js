
// 1 -//select the element//wait for click//when click happins 
//     2 -// add class = cells/box///
//     3 -//$('.cell')//$("td")
//     4 -//$('cell').on('click',cellclicked)
//     5 -// make cell clicked function
//     // function cellClicked(){


var turn = "X"
function cellClicked(event) {
    // if the square is empty
    if ($(event.target).text() === ''){
        // add turn to square
        $(event.target).text(turn)
        // check for winner
        winnerList()
        // change turn
        if (turn === "X"){
            turn ="O"
        } else{
            turn ="X";
        }
    }
 
}
$(".cell").on("click", cellClicked)

function listCheck() {
   /**  var move = ("#")
    moveCount = "0" + "1" + "2" + "3" + "4" + "5" + "6" + "7" + "8" 
    if(moveCount == 9) {
        reset()
        alert ("reset!") */

        if 
        ( $('#0').text() !== "" &&
        $('#1').text() !== "" &&
        $('#2').text() !== ""&&
       $('#3').text() !== "" &&
       $('#4').text() !== "" &&
        $('#5').text() !== "" &&
        $('#6').text() !== ""&&
        $('#7').text() !== "" &&
        $('#8').text() !== "" ){

$('.cell').text('');
        }
        
    
}

function winnerList() {
    if ($('#0').text() === "X" &&
        $('#1').text() === "X" &&
        $('#2').text() === "X"
    ) { $('#message').text("winner!!") }
    else if (
        $('#3').text() === "X" &&
        $('#4').text() === "X" &&
        $('#5').text() === "X"
    ) { $('#message').text("winner!!") }
    else if (
        $('#6').text() === "X" &&
        $('#7').text() === "X" &&
        $('#8').text() === "X"
    ) { $('#message').text("Winner!!") }
    else if (
        $('#0').text() === "X" &&
        $('#3').text() === "X" &&
        $('#6').text() === "X"
    ) { $('#message').text("Winner!!") }
    else if (
        $('#1').text() === "X" &&
        $('#4').text() === "X" &&
        $('#7').text() === "X"
    ) { $('#message').text("Winner!!") }
    else if (
        $('#2').text() === "X" &&
        $('#5').text() === "X" &&
        $('#8').text() === "X"
    ) { $('#message').text("Winner!!") }
    else if (
        $('#2').text() === "X" &&
        $('#4').text() === "X" &&
        $('#6').text() === "X"
    ) { $('#message').text("Winner!!") }
    else if (
        $('#8').text() === "X" &&
        $('#4').text() === "X" &&
        $('#0').text() === "X"
    ) { $('#message').text("Winner!!") }
    else if
        ($('#0').text() === "O" &&
        $('#1').text() === "O" &&
        $('#2').text() === "O"
    ) { $('#message').text("winner!!") }
    else if (
        $('#3').text() === "O" &&
        $('#4').text() === "O" &&
        $('#5').text() === "O"
    ) { $('#message').text("winner!!") }
    else if (
        $('#6').text() === "O" &&
        $('#7').text() === "O" &&
        $('#8').text() === "O"
    ) { $('#message').text("Winner!!") }
    else if (
        $('#0').text() === "O" &&
        $('#3').text() === "O" &&
        $('#6').text() === "O"
    ) { $('#message').text("Winner!!") }
    else if (
        $('#1').text() === "O" &&
        $('#4').text() === "O" &&
        $('#7').text() === "O"
    ) { $('#message').text("Winner!!") }
    else if (
        $('#2').text() === "O" &&
        $('#5').text() === "O" &&
        $('#8').text() === "O"
    ) { $('#message').text("Winner!!") }
    else if (
        $('#2').text() === "O" &&
        $('#4').text() === "O" &&
        $('#6').text() === "O"
    ) { $('#message').text("Winner!!") }
    else if (
        $('#8').text() === "O" &&
        $('#4').text() === "O" &&
        $('#0').text() === "O"
    ) { $('#message').text("Winner!!") }
}


