// while

let i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

// do ~ while

let d = 0;

do {
    console.log(d);
    d++;
} while (d > 10);

for(let b = 0; b < 10; b++) {
    if(b === 5) {
        break;
    }
    console.log(b);
}

for(let c = 0; c < 10; c++) {
    if (c === 5) {
        continue;
    }
    console.log(c);
}