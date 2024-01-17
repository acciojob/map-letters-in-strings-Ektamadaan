//your JS code here. If required.
function mapLetters(word) {
    return [...word].reduce((result, letter, index) => {
        const key = Symbol.for(letter);

        // If the key exists, push the index to the existing array; otherwise, create a new array
        result[key] = result[key] ? [...result[key], index] : [index];

        return result;
    }, {});
}

const str1 = prompt("Enter String:")
alert(mapLetters(str1));





