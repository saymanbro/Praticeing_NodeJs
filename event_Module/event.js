const EventEmitter = require('events');
const event = new EventEmitter();

event.on('sum', (num,num2, num3 = 4)=>{
    console.log(num + num2 + num3);
})
event.emit('sum',5,5)