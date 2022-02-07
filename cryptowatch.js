import * as fs from 'fs';
import fetch from 'node-fetch';



fs.readFile('newPairs.json', (err, data) => {

    let promiseArray = []

    if (err) throw err;


    let info = JSON.parse(data);
    for (let i = 0; i < info.length; i++) {
        let ending = info[i].apiQuery
        let base = "https://api.cryptowat.ch/pairs/"
        let apiSearchUrl = base.concat(ending)
        promiseArray.push(apiSearchUrl);

    }

    runApiQuery(promiseArray)
})

const runApiQuery = async function (array) {
    for (let i = 0; i < array.length; i++) {
        await fetch(array[i])
        .then(r => r.json())
        .then(data => {
            if (data.error) {
                return
            } else {
            console.log(data.result.markets)
            }
        })
    }
}