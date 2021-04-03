const fs = require('fs');
const http  = require('http');
const server = http.createServer();
server.on('request', (req,res) => {
    // fs.readFile('lorem.txt', (err, data) => {
    //     if(err) return console.log(err);
    //     res.end(data.toString());
 //    })
         
//              2nd way is 
//   const stream = fs.createReadStream('loremd.txt');
//   stream.on('data', (chunkData) => {
//       res.write(chunkData);
//   });
//   stream.on('end', () =>{
//       res.end();
//   })
//   stream.on('error', (err) =>{
//       console.log(err);
//       res.end('file not found')
//   })
 //             3rd way 
      
 const stream = fs.createReadStream('lorem.txt');
 stream.pipe(res)
             

})
server.listen(3000, (err) => {
    console.log('listening 3000 port'); 
})