// Challenge 1: Reverse A String
//return a string in reverse
//ex. reverseString('hello')==='olleh'

const reverseString = (str) => {
    // Solution 1
    // let reversed = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i]
    // }
    // return reversed

    // Solution 2
    // return str.split('').reduce((acc, curr) => curr + acc)

    // Solution 3
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'))