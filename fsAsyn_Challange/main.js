const fs = require('fs');
// fs.mkdir('thapa', (err) => {
//     console.log('folder created');
//     console.log(err);
// })
// fs.writeFile('thapa/bio.txt','this is my bio file',  (err)=>{
//     console.log(err);
//     console.log('file created');
// })
// fs.appendFile('thapa/bio.txt', 'I am going to be an awesome MERN developer bro.. :)', (err)=>{
//     console.log('added data');
// })
// fs.readFile('thapa/bio.txt','utf-8', (err, data)=>{
//     console.log('file read done');
//     console.log(data);
// })
// fs.rename('thapa/bio.txt', 'thapa/mybio.txt', (err) => {
//     console.log(err);
//     console.log('file rename done');
// })
// fs.unlink('thapa/mybio.txt', (err) => {
//     console.log('file removed');
// })
fs.rmdir('thapa', (err)=>{
    console.log('dir removed');
})