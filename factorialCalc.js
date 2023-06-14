function factorialCalc(number) {
    const add = 1;
    for(let i = 0; i<number; i++) {
        add *= (i+1);
    }
    return add; 
}

console.log(factorialCalc(5));
