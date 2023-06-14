function factorialCalc(number) {
    let add = 1;
    for(let i = 0; i<number; i++) {
        add *= (i+1);
    }
    return add; 
}

console.log(factorialCalc(5));

function triangle1(height) {
    for(let i=0; i<height; i++){
        console.log("x".repeat(i+1))
    }
}
triangle1(7);

console.log(factorialCalc(5));

