const multiply = (i) => i * 2 

function iterate (max, action) {
    for(let i = 0; i < max; i++) {
        console.log(i)
        let result = action(i);
        return result;
    }
}

iterate(5, multiply)