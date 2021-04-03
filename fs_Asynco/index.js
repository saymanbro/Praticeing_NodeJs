const fs = require('fs');
// fs.writeFile('read.txt', "To day is awesome day. Thanks to allah to give the chance to enjoy this day", 
// (err) =>{ 
//     console.log('file created');
//     console.log(err);
// })

// fs.appendFile('read.txt',' the weather is so beautifully', (err) =>{
//     console.log(err);
//     console.log('file append successfully');
// })

fs.readFile('read.txt','utf-8', (err, res) =>{
    console.log(err);
    console.log(res);
})