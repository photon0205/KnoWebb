// This js file contain functions for Jumble Word game
import nextId from "react-id-generator";

const words =["Infrared","Imaging", "Cartwheel", "Kapton", "NIRCam"] 

// JUmbling the words 
for (let i = 0; i < words.length; i++) {
    let j = Math.floor(Math.random() * words.length);
    let temp = words[i]
    words[i] = words[j]
    words[j] = temp
}

// shuffling the letters of word
function shuffle(word) {
    let arr = word.split('');
    for (let i = 0; i < word.length; i++) {
        let j = Math.floor(Math.random() * word.length);
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    word = arr.join('');
    return word
}

// splitting the word into letters and assigning id to each letter
function splitting(word) {
    const list = [];
    const jumbleWord = shuffle(word);
    for (let i = 0; i < jumbleWord.length; i++) {
        const obj = {
            letter: jumbleWord[i],
            id: nextId()
        }
        list.push(obj)
    }
    return list;
}

// updating the list according to the position where letter is dropped
function updateList(list, result, word) {
    const items = Array.from(list);
    const [reorderItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderItem);

    // checking if word is correct 
    let str = "";
    let correct = false;
    for (let i = 0; i < items.length; i++) str += items[i]["letter"];
    if (str === word) correct = true;
    return { items, correct };
}

// choosing random word 
function randomWord(games) {
    const word = words[games - 1].toUpperCase();
    const list = splitting(word);
    return { word, list }
}

export { randomWord, updateList }