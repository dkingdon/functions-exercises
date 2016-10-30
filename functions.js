// TODO: add your solutions here!

// -------- Assignment 1: Combine Words --------------------------------
function combineWords(word1, word2){
    console.log(word1 + word2);
    return word1 + word2;
}

var result = combineWords('dog', 'house');

console.log(result);

// -------- Assignment 2: Reapeat Phrase --------------------------------
function repeatPhrase(phrase, n){
    for (var i = 0; i < n; i++){
        console.log(phrase);
    }
}

repeatPhrase('Hello', 5);

// -------- Assignment 3: Build your own power function -----------------

function toTheNthPower(number, power){
    var total = number
              /* setting i to power - 1 because the total variable starts with the first value*/
        for ( var i = (power - 1); i > 0; i--){
           var incPower = (total *= number);
        }
    return total
}
var result = toTheNthPower(4, 5);
console.log(result);


// -------- Assignment 4: Area of a circle ------------------------------
function areaOfCircle(radius){
    return 3.14 * (radius * radius);
}
var result = areaOfCircle(2);
console.log(result);

// -------- Assignment 5: Pythagorean Theorem ---------------------------
function pythagoreanTheorem(a, b){
    var total = (a * a) + (b * b);
    return Math.sqrt(total);
}
var result = pythagoreanTheorem(3, 4);
console.log(result);

// -------- Assignment 6: Is X Evenly Divisible by Y --------------------
function isXevenlyDivisibleByY(x, y){
    if (x % y === 0){
        return true;
    }
    return false;
}
var result = isXevenlyDivisibleByY(99, 3);
console.log(result);

// -------- Assignment 7: Vowel Count -----------------------------------
// There must be a much simpler way to do this.
function countVowel(word){
    var vowelTotal = [];
        for (var i=0; i<word.length; i++){
            switch (word[i]) {
                case 'a':
                    vowelTotal.push(i);
                    break;
                case 'e':
                    vowelTotal.push(i);
                    break;
                case 'i':
                    vowelTotal.push(i);
                    break;
                case 'o':
                    vowelTotal.push(i);
                    break;
                case 'u':
                    vowelTotal.push(i);
                    break;
                default:
                    break;
            }
        }
    return vowelTotal.length;
}

var result = countVowel('stealing');
console.log(result);

// -------- Assignment 8: Vowel Count -----------------------------------
