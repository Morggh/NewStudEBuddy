
function createCardSet(){
    
};

function addCardToSet(){
    //identify values
    const cardFront = document.getElementById('cardFront').value;
    const cardBack = document.getElementById('cardBack').value;

    //save values to database
    const cardTotal = [cardFront, cardBack]
    cardSet.push(cardFront , cardBack);
    alert(cardTotal);
    //update array display
    updateCardList()
}

function updateCardList(){
//identify display location


}




