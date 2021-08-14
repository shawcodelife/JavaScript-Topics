let x = 10;
const calculation = (a, b) =>{
    let y = 15;
    const add = ()=>{
        console.log(`Addition of ${x}, ${a}, ${b}, ${y} is ${(x+y+a+b)}.`);
    }
    return add;
}

let result = calculation(10,20);
result();