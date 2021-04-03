const http = require('http');
const fs= require('fs');
const requests = require('requests')
const homePage = fs.readFileSync('weather.html' , 'utf-8');


const replaceVal = (curVal,oriVal) =>{
  let temperature =  curVal.replace( "{%tem%}",oriVal.main.temp);
   temperature = temperature.replace("{%mx%}",oriVal.main.temp_max);
   temperature = temperature.replace("{%min%}",oriVal.main.temp_min);
   temperature = temperature.replace("{%city%}",oriVal.name);
   temperature = temperature.replace("{%country%}",oriVal.sys.country);
   return temperature;
}
const server = http.createServer((req, res) =>{
  if(req.url == '/'){
    requests('http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=39834d0e636d111ae0b8218621272029')
    .on('data', (chunk)=> {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        const realTimeData = arrData.map((oriVal)=>  replaceVal(homePage, oriVal)).join('');
        res.write(realTimeData)
        
        
    })
    .on('end', (err)=> {
      if (err) return console.log('connection closed due to errors', err);
     res.end();

    });
  }
})
server.listen(5000, ()=>{
    console.log('port 5000')
})