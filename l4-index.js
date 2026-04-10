//l4-index.js
// Clean plates from restaurant tables
for (let i = 1; i <= 5; i++) {        // Outer: table numbers 1,2,3,4,5
    console.log(`Table no ${i}:`);
    
    for (let j = 1; j <= 10; j++) {   // Inner: plate per table 1-10
        console.log(`Clean plate ${i} from table ${j}`);
    }
    console.log('---');  // Separator between tables
}

// Print multiplication table (2-5 × 1-10)
for (let i = 2; i <= 5; i++) {        // Outer: numbers 2,3,4,5
    console.log(`Table of ${i}:`);
    
    for (let j = 1; j <= 10; j++) {   // Inner: multipliers 1-10
        console.log(`${i} × ${j} = ${i * j}`);
    }
    console.log('---');  // Separator between tables
}