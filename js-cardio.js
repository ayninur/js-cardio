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
    // return str.split('').reduce((reversed, curr) => curr + acc, '')

    // Solution 3
    // return str.split('').reverse().join('');

    // Solution 4
    // let reversed = '';
    // for (let i = 0; i < str.length; i++) {
    //     reversed = str[i] + reversed
    // }
    // return reversed

    // Solution 5
    // let reversed = '';
    // for (let char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed

    // Solution 6
    // let reversed = '';
    // str.split('').forEach(char => reversed = char + reversed)
    // return reversed
}
// console.log(reverseString('hello'))


// Challenge 2: Palindrome
//  Return true if palindrome and false if not
//  ex. isPalindrome('racecar')==='true'
// isPalindrome('hello')===false
const isPalindrome = (str) => {
    // Solution 1
    // return str === str.split('').reverse().join('')

    // Solution 2
    // return str === str.split('').reduce((reversed, curr) => curr + reversed, '')

    // Solution 3 
    // let reversed = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed = reversed + str[i]
    // }
    // return str === reversed

    // Solution 4
    // let reversed = '';
    // str.split('').forEach((char) => reversed = char + reversed)
    // return reversed === str
}
// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('hello'))

// Challenge 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521)===125

const reverseInt = (int) => {
    // Solution 1
    // return parseInt(String(int).split('').reverse().join('')) * Math.sign(int);

    // Soltion 2
    // return parseInt(int.toString().split('').reduce((reversed, currVal) => currVal + reversed, '')) * Math.sign(int)

    // Solution 3
    // let reversed = '';
    // int = String(int)
    // for (let i = int.length - 1; i > 0; i--) {
    //     reversed += int[i];
    // }
    // return parseInt(reversed) * Math.sign(int)
}
// console.log(reverseInt(-521))

// Challenge 4: CAPITALIZE LETTERS
// Return a strinf with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') = 'I Love You Javascript')

// const capitalize = (str) => {
//     return str.split(' ').map(curr => curr.charAt(0).toUpperCase() + curr.slice(1, str.length).join(' '))
// }

// console.log(capitalize('i love javascript'))
