function* numbersGen(){
    let i = 0;
    while(true){
        yield i++;
    }
}

let nums =numbersGen();
console.log(nums.next().value)
console.log(nums.next().value)
console.log(nums.next().value)
console.log(nums.next().value)