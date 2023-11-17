let userInput = prompt(
    "Please enter your order seperated by commas",
    "vanilla, chocolate, strawberry, coffee"
  );

// ^^^ Generate prompt on load ^^^
userInput = userInput.replace(/\s/g, '');
const stringArr = userInput.split(",");

// ^^^ Divide the user input string into an array ^^^  --- Learned the replacement from freecodecamp :)

const count = [];
function countOrder(stringArr) {
    for (let i = 0; i < stringArr.length; i++) {
        let item = stringArr[i];
        if(count[item] === undefined) {
            count[item] = 0;
        }
        count[item]++;
    }
    return count;
}

console.log(countOrder(stringArr));