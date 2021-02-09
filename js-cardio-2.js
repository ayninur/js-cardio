// Challenge 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === ['hello', 'there']

const longestWord = (sen) => {
    //put words in to an array
    let wordArray = sen.toLowerCase().match(/[a-z0-9]+/gi)

    //sort the words
    let sorted = wordArray.sort((a, b) => b.length - a.length)

    //return the words with the highest length
    let highest = sorted.filter((word) => word.length === sorted[0].length)
    return highest
}
console.log(longestWord("helloo, startt"))


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

const capitalize = (str) => {
    // Solution 1
    // return str.split(' ').map(curr => curr.charAt(0).toUpperCase() + curr.slice(1, str.length)).join(' ')

    // Solution 2
    // str = str.toLowerCase().split(' ')
    // for (let i = 0; i < str.length; i++) {
    //     str[i] = str[i].substring(0, 1).toUpperCase() + str[i].substring(1)
    // }
    // return str

    // Solution 3
    // return str.split(' ').map(char => char[0].toUpperCase() + char.substring(1)).join(' ')


}

// console.log(capitalize('i love javascript'))

// Challenge 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') === 'a'
const maxCharacter = (str) => {
    // // // Solution 1
    // let charMap = {};
    // let max = 0;
    // let maxChar = '';

    // for (let char of str) {
    //     if (charMap[char]) {
    //         charMap[char]++
    //     } else if (!charMap[char]) {
    //         charMap[char] = 1;
    //     }
    // }

    // for (let char in charMap) {
    //     if (charMap[char] > max) {
    //         max = charMap[char];
    //         maxChar = char;
    //     }
    // }
    // return maxChar
}

// console.log(maxCharacter('javascript'))

// Challenge 6:Fizbuzz
// Write a program that prints all the numbers from 1 to 100.For mulitples of 3 instead of the number prints "Fizz" for miltiples of 5 print "buzz" for the numbers that are multiples for both 
// fizz buzz"

const fizzbuz = (n) => {
    // for (let i = 0; i < n; i++) {
    //     if (i % 3 === 0 && i % 5 === 0) {
    //         console.log("FizzBuzz")
    //     } else if (i % 3 === 0) {
    //         console.log("Fizz")
    //     } else if (i % 5 === 0) {
    //         console.log("Buzz")
    //     } else {
    //         console.log(i)
    //     }
    // }

}

// console.log(fizzbuz(100))