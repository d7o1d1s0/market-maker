import * as fs from 'fs';
let allPairsList = []

fs.readFile('pairs.json', (err, data) => {

    if (err) throw err;



    let info = JSON.parse(data);
    for (let i = 0; i < info.length; i++) {
        allPairsList.push(info[i])
    }

    // console.log(allPairsList)
})


fs.readFile('config.json', (err, data) => {
    if (err) throw err;

    let newPairs = [];

    let info = JSON.parse(data);
    let activePairs = Object.keys(info.pairs)

    // console.log(activePairs.length)
    // console.log(allPairsList.length)
    for (let i = 0; i < allPairsList.length; i++) {
        // console.log('index: ', activePairs.indexOf(allPairsList[i]))
        if (activePairs.indexOf(allPairsList[i].pair) < 0) {
            newPairs.push(allPairsList[i])
        } 
    }

    let data2 = JSON.stringify(newPairs, null, 2);
    fs.writeFileSync('newPairs.json', data2);


})