function incrementScore(scoreId) {
    const scoreElement = document.getElementById(scoreId);
    let score = parseInt(scoreElement.textContent);
    if (score < 30) {
        scoreElement.textContent = score + 1;
    }
}

function decrementScore(scoreId){
    const scoreElement = document.getElementById(scoreId);
    let score = parseInt(scoreElement.textContent);

    if(score > 0){

        scoreElement.textContent = score - 1;
    }
}