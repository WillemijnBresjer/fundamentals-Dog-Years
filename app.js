// My age is 26:
const myAge = 26;

// The first two years of a dog's life:
let earlyYears = 2;

earlyYears *= 10.5;

// We already accounted for the first two years, so we only need to calculate the remaining part of my age into dog years:
let laterYears = myAge - 2;

// To calculate those remaining years of my age into dog years:
laterYears *= 4;

// To calculcate my age in dog years:
let myAgeInDogYears = earlyYears + laterYears;

// To write my name in all lowercase:
let myName = 'Willemijn'.toLowerCase();

// Here we combine all variables calculated together:
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);