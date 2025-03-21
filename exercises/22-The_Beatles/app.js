function sing() {
    let lyrics = '';
    const str = 'let it be, ';
    for(let i = 1; i <= 4; i++) lyrics += str;
    lyrics += "there will be an answer, ";
    for(let i = 1; i <= 5; i++) lyrics += str;
    lyrics += "whisper words of wisdom, let it be";
    return lyrics;
}

//Your code above ^^^

console.log(sing());