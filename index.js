function writeCards(nameArray, event){
    let thankYouCards = [];
    for (let i = 0; i <nameArray.length; i++){
        thankYouCards.push(`Thank you, ${nameArray[i]}, for the wonderful surprise gift!`);
    }
    return thankYouCards;
}

function countDown(n){
    while (n > 0){
        console.log(n);
        n -= 1;
      }
    console.log(n);
}