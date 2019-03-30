// export {};

for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log('var based for loop', i); //6
    }, 1000);
}

// ------------------------------

for (let j = 1; j <= 5; j++) {
    setTimeout(() => {
        console.log('let based for loop', j); //1,2,3,4,5
    }, 1000);
}