const fs = require('fs');
const myBio = {
    name:'sayman',
    age:49,
    village:'kundra'
}
// let jsonPormate = JSON.stringify(myBio)
// // console.log(jsonPormate);
// let objPormate = JSON.parse(jsonPormate);
// console.log(objPormate);
  const toJson = JSON.stringify(myBio);
//   console.log(toJson);
// fs.writeFile('json1.json',`${toJson}`, (err) => {
//     console.log('file created');
// })
fs.readFile('json1.json','utf-8',(err, data) => {
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);

})