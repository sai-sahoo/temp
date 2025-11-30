const { readFile, writeFile } = require('fs');
readFile('./content/first.txt', 'utf-8', (err, data1) => {
    if(err) {
        console.log(err);
        return;
    }
    readFile('./content/second.txt', 'utf-8', (err, data2) => {
        if(err) {
            console.log(err);
            return;
        }
        writeFile('./content/third.txt', `Result is ${data1}, ${data2}`, { flag: 'a' }, (err, res) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(res);
        })
    })
});