const http = require('http');
const fs  = require('fs');
const server = http.createServer((req, res)=>{
     const data = fs.readFileSync(`${__dirname}/userApi/json1.json`, 'utf-8')
     const orgin  = JSON.parse(data);
    if(req.url == '/'){
        res.end('hello from the other side ');
    }else if(req.url == '/about'){
        res.end('hello from the aboutUs side ');
    }else if(req.url == '/contact'){
        res.end('hello from the contactUs side ');
    }else if(req.url == '/userApi'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(orgin[0].name);
    }
    else{
        res.writeHead(404, {'content-type' : 'text/html'});
        res.end('<h1> 404 Error page requested bro..')
    }
  
})
server.listen(3000,()=>{
    console.log('listening on 3000 port');
})