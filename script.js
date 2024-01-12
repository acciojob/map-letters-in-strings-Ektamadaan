//your JS code here. If required.
function mapLetters(word) {
    const letterMap = {};

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (!letterMap[letter]) {
            // If the letter is not a key in the object, initialize it with an array containing the current index.
            letterMap[letter] = [i];
        } else {
            // If the letter is already a key, push the current index to its array of indexes.
            letterMap[letter].push(i);
        }
    }

    return letterMap;
}

//const str1 = prompt("Enter String:")
alert(mapLetters(str1));





