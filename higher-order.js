const companies = [
    { name: "Company1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company1", category: "Finance", start: 1981, end: 2003 },
];

const ages = [33, 23, 54, 54, 234, 44, 32, 123]

// standard: for loop
// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i])
// }
// for each
// params: iterator, index, entire array
function test() {
    return companies.forEach((company) => company.name)


}

console.log(test())