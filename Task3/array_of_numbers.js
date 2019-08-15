let num = [123, 9, 27]
let firstNum = 0
for(let i = 0; i < num.length; i++){
    firstNum += num[i]
}

let secondNum = firstNum.toString();

while(secondNum.length > 1){
    firstNum = 0
    secondNum = secondNum.toString().split('')

    for(let i = 0; i < secondNum.length; i++){
        firstNum += parseInt(secondNum[i])
    }

    secondNum = firstNum.toString()
}
console.log(secondNum)