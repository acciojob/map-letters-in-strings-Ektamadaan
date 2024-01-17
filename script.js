//your JS code here. If required.
function mapLetters(word) {
   const result = {};

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        const key = Symbol.for(letter);

        if (result[key]) {
            
            result[key].push(i);
        } else {
            
            result[key] = [i];
        }
    }

    return result;
}

//const str1 = prompt("Enter String:")
alert(mapLetters(str1));





