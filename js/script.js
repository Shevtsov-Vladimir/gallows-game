var word = nouns[ Math.floor( Math.random() * nouns.length ) ];
var remainingLetters = word.length;
var answerArray = [];
var regexp = /[а-яё]{1}/i;

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

off: while ( !(remainingLetters == 0) ) {
    alert( answerArray.join(" ") );

    let guess = prompt("Введите букву.");

    if (guess === null) {
        break off;
    } else if ( !regexp.test(guess) ) {
        continue;
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

if (remainingLetters == 0) {
 alert(`Слово ${word}.\nПоздравляю. Вы победили.`);
}
