
let cardSet = [];

function addCardToSet(){
    //identify values
    const cardFront = document.getElementById('cardFront').value;
    const cardBack = document.getElementById('cardBack').value;

    //add to local array
    const cardTotal = [cardFront, cardBack]
    cardSet.push(cardFront , cardBack);
    alert(cardTotal);
    //update array display
    updateCardList()
}

function updateCardList(){
//identify display location


}




