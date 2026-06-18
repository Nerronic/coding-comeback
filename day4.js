function getLastItem(array){
    return array[array.length - 1]
}

const gundams = [
    "Exia",
    "Dynames",
    "Kyrios",
    "Virtue"
];

console.log(getLastItem(gundams))

function countCharacters(word){
return word.length
}

console.log(countCharacters(gundams[0]))



function introduceYourself(name,age){
return `My name is ${name} and I am ${age} years old `
}

console.log(introduceYourself("Ty", 38))